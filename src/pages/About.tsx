import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Target, Award, Heart, Wrench, Shield, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Bulks Tool Pro
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Professional web tools designed to simplify your digital workflow. Fast, secure, and completely free file processing for everyone.
          </p>
        </div>

        {/* Owner Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Meet the Founder</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Ameer Hamza</strong>, the visionary behind Bulks Tool Pro, brings years of experience in web development and digital innovation. 
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Passionate about creating tools that solve real-world problems, Ameer founded Hamxa Tech with a mission to democratize access to professional-grade file processing tools.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              "I believe everyone deserves access to powerful, easy-to-use tools without the complexity or cost barriers." - Ameer Hamza
            </p>
          </div>
          <div className="bg-gradient-hero rounded-2xl p-8 text-center">
            <img 
              src="/lovable-uploads/112d482c-5da9-4306-808f-b21716c85435.png" 
              alt="Ameer Hamza - Founder & CEO of Hamxa Tech"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-white/20"
            />
            <h3 className="text-xl font-semibold text-foreground mb-2">Ameer Hamza</h3>
            <p className="text-muted-foreground mb-2">Founder & CEO</p>
            <p className="text-sm text-muted-foreground">
              Web Developer | Tech Innovator | Problem Solver
            </p>
            <div className="mt-4 space-y-2">
              <p className="text-sm text-muted-foreground">
                📧 <a href="mailto:hamxatechofficial@gmail.com" className="text-primary hover:underline">hamxatechofficial@gmail.com</a>
              </p>
              <p className="text-sm text-muted-foreground">
                📱 <a href="https://t.me/hamxatech" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">t.me/hamxatech</a>
              </p>
            </div>
          </div>
        </div>

        {/* Our Tools Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Tool Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-card rounded-xl border border-border">
              <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📄</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">PDF Tools</h3>
              <p className="text-sm text-muted-foreground">
                Merge, split, compress, and convert PDF files with ease
              </p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-xl border border-border">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🖼️</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Image Tools</h3>
              <p className="text-sm text-muted-foreground">
                Resize, compress, convert, and edit images in multiple formats
              </p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-xl border border-border">
              <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎥</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Video Tools</h3>
              <p className="text-sm text-muted-foreground">
                Convert, compress, and edit video files for any platform
              </p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-xl border border-border">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎵</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Audio Tools</h3>
              <p className="text-sm text-muted-foreground">
                Convert, compress, and enhance audio files effortlessly
              </p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-xl border border-border">
              <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">File Converters</h3>
              <p className="text-sm text-muted-foreground">
                Universal file conversion between hundreds of formats
              </p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-xl border border-border">
              <div className="w-16 h-16 bg-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-teal-500" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Utility Tools</h3>
              <p className="text-sm text-muted-foreground">
                Additional productivity tools for various file operations
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Why Choose Bulks Tool Pro</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">User-Friendly</h3>
              <p className="text-sm text-muted-foreground">
                Intuitive interface designed for users of all skill levels
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Secure & Private</h3>
              <p className="text-sm text-muted-foreground">
                Your files are processed securely and never stored on our servers
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">High Quality</h3>
              <p className="text-sm text-muted-foreground">
                Professional-grade results with advanced processing algorithms
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Free & Accessible</h3>
              <p className="text-sm text-muted-foreground">
                Completely free tools accessible from anywhere, anytime
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="text-center bg-secondary/50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed mb-6">
            To provide everyone with access to professional-grade file processing tools that are fast, secure, and completely free. 
            We believe that powerful tools shouldn't be locked behind paywalls or complex software installations.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full">🚀 Innovation</span>
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full">🔒 Security</span>
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full">⚡ Speed</span>
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full">🌍 Accessibility</span>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;