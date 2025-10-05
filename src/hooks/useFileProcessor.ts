import { useState } from 'react';
import { toast } from 'sonner';
import * as pdfOps from '@/utils/pdfOperations';
import * as pdfConv from '@/utils/pdfConversions';

export interface ProcessingOptions {
  outputFormat?: string;
  quality?: string;
  voice?: string;
  model?: string;
  pages?: string;
  password?: string;
  watermarkText?: string;
  rotation?: number;
}

export const useFileProcessor = () => {
  const [isProcessing, setIsProcessing] = useState(false);

  const processFile = async (
    file: File | File[],
    toolType: string,
    options: ProcessingOptions = {}
  ) => {
    setIsProcessing(true);
    try {
      let result: Blob | Blob[] | string | null = null;
      let filename = 'processed_file.pdf';

      // Handle PDF operations offline
      switch (toolType) {
        case 'merge-pdf':
          if (Array.isArray(file)) {
            result = await pdfOps.mergePDFs(file);
            filename = 'merged.pdf';
          }
          break;

        case 'split-pdf':
          if (!Array.isArray(file)) {
            const pages = options?.pages || '1-';
            result = await pdfOps.splitPDF(file, pages);
            filename = 'split.pdf';
          }
          break;

        case 'compress-pdf':
          if (!Array.isArray(file)) {
            result = await pdfOps.compressPDF(file);
            filename = 'compressed.pdf';
          }
          break;

        case 'rotate-pdf':
          if (!Array.isArray(file)) {
            const rotation = options?.rotation || 90;
            result = await pdfOps.rotatePDF(file, rotation);
            filename = 'rotated.pdf';
          }
          break;

        case 'protect-pdf':
          if (!Array.isArray(file) && options?.password) {
            result = await pdfOps.protectPDF(file, options.password);
            filename = 'protected.pdf';
          }
          break;

        case 'watermark-pdf':
          if (!Array.isArray(file) && options?.watermarkText) {
            result = await pdfOps.watermarkPDF(file, options.watermarkText);
            filename = 'watermarked.pdf';
          }
          break;

        // Conversion operations
        case 'pdf-to-word':
          if (!Array.isArray(file)) {
            result = await pdfConv.pdfToWord(file);
            filename = 'converted.docx';
          }
          break;

        case 'pdf-to-excel':
          if (!Array.isArray(file)) {
            result = await pdfConv.pdfToExcel(file);
            filename = 'converted.csv';
          }
          break;

        case 'pdf-to-ppt':
          if (!Array.isArray(file)) {
            result = await pdfConv.pdfToPowerPoint(file);
            filename = 'converted_slides.zip';
          }
          break;

        case 'pdf-to-image':
          if (!Array.isArray(file)) {
            result = await pdfConv.pdfToImages(file);
            filename = 'pages.zip';
          }
          break;

        case 'pdf-to-text':
          if (!Array.isArray(file)) {
            result = await pdfConv.pdfToText(file);
            filename = 'extracted.txt';
          }
          break;

        case 'image-to-pdf':
          if (Array.isArray(file)) {
            result = await pdfConv.imagesToPDF(file);
            filename = 'images_to_pdf.pdf';
          }
          break;

        case 'word-to-pdf':
          if (!Array.isArray(file)) {
            result = await pdfConv.wordToPDF(file);
            filename = 'word_to_pdf.pdf';
          }
          break;

        case 'excel-to-pdf':
          if (!Array.isArray(file)) {
            result = await pdfConv.excelToPDF(file);
            filename = 'excel_to_pdf.pdf';
          }
          break;

        case 'html-to-pdf':
          if (!Array.isArray(file)) {
            const html = await file.text();
            result = await pdfConv.htmlToPDF(html);
            filename = 'html_to_pdf.pdf';
          }
          break;

        case 'text-to-pdf':
          if (!Array.isArray(file)) {
            const text = await file.text();
            result = await pdfConv.textToPDF(text);
            filename = 'text_to_pdf.pdf';
          }
          break;

        default:
          toast.error('Tool not supported yet');
          return null;
      }

      // Download result
      if (result) {
        if (typeof result === 'string') {
          // Text result
          const blob = new Blob([result], { type: 'text/plain' });
          pdfOps.downloadBlob(blob, filename);
        } else if (Array.isArray(result)) {
          // Multiple files
          result.forEach((blob, index) => {
            pdfOps.downloadBlob(blob, `${filename.replace('.pdf', '')}_${index + 1}.pdf`);
          });
        } else {
          // Single blob
          pdfOps.downloadBlob(result, filename);
        }
        
        toast.success('File processed successfully!');
        return { success: true, filename };
      }

      return null;
    } catch (error) {
      console.error('Processing error:', error);
      toast.error('An error occurred while processing the file');
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
      // TTS functionality disabled - requires external API
      toast.info('Text-to-speech requires external API integration');
      return null;
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
      // STT functionality disabled - requires external API
      toast.info('Speech-to-text requires external API integration');
      return null;
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