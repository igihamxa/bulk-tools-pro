import { Link } from 'react-router-dom';
import { Heart, Mail, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Tools: [
      { name: 'PDF Tools', path: '/pdf-tools' },
      { name: 'Image Tools', path: '/image-tools' },
      { name: 'Video Tools', path: '/video-tools' },
      { name: 'Audio Tools', path: '/audio-tools' },
      { name: 'Converters', path: '/converters' },
    ],
    Company: [
      { name: 'About Us', path: '/about' },
      { name: 'Contact', path: '/contact' },
      { name: 'Blog', path: '/blog' },
    ],
    Legal: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms & Conditions', path: '/terms' },
      { name: 'Disclaimer', path: '/disclaimer' },
    ],
    Resources: [
      { name: 'API Documentation', path: '/api' },
      { name: 'Tutorials', path: '/tutorials' },
      { name: 'System Status', path: '/status' },
      { name: 'Changelog', path: '/changelog' },
    ],
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Bulks Tool Pro</h3>
                <p className="text-xs text-muted-foreground">by Hamxa Tech</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Professional web tools for everyone. Fast, secure, and completely free. 
              Process your files with confidence.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="mailto:contact@hamxatech.com"
                className="p-2 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-secondary/50 rounded-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Stay Updated</h4>
              <p className="text-sm text-muted-foreground">
                Get notified about new tools and features
              </p>
            </div>
            <div className="flex space-x-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border space-y-4 md:space-y-0">
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <span>© {currentYear} Hamxa Tech. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>for creators everywhere.</span>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <span>🔒 SSL Secured</span>
            <span>⚡ 99.9% Uptime</span>
            <span>🌍 Global CDN</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;