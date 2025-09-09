import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { pdfTools, converterTools, imageTools, videoTools, audioTools } from '@/data/tools';

const ToolCategories = () => {
  const categories = [
    {
      id: 'pdf',
      title: 'PDF Tools',
      description: 'Split, merge, compress, convert, and edit PDF documents',
      icon: '📄',
      count: pdfTools.length,
      tools: pdfTools.slice(0, 3),
      path: '/pdf-tools'
    },
    {
      id: 'converters',
      title: 'File Converters',
      description: 'Convert between different file formats seamlessly',
      icon: '🔄',
      count: converterTools.length,
      tools: converterTools.slice(0, 3),
      path: '/converters'
    },
    {
      id: 'video',
      title: 'Video Tools',
      description: 'Edit, merge, crop, record, and enhance videos',
      icon: '🎬',
      count: videoTools.length,
      tools: videoTools.slice(0, 3),
      path: '/video-tools'
    },
    {
      id: 'audio',
      title: 'Audio Tools',
      description: 'Process, edit, convert, and enhance audio files',
      icon: '🎵',
      count: audioTools.length,
      tools: audioTools.slice(0, 3),
      path: '/audio-tools'
    },
    {
      id: 'image',
      title: 'Image Tools',
      description: 'Resize, compress, enhance, and edit images',
      icon: '🖼️',
      count: imageTools.length,
      tools: imageTools.slice(0, 3),
      path: '/image-tools'
    },
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Comprehensive Tool Categories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional-grade tools for all your file processing needs. Fast, secure, and easy to use.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.path}
              className="group block p-8 bg-card border border-border rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">{category.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {category.title}
                  </h3>
                  <p className="text-sm text-primary font-medium">
                    {category.count} tools available
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {category.description}
              </p>

              <div className="space-y-2 mb-6">
                {category.tools.map((tool) => (
                  <div key={tool.id} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary/60 rounded-full mr-3 flex-shrink-0" />
                    <span>{tool.title}</span>
                  </div>
                ))}
                {category.count > 3 && (
                  <div className="flex items-center text-sm text-primary font-medium">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                    <span>And {category.count - 3} more tools...</span>
                  </div>
                )}
              </div>

              <div className="flex items-center text-primary group-hover:text-primary-foreground">
                <span className="text-sm font-medium mr-2">Explore {category.title}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolCategories;