import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ToolCardProps {
  title: string;
  description: string;
  icon: string;
  category: 'pdf' | 'image' | 'video' | 'audio' | 'text' | 'converter';
  path: string;
  comingSoon?: boolean;
}

const ToolCard = ({ title, description, icon, category, path, comingSoon }: ToolCardProps) => {
  const categoryColors = {
    pdf: 'tool-pdf',
    image: 'tool-image', 
    video: 'tool-video',
    audio: 'tool-audio',
    text: 'tool-text',
    converter: 'tool-converter',
  };

  const Content = (
    <div className="tool-card h-full group">
      <div className="flex flex-col h-full">
        <div className={`tool-icon ${categoryColors[category]}`}>
          {icon}
        </div>
        
        <div className="flex-1">
          <h3 className="tool-title">{title}</h3>
          <p className="tool-description">{description}</p>
        </div>
        
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/50">
          {comingSoon ? (
            <span className="text-xs font-medium text-warning bg-warning/10 px-2 py-1 rounded-full">
              Coming Soon
            </span>
          ) : (
            <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
              Free Tool
            </span>
          )}
          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
        </div>
      </div>
    </div>
  );

  if (comingSoon) {
    return (
      <div className="opacity-60 cursor-not-allowed">
        {Content}
      </div>
    );
  }

  return (
    <Link to={path} className="block h-full">
      {Content}
    </Link>
  );
};

export default ToolCard;