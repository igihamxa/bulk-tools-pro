import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Home, Search, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        {/* 404 Icon */}
        <div className="mb-8">
          <div className="text-8xl mb-4">🔍</div>
          <h1 className="text-6xl font-bold text-foreground mb-2">404</h1>
          <h2 className="text-2xl font-semibold text-muted-foreground mb-4">Page Not Found</h2>
        </div>
        
        {/* Description */}
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="bg-gradient-primary hover:shadow-lg hover:scale-105 transition-all duration-300">
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Button>
          </Link>
          <Button 
            variant="outline"
            onClick={() => window.history.back()}
            className="hover:bg-secondary"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>
        
        {/* Suggestions */}
        <div className="mt-12 p-6 bg-secondary/50 rounded-lg">
          <h3 className="font-semibold text-foreground mb-4">Popular Tools:</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <Link to="/tools/split-pdf" className="text-primary hover:underline">
              Split PDF
            </Link>
            <Link to="/tools/merge-pdf" className="text-primary hover:underline">
              Merge PDF
            </Link>
            <Link to="/tools/compress-pdf" className="text-primary hover:underline">
              Compress PDF
            </Link>
            <Link to="/tools/pdf-to-word" className="text-primary hover:underline">
              PDF to Word
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
