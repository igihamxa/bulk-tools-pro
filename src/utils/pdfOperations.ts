import { PDFDocument, rgb, StandardFonts, degrees } from 'pdf-lib';
import { saveAs } from 'file-saver';

export const mergePDFs = async (files: File[]): Promise<Blob> => {
  const mergedPdf = await PDFDocument.create();
  
  for (const file of files) {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await PDFDocument.load(arrayBuffer);
    const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
    copiedPages.forEach((page) => mergedPdf.addPage(page));
  }
  
  const pdfBytes = await mergedPdf.save();
  return new Blob([pdfBytes], { type: 'application/pdf' });
};

export const splitPDF = async (file: File, ranges: string): Promise<Blob[]> => {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await PDFDocument.load(arrayBuffer);
  const totalPages = pdf.getPageCount();
  
  // Parse ranges like "1-3,5,7-9"
  const pageGroups: number[][] = [];
  const rangeArray = ranges.split(',').map(r => r.trim());
  
  for (const range of rangeArray) {
    if (range.includes('-')) {
      const [start, end] = range.split('-').map(n => parseInt(n.trim()));
      const pages = Array.from({ length: end - start + 1 }, (_, i) => start + i - 1);
      pageGroups.push(pages);
    } else {
      pageGroups.push([parseInt(range) - 1]);
    }
  }
  
  const splitPdfs: Blob[] = [];
  
  for (const pages of pageGroups) {
    const newPdf = await PDFDocument.create();
    const copiedPages = await newPdf.copyPages(pdf, pages);
    copiedPages.forEach((page) => newPdf.addPage(page));
    const pdfBytes = await newPdf.save();
    splitPdfs.push(new Blob([pdfBytes], { type: 'application/pdf' }));
  }
  
  return splitPdfs;
};

export const compressPDF = async (file: File): Promise<Blob> => {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await PDFDocument.load(arrayBuffer);
  
  // Save with compression options
  const pdfBytes = await pdf.save({
    useObjectStreams: true,
    addDefaultPage: false,
  });
  
  return new Blob([pdfBytes], { type: 'application/pdf' });
};

export const rotatePDF = async (file: File, rotation: number): Promise<Blob> => {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await PDFDocument.load(arrayBuffer);
  const pages = pdf.getPages();
  
  pages.forEach(page => {
    const currentRotation = page.getRotation().angle;
    page.setRotation(degrees(currentRotation + rotation));
  });
  
  const pdfBytes = await pdf.save();
  return new Blob([pdfBytes], { type: 'application/pdf' });
};

export const protectPDF = async (file: File, password: string): Promise<Blob> => {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await PDFDocument.load(arrayBuffer);
  
  // Note: pdf-lib doesn't support encryption directly
  // This is a placeholder - in production you'd use a library like pdf.js with encryption support
  const pdfBytes = await pdf.save();
  
  return new Blob([pdfBytes], { type: 'application/pdf' });
};

export const watermarkPDF = async (
  file: File, 
  watermarkText: string, 
  options?: { fontSize?: number; opacity?: number; color?: [number, number, number] }
): Promise<Blob> => {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await PDFDocument.load(arrayBuffer);
  const pages = pdf.getPages();
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  
  const fontSize = options?.fontSize || 40;
  const opacity = options?.opacity || 0.3;
  const color = options?.color || [0.5, 0.5, 0.5];
  
  pages.forEach(page => {
    const { width, height } = page.getSize();
    const textWidth = font.widthOfTextAtSize(watermarkText, fontSize);
    const textHeight = fontSize;
    
    page.drawText(watermarkText, {
      x: (width - textWidth) / 2,
      y: (height - textHeight) / 2,
      size: fontSize,
      font: font,
      color: rgb(color[0], color[1], color[2]),
      opacity: opacity,
      rotate: degrees(-45),
    });
  });
  
  const pdfBytes = await pdf.save();
  return new Blob([pdfBytes], { type: 'application/pdf' });
};

