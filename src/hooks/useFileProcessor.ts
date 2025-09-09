import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export interface ProcessingOptions {
  outputFormat?: string;
  quality?: string;
  voice?: string;
  model?: string;
}

export const useFileProcessor = () => {
  const [isProcessing, setIsProcessing] = useState(false);

  const processFile = async (
    file: File,
    toolType: string,
    options: ProcessingOptions = {}
  ) => {
    setIsProcessing(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('toolType', toolType);
      formData.append('options', JSON.stringify(options));

      const { data, error } = await supabase.functions.invoke('process-file', {
        body: formData
      });

      if (error) {
        toast.error('Processing failed. Please try again.');
        return null;
      }

      if (data.success) {
        // Create download link
        const link = document.createElement('a');
        link.href = data.downloadUrl;
        link.download = data.fileName;
        link.click();
        toast.success('File processed successfully!');
        return data;
      }
    } catch (error) {
      console.error('Processing error:', error);
      toast.error('Processing failed. Please try again.');
      return null;
    } finally {
      setIsProcessing(false);
    }
  };

  const generateSpeech = async (
    text: string,
    voice: string = 'Aria',
    model: string = 'eleven_multilingual_v2'
  ) => {
    setIsProcessing(true);
    try {
      const { data, error } = await supabase.functions.invoke('text-to-speech', {
        body: { text, voice, model }
      });

      if (error) {
        toast.error('Text-to-speech conversion failed');
        return null;
      }

      if (data.success) {
        const link = document.createElement('a');
        link.href = data.downloadUrl;
        link.download = data.fileName;
        link.click();
        toast.success('Audio generated successfully!');
        return data;
      }
    } catch (error) {
      console.error('TTS error:', error);
      toast.error('Text-to-speech conversion failed');
      return null;
    } finally {
      setIsProcessing(false);
    }
  };

  const transcribeAudio = async (audioFile: File) => {
    setIsProcessing(true);
    try {
      const formData = new FormData();
      formData.append('audio', audioFile);

      const { data, error } = await supabase.functions.invoke('speech-to-text', {
        body: formData
      });

      if (error) {
        toast.error('Speech-to-text conversion failed');
        return null;
      }

      if (data.success) {
        toast.success('Audio transcribed successfully!');
        return data.transcription;
      }
    } catch (error) {
      console.error('STT error:', error);
      toast.error('Speech-to-text conversion failed');
      return null;
    } finally {
      setIsProcessing(false);
    }
  };

  return {
    processFile,
    generateSpeech,
    transcribeAudio,
    isProcessing
  };
};