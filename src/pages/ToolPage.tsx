import { useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, Download, Settings, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import FileUpload from '@/components/FileUpload';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { allTools } from '@/data/tools';
import { useState } from 'react';

const ToolPage = () => {
  const { toolId } = useParams<{ toolId: string }>();
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const tool = allTools.find(t => t.id === toolId);
  
  if (!tool) {
    return <Navigate to="/404" replace />;
  }

  const handleFilesSelected = (files: File[]) => {
    setUploadedFiles(files);
  };

  const handleProcess = () => {
    setIsProcessing(true);
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      // Here you would normally trigger a download
      alert('Processing complete! In a real app, the file would download now.');
    }, 3000);
  };

  const getAcceptedTypes = () => {
    switch (tool.category) {
      case 'pdf':
        return { 'application/pdf': ['.pdf'] };
      case 'image':
        return { 
          'image/*': ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp'],
        };
      case 'video':
        return {
          'video/*': ['.mp4', '.avi', '.mov', '.wmv', '.flv', '.webm'],
        };
      case 'audio':
        return {
          'audio/*': ['.mp3', '.wav', '.flac', '.aac', '.ogg'],
        };
      default:
        return {};
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Tools
        </Link>

        {/* Tool Header */}
        <div className="text-center mb-12">
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl text-white text-2xl font-bold mb-6 tool-${tool.category}`}>
            {tool.icon}
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">{tool.title}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {tool.description}
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="upload" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="upload">Upload & Process</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
              <TabsTrigger value="help">Help</TabsTrigger>
            </TabsList>
            
            <TabsContent value="upload" className="space-y-8">
              {/* File Upload */}
              <Card className="p-8">
                <FileUpload
                  accept={getAcceptedTypes()}
                  maxFiles={tool.id.includes('merge') ? 10 : 1}
                  onFilesSelected={handleFilesSelected}
                  title={`Upload your ${tool.category.toUpperCase()} files`}
                  description={`Drop your files here or click to browse`}
                />
              </Card>

              {/* Process Button */}
              {uploadedFiles.length > 0 && (
                <div className="text-center">
                  <Button
                    size="lg"
                    onClick={handleProcess}
                    disabled={isProcessing}
                    className="bg-gradient-primary hover:shadow-lg hover:scale-105 transition-all duration-300 px-12 py-4"
                  >
                    {isProcessing ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-3" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4 mr-2" />
                        Process & Download
                      </>
                    )}
                  </Button>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="settings" className="space-y-6">
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <Settings className="w-5 h-5 text-primary mr-2" />
                  <h3 className="text-lg font-semibold">Processing Settings</h3>
                </div>
                <div className="grid gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Output Quality
                    </label>
                    <select className="w-full p-2 border border-border rounded-lg bg-background">
                      <option>High Quality</option>
                      <option>Medium Quality</option>
                      <option>Low Quality (Smaller File)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Output Format
                    </label>
                    <select className="w-full p-2 border border-border rounded-lg bg-background">
                      <option>Same as Input</option>
                      <option>PDF</option>
                      <option>JPG</option>
                      <option>PNG</option>
                    </select>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="help" className="space-y-6">
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <Info className="w-5 h-5 text-primary mr-2" />
                  <h3 className="text-lg font-semibold">How to Use {tool.title}</h3>
                </div>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      1
                    </div>
                    <p>Upload your {tool.category} file(s) using the upload area above</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      2
                    </div>
                    <p>Adjust any settings if needed (quality, format, etc.)</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      3
                    </div>
                    <p>Click "Process & Download" to start the conversion</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      4
                    </div>
                    <p>Your processed file will automatically download when ready</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-secondary/50">
                <h4 className="font-semibold text-foreground mb-3">Security & Privacy</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• All files are processed locally in your browser when possible</li>
                  <li>• Files uploaded to our servers are automatically deleted after 1 hour</li>
                  <li>• We never store or share your personal files</li>
                  <li>• All connections use SSL encryption</li>
                </ul>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ToolPage;