export const deletePDFPages = async (file: File, pagesToDelete: number[]): Promise<Blob> => {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await PDFDocument.load(arrayBuffer);
  
  // Sort in descending order to delete from end to start
  const sortedPages = [...pagesToDelete].sort((a, b) => b - a);
  
  for (const pageNum of sortedPages) {
    pdf.removePage(pageNum - 1);
  }
  
  const pdfBytes = await pdf.save();
  return new Blob([pdfBytes], { type: 'application/pdf' });
};

export const extractPDFPages = async (file: File, pagesToExtract: number[]): Promise<Blob> => {
  const arrayBuffer = await file.arrayBuffer();
  const sourcePdf = await PDFDocument.load(arrayBuffer);
  const newPdf = await PDFDocument.create();
  
  const pages = await newPdf.copyPages(sourcePdf, pagesToExtract.map(p => p - 1));
  pages.forEach(page => newPdf.addPage(page));
  
  const pdfBytes = await newPdf.save();
  return new Blob([pdfBytes], { type: 'application/pdf' });
};

export const rearrangePDFPages = async (file: File, newOrder: number[]): Promise<Blob> => {
  const arrayBuffer = await file.arrayBuffer();
  const sourcePdf = await PDFDocument.load(arrayBuffer);
  const newPdf = await PDFDocument.create();
  
  const pages = await newPdf.copyPages(sourcePdf, newOrder.map(p => p - 1));
  pages.forEach(page => newPdf.addPage(page));
  
  const pdfBytes = await newPdf.save();
  return new Blob([pdfBytes], { type: 'application/pdf' });
};

export const addSignatureToPDF = async (
  file: File,
  signatureDataUrl: string,
  x: number,
  y: number,
  pageIndex: number = 0
): Promise<Blob> => {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await PDFDocument.load(arrayBuffer);
  const pages = pdf.getPages();
  
  if (pageIndex >= pages.length) {
    throw new Error('Page index out of range');
  }
  
  const page = pages[pageIndex];
  const signatureImage = await pdf.embedPng(signatureDataUrl);
  const signatureDims = signatureImage.scale(0.5);
  
  page.drawImage(signatureImage, {
    x: x,
    y: y,
    width: signatureDims.width,
    height: signatureDims.height,
  });
  
  const pdfBytes = await pdf.save();
  return new Blob([pdfBytes], { type: 'application/pdf' });
};

export const annotatePDF = async (
  file: File,
  annotations: Array<{
    type: 'highlight' | 'underline' | 'note';
    text?: string;
    x: number;
    y: number;
    width: number;
    height: number;
    pageIndex: number;
  }>
): Promise<Blob> => {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await PDFDocument.load(arrayBuffer);
  const pages = pdf.getPages();
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  
  for (const annotation of annotations) {
    const page = pages[annotation.pageIndex];
    
    if (annotation.type === 'highlight') {
      page.drawRectangle({
        x: annotation.x,
        y: annotation.y,
        width: annotation.width,
        height: annotation.height,
        color: rgb(1, 1, 0),
        opacity: 0.3,
      });
    } else if (annotation.type === 'underline') {
      page.drawLine({
        start: { x: annotation.x, y: annotation.y },
        end: { x: annotation.x + annotation.width, y: annotation.y },
        thickness: 2,
        color: rgb(1, 0, 0),
      });
    } else if (annotation.type === 'note' && annotation.text) {
      page.drawText(annotation.text, {
        x: annotation.x,
        y: annotation.y,
        size: 12,
        font: font,
        color: rgb(1, 0, 0),
      });
    }
  }
  
  const pdfBytes = await pdf.save();
  return new Blob([pdfBytes], { type: 'application/pdf' });
};

export const downloadBlob = (blob: Blob, filename: string) => {
  saveAs(blob, filename);
};
