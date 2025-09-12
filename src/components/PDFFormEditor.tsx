import React, { useState, useRef, useCallback } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Download, Type, Square, Edit3, MousePointer } from 'lucide-react';
import { toast } from 'sonner';

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PDFField {
  id: string;
  type: 'text' | 'checkbox' | 'signature';
  x: number;
  y: number;
  width: number;
  height: number;
  value: string;
  fontSize: number;
  pageNumber: number;
}

interface PDFFormEditorProps {
  file: File;
}

export const PDFFormEditor: React.FC<PDFFormEditorProps> = ({ file }) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [fields, setFields] = useState<PDFField[]>([]);
  const [selectedTool, setSelectedTool] = useState<'select' | 'text' | 'checkbox' | 'signature'>('select');
  const [selectedField, setSelectedField] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [scale, setScale] = useState(1.2);
  const pageRef = useRef<HTMLDivElement>(null);
  const [pdfUrl, setPdfUrl] = useState<string>('');

  React.useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file);
      setPdfUrl(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [file]);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    toast.success('PDF loaded successfully! Click anywhere to add form fields.');
  };

  const onPageClick = useCallback((event: React.MouseEvent) => {
    if (selectedTool === 'select' || !pageRef.current) return;

    const rect = pageRef.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / scale;
    const y = (event.clientY - rect.top) / scale;

    const newField: PDFField = {
      id: `field-${Date.now()}`,
      type: selectedTool,
      x: Math.round(x),
      y: Math.round(y),
      width: selectedTool === 'checkbox' ? 20 : 150,
      height: selectedTool === 'checkbox' ? 20 : selectedTool === 'signature' ? 60 : 30,
      value: '',
      fontSize: 12,
      pageNumber: pageNumber
    };

    setFields(prev => [...prev, newField]);
    setSelectedField(newField.id);
    toast.success(`${selectedTool.charAt(0).toUpperCase() + selectedTool.slice(1)} field added!`);
  }, [selectedTool, scale, pageNumber]);

  const updateField = (fieldId: string, updates: Partial<PDFField>) => {
    setFields(prev => prev.map(field => 
      field.id === fieldId ? { ...field, ...updates } : field
    ));
  };

  const deleteField = (fieldId: string) => {
    setFields(prev => prev.filter(field => field.id !== fieldId));
    setSelectedField(null);
    toast.success('Field deleted');
  };

  const getCurrentPageFields = () => {
    return fields.filter(field => field.pageNumber === pageNumber);
  };

  const downloadFilledPDF = async () => {
    try {
      setIsProcessing(true);
      
      const arrayBuffer = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(arrayBuffer);
      const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
      
      // Group fields by page
      const fieldsByPage = fields.reduce((acc, field) => {
        if (!acc[field.pageNumber]) acc[field.pageNumber] = [];
        acc[field.pageNumber].push(field);
        return acc;
      }, {} as Record<number, PDFField[]>);

      // Add fields to each page
      Object.entries(fieldsByPage).forEach(([pageNum, pageFields]) => {
        const page = pdfDoc.getPage(parseInt(pageNum) - 1);
        const { height } = page.getSize();

        pageFields.forEach(field => {
          if (field.type === 'text' && field.value) {
            page.drawText(field.value, {
              x: field.x,
              y: height - field.y - field.height,
              size: field.fontSize,
              font: font,
              color: rgb(0, 0, 0),
            });
          } else if (field.type === 'checkbox' && field.value === 'checked') {
            page.drawText('✓', {
              x: field.x,
              y: height - field.y - field.height,
              size: field.fontSize,
              font: font,
              color: rgb(0, 0, 0),
            });
          } else if (field.type === 'signature' && field.value) {
            page.drawText(field.value, {
              x: field.x,
              y: height - field.y - field.height,
              size: field.fontSize,
              font: font,
              color: rgb(0, 0, 1),
            });
          }
        });
      });

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      
      const a = document.createElement('a');
      a.href = url;
      a.download = `filled-${file.name}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      toast.success('PDF form filled and downloaded successfully!');
    } catch (error) {
      console.error('Error processing PDF:', error);
      toast.error('Error processing PDF. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const selectedFieldData = fields.find(f => f.id === selectedField);

  return (
    <div className="space-y-6">
      {/* Toolbar */}
      <Card className="p-4">
        <div className="flex flex-wrap items-center gap-4 justify-between">
          <div className="flex items-center gap-2">
            <Label>Tools:</Label>
            <div className="flex gap-1">
              <Button
                variant={selectedTool === 'select' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedTool('select')}
              >
                <MousePointer className="w-4 h-4 mr-1" />
                Select
              </Button>
              <Button
                variant={selectedTool === 'text' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedTool('text')}
              >
                <Type className="w-4 h-4 mr-1" />
                Text
              </Button>
              <Button
                variant={selectedTool === 'checkbox' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedTool('checkbox')}
              >
                <Square className="w-4 h-4 mr-1" />
                Checkbox
              </Button>
              <Button
                variant={selectedTool === 'signature' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedTool('signature')}
              >
                <Edit3 className="w-4 h-4 mr-1" />
                Signature
              </Button>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Label>Zoom:</Label>
              <Select value={scale.toString()} onValueChange={(value) => setScale(parseFloat(value))}>
                <SelectTrigger className="w-20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0.8">80%</SelectItem>
                  <SelectItem value="1">100%</SelectItem>
                  <SelectItem value="1.2">120%</SelectItem>
                  <SelectItem value="1.5">150%</SelectItem>
                  <SelectItem value="2">200%</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button
              onClick={downloadFilledPDF}
              disabled={isProcessing || fields.length === 0}
              className="bg-gradient-primary"
            >
              {isProcessing ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                  Processing...
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 mr-2" />
                  Download Filled PDF
                </>
              )}
            </Button>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* PDF Viewer */}
        <div className="lg:col-span-3">
          <Card className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPageNumber(prev => Math.max(1, prev - 1))}
                  disabled={pageNumber <= 1}
                >
                  Previous
                </Button>
                <span className="text-sm">
                  Page {pageNumber} of {numPages}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPageNumber(prev => Math.min(numPages, prev + 1))}
                  disabled={pageNumber >= numPages}
                >
                  Next
                </Button>
              </div>
              <div className="text-sm text-muted-foreground">
                {selectedTool !== 'select' && 'Click on the PDF to add fields'}
              </div>
            </div>
            
            <div className="relative border rounded overflow-auto max-h-[800px]">
              <div 
                ref={pageRef}
                className="relative cursor-crosshair"
                onClick={onPageClick}
              >
                <Document
                  file={pdfUrl}
                  onLoadSuccess={onDocumentLoadSuccess}
                  loading={<div className="flex justify-center p-8">Loading PDF...</div>}
                >
                  <Page 
                    pageNumber={pageNumber} 
                    scale={scale}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                  />
                </Document>
                
                {/* Render form fields overlay */}
                {getCurrentPageFields().map((field) => (
                  <div
                    key={field.id}
                    className={`absolute border-2 cursor-pointer transition-colors ${
                      selectedField === field.id 
                        ? 'border-primary bg-primary/10' 
                        : 'border-blue-400 bg-blue-400/5 hover:bg-blue-400/10'
                    }`}
                    style={{
                      left: field.x * scale,
                      top: field.y * scale,
                      width: field.width * scale,
                      height: field.height * scale,
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedField(field.id);
                      setSelectedTool('select');
                    }}
                  >
                    {field.type === 'text' && field.value && (
                      <div 
                        className="w-full h-full flex items-center px-1 text-black"
                        style={{ fontSize: (field.fontSize * scale) + 'px' }}
                      >
                        {field.value}
                      </div>
                    )}
                    {field.type === 'checkbox' && (
                      <div className="w-full h-full flex items-center justify-center text-black">
                        {field.value === 'checked' ? '✓' : ''}
                      </div>
                    )}
                    {field.type === 'signature' && field.value && (
                      <div 
                        className="w-full h-full flex items-center px-1 text-blue-600 italic"
                        style={{ fontSize: (field.fontSize * scale) + 'px' }}
                      >
                        {field.value}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Field Properties Panel */}
        <div className="space-y-4">
          <Card className="p-4">
            <h3 className="font-semibold mb-4">Field Properties</h3>
            
            {selectedFieldData ? (
              <div className="space-y-4">
                <div>
                  <Label>Field Type</Label>
                  <div className="text-sm text-muted-foreground capitalize">
                    {selectedFieldData.type}
                  </div>
                </div>

                {selectedFieldData.type === 'text' && (
                  <div>
                    <Label htmlFor="field-value">Text Value</Label>
                    <Textarea
                      id="field-value"
                      value={selectedFieldData.value}
                      onChange={(e) => updateField(selectedFieldData.id, { value: e.target.value })}
                      placeholder="Enter text..."
                      className="min-h-[60px]"
                    />
                  </div>
                )}

                {selectedFieldData.type === 'checkbox' && (
                  <div>
                    <Label htmlFor="checkbox-state">Checkbox State</Label>
                    <Select
                      value={selectedFieldData.value || 'unchecked'}
                      onValueChange={(value) => updateField(selectedFieldData.id, { value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="unchecked">Unchecked</SelectItem>
                        <SelectItem value="checked">Checked</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {selectedFieldData.type === 'signature' && (
                  <div>
                    <Label htmlFor="signature-text">Signature Text</Label>
                    <Input
                      id="signature-text"
                      value={selectedFieldData.value}
                      onChange={(e) => updateField(selectedFieldData.id, { value: e.target.value })}
                      placeholder="Type your signature..."
                    />
                  </div>
                )}

                <div>
                  <Label htmlFor="font-size">Font Size</Label>
                  <Select
                    value={selectedFieldData.fontSize.toString()}
                    onValueChange={(value) => updateField(selectedFieldData.id, { fontSize: parseInt(value) })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="8">8pt</SelectItem>
                      <SelectItem value="10">10pt</SelectItem>
                      <SelectItem value="12">12pt</SelectItem>
                      <SelectItem value="14">14pt</SelectItem>
                      <SelectItem value="16">16pt</SelectItem>
                      <SelectItem value="18">18pt</SelectItem>
                      <SelectItem value="20">20pt</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => deleteField(selectedFieldData.id)}
                  className="w-full"
                >
                  Delete Field
                </Button>
              </div>
            ) : (
              <div className="text-sm text-muted-foreground">
                Select a field to edit its properties, or use the tools above to add new fields.
              </div>
            )}
          </Card>

          <Card className="p-4">
            <h3 className="font-semibold mb-3">Instructions</h3>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>1. Select a tool from the toolbar</p>
              <p>2. Click on the PDF to add fields</p>
              <p>3. Click fields to select and edit them</p>
              <p>4. Fill in your information</p>
              <p>5. Download the completed form</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};