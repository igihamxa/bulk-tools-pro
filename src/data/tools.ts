export interface Tool {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'pdf' | 'image' | 'video' | 'audio' | 'text' | 'converter';
  path: string;
  comingSoon?: boolean;
}

export const pdfTools: Tool[] = [
  {
    id: 'split-pdf',
    title: 'Split PDF',
    description: 'Split PDF file into pieces or pick just a few pages',
    icon: 'AB',
    category: 'pdf',
    path: '/tools/split-pdf',
  },
  {
    id: 'merge-pdf', 
    title: 'Merge PDF',
    description: 'Merge multiple PDF files into one quickly and easily',
    icon: 'AB',
    category: 'pdf',
    path: '/tools/merge-pdf',
  },
  {
    id: 'compress-pdf',
    title: 'Compress PDF',
    description: 'Reduce the size of your PDF file',
    icon: '📄',
    category: 'pdf',
    path: '/tools/compress-pdf',
  },
  {
    id: 'pdf-to-word',
    title: 'PDF to Word',
    description: 'Convert PDF files to Word (doc, docx) and make them available for editing',
    icon: '📄',
    category: 'converter',
    path: '/tools/pdf-to-word',
  },
  {
    id: 'word-to-pdf',
    title: 'Word to PDF',
    description: 'Convert Word files (doc, docx) to PDF',
    icon: '📝',
    category: 'converter',
    path: '/tools/word-to-pdf',
  },
  {
    id: 'pdf-to-excel',
    title: 'PDF to Excel', 
    description: 'Convert PDF tables to Excel (xls, xlsx), making them available for editing',
    icon: '📊',
    category: 'converter',
    path: '/tools/pdf-to-excel',
  },
  {
    id: 'excel-to-pdf',
    title: 'Excel to PDF',
    description: 'Convert an Excel table (xls, xlsx) to PDF',
    icon: '📊',
    category: 'converter',
    path: '/tools/excel-to-pdf',
  },
  {
    id: 'pdf-to-jpg',
    title: 'PDF to JPG',
    description: 'Save each PDF page as a separate JPG image or extract embedded images',
    icon: '🖼️',
    category: 'converter',
    path: '/tools/pdf-to-jpg',
  },
  {
    id: 'jpg-to-pdf',
    title: 'JPG to PDF',
    description: 'Merge multiple JPG images into a single PDF file',
    icon: '🖼️',
    category: 'converter',
    path: '/tools/jpg-to-pdf',
  },
  {
    id: 'unlock-pdf',
    title: 'Unlock PDF',
    description: 'Remove password from PDF, remove encryption, and unlock a protected document',
    icon: '🔓',
    category: 'pdf',
    path: '/tools/unlock-pdf',
  },
  {
    id: 'protect-pdf',
    title: 'Protect PDF',
    description: 'Protect your PDF files: encrypt them with a password',
    icon: '🔒',
    category: 'pdf',
    path: '/tools/protect-pdf',
  },
  {
    id: 'rotate-pdf',
    title: 'Rotate PDF',
    description: 'Rotate a few PDF pages or change orientation of all pages',
    icon: '🔄',
    category: 'pdf',
    path: '/tools/rotate-pdf',
  },
  {
    id: 'ppt-to-pdf',
    title: 'PPT to PDF',
    description: 'Convert PowerPoint presentations (ppt, pptx) to PDF and make them easily readable on any device',
    icon: '📽️',
    category: 'converter',
    path: '/tools/ppt-to-pdf',
  },
  {
    id: 'png-to-pdf',
    title: 'PNG to PDF',
    description: 'Merge multiple PNG images into a single PDF file',
    icon: '🖼️',
    category: 'converter',
    path: '/tools/png-to-pdf',
  },
  {
    id: 'pdf-to-png',
    title: 'PDF to PNG',
    description: 'Save each PDF page as a separate PNG image or extract embedded images',
    icon: '🖼️',
    category: 'converter',
    path: '/tools/pdf-to-png',
  },
  {
    id: 'pdf-to-html',
    title: 'PDF to HTML',
    description: 'Convert PDF to HTML without losing text or format',
    icon: '🌐',
    category: 'converter',
    path: '/tools/pdf-to-html',
  },
  {
    id: 'add-page-numbers',
    title: 'Add Page Numbers',
    description: 'Add page numbering to PDF document, number the pages quickly and easily',
    icon: '🔢',
    category: 'pdf',
    path: '/tools/add-page-numbers',
  },
];

export const imageTools: Tool[] = [
  {
    id: 'compress-image',
    title: 'Compress Image',
    description: 'Reduce image file size while maintaining quality',
    icon: '🗜️',
    category: 'image',
    path: '/tools/compress-image',
  },
  {
    id: 'resize-image',
    title: 'Resize Image',
    description: 'Change image dimensions and resolution',
    icon: '📏',
    category: 'image',
    path: '/tools/resize-image',
  },
  {
    id: 'crop-image',
    title: 'Crop Image',
    description: 'Cut and trim images to focus on what matters',
    icon: '✂️',
    category: 'image',
    path: '/tools/crop-image',
  },
  {
    id: 'convert-image',
    title: 'Convert Image',
    description: 'Convert between different image formats (JPG, PNG, WEBP, etc.)',
    icon: '🔄',
    category: 'converter',
    path: '/tools/convert-image',
  },
];

export const videoTools: Tool[] = [
  {
    id: 'compress-video',
    title: 'Compress Video',
    description: 'Reduce video file size while maintaining quality',
    icon: '🎬',
    category: 'video',
    path: '/tools/compress-video',
    comingSoon: true,
  },
  {
    id: 'convert-video',
    title: 'Convert Video',
    description: 'Convert between different video formats (MP4, AVI, MOV, etc.)',
    icon: '🎥',
    category: 'converter',
    path: '/tools/convert-video',
    comingSoon: true,
  },
];

export const audioTools: Tool[] = [
  {
    id: 'compress-audio',
    title: 'Compress Audio',
    description: 'Reduce audio file size while maintaining quality',
    icon: '🎵',
    category: 'audio',
    path: '/tools/compress-audio',
    comingSoon: true,
  },
  {
    id: 'convert-audio',
    title: 'Convert Audio',
    description: 'Convert between different audio formats (MP3, WAV, FLAC, etc.)',
    icon: '🎶',
    category: 'converter',
    path: '/tools/convert-audio',
    comingSoon: true,
  },
];

export const allTools = [...pdfTools, ...imageTools, ...videoTools, ...audioTools];