import { useParams, Navigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolCard from '@/components/ToolCard';
import { pdfTools, imageTools, videoTools, audioTools, allTools } from '@/data/tools';

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const location = useLocation();
  const routeCategory = (category as string | undefined) ?? location.pathname.slice(1);

  const categoryData = {
    'pdf-tools': {
      title: 'PDF Tools',
      description: 'Professional PDF tools for all your document needs',
      icon: '📄',
      tools: pdfTools,
    },
    'image-tools': {
      title: 'Image Tools', 
      description: 'Powerful image editing and conversion tools',
      icon: '🖼️',
      tools: imageTools,
    },
    'video-tools': {
      title: 'Video Tools',
      description: 'Video processing and conversion tools',
      icon: '🎥',
      tools: videoTools,
    },
    'audio-tools': {
      title: 'Audio Tools',
      description: 'Audio editing and conversion tools', 
      icon: '🎵',
      tools: audioTools,
    },
    'converters': {
      title: 'File Converters',
      description: 'Convert between different file formats',
      icon: '🔄',
      tools: allTools.filter(tool => tool.category === 'converter'),
    },
  };

  const currentCategory = routeCategory ? categoryData[routeCategory as keyof typeof categoryData] : null;
  
  if (!currentCategory) {
    return <Navigate to="/404" replace />;
  }

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
          Back to All Tools
        </Link>

        {/* Category Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-6">{currentCategory.icon}</div>
          <h1 className="text-4xl font-bold text-foreground mb-4">{currentCategory.title}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {currentCategory.description}
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {currentCategory.tools.map((tool) => (
            <ToolCard
              key={tool.id}
              title={tool.title}
              description={tool.description}
              icon={tool.icon}
              category={tool.category}
              path={tool.path}
              comingSoon={tool.comingSoon}
            />
          ))}
        </div>

        {/* Coming Soon Tools Notice */}
        {currentCategory.tools.some(tool => tool.comingSoon) && (
          <div className="mt-12 text-center">
            <div className="inline-block bg-warning/10 border border-warning/20 rounded-lg px-6 py-4">
              <p className="text-warning font-medium">
                🚧 Some tools are coming soon! We're working hard to bring you more features.
              </p>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;