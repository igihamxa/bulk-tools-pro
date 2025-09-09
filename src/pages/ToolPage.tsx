import { useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, Download, Settings, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import FileUpload from '@/components/FileUpload';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { allTools } from '@/data/tools';
import { useFileProcessor } from '@/hooks/useFileProcessor';
import { useState } from 'react';

const ToolPage = () => {
  const { toolId } = useParams<{ toolId: string }>();
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [outputFormat, setOutputFormat] = useState('');
  const [quality, setQuality] = useState('high');
  const [textInput, setTextInput] = useState('');
  const [selectedVoice, setSelectedVoice] = useState('Aria');
  
  const { processFile, generateSpeech, transcribeAudio, isProcessing } = useFileProcessor();
  
  const tool = allTools.find(t => t.id === toolId);
  
  if (!tool) {
    return <Navigate to="/404" replace />;
  }

  const handleFilesSelected = (files: File[]) => {
    setUploadedFiles(files);
  };

  const handleProcess = async () => {
    if (tool.id === 'text-to-speech') {
      await generateSpeech(textInput, selectedVoice);
    } else if (tool.id === 'speech-to-text') {
      if (uploadedFiles.length > 0) {
        const transcription = await transcribeAudio(uploadedFiles[0]);
        if (transcription) {
          setTextInput(transcription);
        }
      }
    } else {
      if (uploadedFiles.length > 0) {
        await processFile(uploadedFiles[0], tool.id, {
          outputFormat,
          quality
        });
      }
    }
  };

  const getAcceptedTypes = () => {
    switch (tool.category) {
      case 'pdf':
        return { 'application/pdf': ['.pdf'] };
      case 'image':
        return { 
          'image/*': ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp', '.tiff', '.svg'],
        };
      case 'video':
        return {
          'video/*': ['.mp4', '.avi', '.mov', '.wmv', '.flv', '.webm', '.mkv', '.m4v'],
        };
      case 'audio':
        return {
          'audio/*': ['.mp3', '.wav', '.flac', '.aac', '.ogg', '.m4a', '.wma'],
        };
      case 'converter':
        // Accept multiple types for converters
        if (tool.id.includes('pdf')) return { 'application/pdf': ['.pdf'] };
        if (tool.id.includes('word')) return { 'application/*': ['.doc', '.docx'] };
        if (tool.id.includes('excel')) return { 'application/*': ['.xls', '.xlsx'] };
        if (tool.id.includes('ppt')) return { 'application/*': ['.ppt', '.pptx'] };
        if (tool.id.includes('image')) return { 'image/*': ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp'] };
        if (tool.id.includes('video')) return { 'video/*': ['.mp4', '.avi', '.mov', '.wmv', '.flv', '.webm'] };
        if (tool.id.includes('audio')) return { 'audio/*': ['.mp3', '.wav', '.flac', '.aac', '.ogg'] };
        return {};
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
              {/* Text to Speech Input */}
              {tool.id === 'text-to-speech' && (
                <Card className="p-8">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="text-input">Text to Convert</Label>
                      <Textarea
                        id="text-input"
                        placeholder="Enter the text you want to convert to speech..."
                        value={textInput}
                        onChange={(e) => setTextInput(e.target.value)}
                        className="min-h-[100px]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="voice-select">Voice</Label>
                      <Select value={selectedVoice} onValueChange={setSelectedVoice}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a voice" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Aria">Aria (Female)</SelectItem>
                          <SelectItem value="Roger">Roger (Male)</SelectItem>
                          <SelectItem value="Sarah">Sarah (Female)</SelectItem>
                          <SelectItem value="Laura">Laura (Female)</SelectItem>
                          <SelectItem value="Charlie">Charlie (Male)</SelectItem>
                          <SelectItem value="George">George (Male)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </Card>
              )}

              {/* Speech to Text Results */}
              {tool.id === 'speech-to-text' && textInput && (
                <Card className="p-8">
                  <div className="space-y-4">
                    <Label>Transcription Result</Label>
                    <Textarea
                      value={textInput}
                      onChange={(e) => setTextInput(e.target.value)}
                      className="min-h-[100px]"
                      placeholder="Transcribed text will appear here..."
                    />
                  </div>
                </Card>
              )}

              {/* File Upload */}
              {tool.id !== 'text-to-speech' && (
                <Card className="p-8">
                  <FileUpload
                    accept={getAcceptedTypes()}
                    maxFiles={tool.id.includes('merge') || tool.id.includes('joiner') ? 10 : 1}
                    onFilesSelected={handleFilesSelected}
                    title={tool.id === 'text-to-speech' ? 'No file needed for text-to-speech' : `Upload your ${tool.category.toUpperCase()} files`}
                    description={tool.id === 'text-to-speech' ? 'Use the text input above instead' : `Drop your files here or click to browse`}
                  />
                </Card>
              )}

              {/* Process Button */}
              {((tool.id === 'text-to-speech' && textInput.trim()) || 
                (tool.id !== 'text-to-speech' && uploadedFiles.length > 0)) && (
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
                        {tool.id === 'text-to-speech' ? 'Generate Audio' : 'Process & Download'}
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
                    <Label htmlFor="quality-select">Output Quality</Label>
                    <Select value={quality} onValueChange={setQuality}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select quality" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high">High Quality</SelectItem>
                        <SelectItem value="medium">Medium Quality</SelectItem>
                        <SelectItem value="low">Low Quality (Smaller File)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  {tool.category === 'converter' && (
                    <div>
                      <Label htmlFor="format-select">Output Format</Label>
                      <Select value={outputFormat} onValueChange={setOutputFormat}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select output format" />
                        </SelectTrigger>
                        <SelectContent>
                          {tool.id.includes('image') && (
                            <>
                              <SelectItem value="jpg">JPG</SelectItem>
                              <SelectItem value="png">PNG</SelectItem>
                              <SelectItem value="webp">WEBP</SelectItem>
                              <SelectItem value="gif">GIF</SelectItem>
                            </>
                          )}
                          {tool.id.includes('video') && (
                            <>
                              <SelectItem value="mp4">MP4</SelectItem>
                              <SelectItem value="avi">AVI</SelectItem>
                              <SelectItem value="mov">MOV</SelectItem>
                              <SelectItem value="webm">WEBM</SelectItem>
                            </>
                          )}
                          {tool.id.includes('audio') && (
                            <>
                              <SelectItem value="mp3">MP3</SelectItem>
                              <SelectItem value="wav">WAV</SelectItem>
                              <SelectItem value="flac">FLAC</SelectItem>
                              <SelectItem value="aac">AAC</SelectItem>
                            </>
                          )}
                          {tool.id.includes('pdf') && (
                            <>
                              <SelectItem value="pdf">PDF</SelectItem>
                              <SelectItem value="jpg">JPG</SelectItem>
                              <SelectItem value="png">PNG</SelectItem>
                            </>
                          )}
                        </SelectContent>
                      </Select>
                    </div>
                  )}
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