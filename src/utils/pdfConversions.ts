import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import jsPDF from 'jspdf';
import * as pdfjsLib from 'pdfjs-dist';
import mammoth from 'mammoth';

// Configure PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.js`;

// PDF to Images
export const pdfToImages = async (file: File): Promise<Blob[]> => {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  const images: Blob[] = [];
  
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const viewport = page.getViewport({ scale: 2.0 });
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    
    if (!context) continue;
    
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    
    await page.render({
      canvasContext: context,
      viewport: viewport,
      intent: 'print'
    } as any).promise;
    
    const blob = await new Promise<Blob>((resolve) => {
      canvas.toBlob((blob) => resolve(blob!), 'image/png');
    });
    
    images.push(blob);
  }
  
  return images;
};

// PDF to Text
export const pdfToText = async (file: File): Promise<string> => {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  let fullText = '';
  
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const textContent = await page.getTextContent();
    const pageText = textContent.items.map((item: any) => item.str).join(' ');
    fullText += `Page ${i}:\n${pageText}\n\n`;
  }
  
  return fullText;
};

// Images to PDF
export const imagesToPDF = async (files: File[]): Promise<Blob> => {
  const pdfDoc = await PDFDocument.create();
  
  for (const file of files) {
    const arrayBuffer = await file.arrayBuffer();
    let image;
    
    if (file.type === 'image/png') {
      image = await pdfDoc.embedPng(arrayBuffer);
    } else if (file.type === 'image/jpeg' || file.type === 'image/jpg') {
      image = await pdfDoc.embedJpg(arrayBuffer);
    } else {
      // Convert other formats to PNG first
      const img = await createImageBitmap(new Blob([arrayBuffer]));
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx?.drawImage(img, 0, 0);
      const pngBlob = await new Promise<Blob>((resolve) => {
        canvas.toBlob((blob) => resolve(blob!), 'image/png');
      });
      const pngBuffer = await pngBlob.arrayBuffer();
      image = await pdfDoc.embedPng(pngBuffer);
    }
    
    const page = pdfDoc.addPage([image.width, image.height]);
    page.drawImage(image, {
      x: 0,
      y: 0,
      width: image.width,
      height: image.height,
    });
  }
  
  const pdfBytes = await pdfDoc.save();
  return new Blob([pdfBytes], { type: 'application/pdf' });
};

// Text/HTML to PDF
export const textToPDF = async (text: string, filename: string = 'document.pdf'): Promise<Blob> => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const maxWidth = pageWidth - 2 * margin;
  
  const lines = doc.splitTextToSize(text, maxWidth);
  let y = margin;
  
  lines.forEach((line: string) => {
    if (y > pageHeight - margin) {
      doc.addPage();
      y = margin;
    }
    doc.text(line, margin, y);
    y += 7;
  });
  
  return doc.output('blob');
};

export const htmlToPDF = async (html: string): Promise<Blob> => {
  const doc = new jsPDF();
  
  // Create temporary div to render HTML
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;
  tempDiv.style.position = 'absolute';
  tempDiv.style.left = '-9999px';
  document.body.appendChild(tempDiv);
  
  // Extract text content (basic conversion)
  const text = tempDiv.innerText;
  document.body.removeChild(tempDiv);
  
  const lines = doc.splitTextToSize(text, 170);
  let y = 20;
  
  lines.forEach((line: string) => {
    if (y > 280) {
      doc.addPage();
      y = 20;
    }
    doc.text(line, 20, y);
    y += 7;
  });
  
  return doc.output('blob');
};

// Word to PDF (limited support - text only)
export const wordToPDF = async (file: File): Promise<Blob> => {
  const arrayBuffer = await file.arrayBuffer();
  const result = await mammoth.extractRawText({ arrayBuffer });
  const text = result.value;
  
  return textToPDF(text);
};

// PDF to Word (text extraction)
export const pdfToWord = async (file: File): Promise<Blob> => {
  const text = await pdfToText(file);
  
  // Create a simple HTML-based Word document
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Converted Document</title>
      </head>
      <body>
        <pre style="font-family: Arial, sans-serif; white-space: pre-wrap;">${text}</pre>
      </body>
    </html>
  `;
  
  return new Blob([htmlContent], { 
    type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' 
  });
};

// PDF to Excel (basic table extraction)
export const pdfToExcel = async (file: File): Promise<Blob> => {
  const text = await pdfToText(file);
  
  // Create CSV format
  const csvContent = text.split('\n').map(line => `"${line}"`).join('\n');
  
  return new Blob([csvContent], { type: 'text/csv' });
};

// PDF to PowerPoint (image-based slides)
export const pdfToPowerPoint = async (file: File): Promise<Blob[]> => {
  // Convert each page to an image
  return await pdfToImages(file);
};

// Excel/CSV to PDF
export const excelToPDF = async (file: File): Promise<Blob> => {
  const text = await file.text();
  return textToPDF(text);
};

// PowerPoint to PDF (not fully supported in browser)
export const powerPointToPDF = async (file: File): Promise<Blob> => {
  // This is a placeholder - full PPT conversion requires server-side processing
  // For now, we'll create a simple placeholder PDF
  const doc = new jsPDF();
  doc.text('PowerPoint conversion is limited in browser.', 20, 20);
  doc.text('Please use desktop software for full conversion.', 20, 30);
  return doc.output('blob');
};
