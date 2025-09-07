import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Target, Award, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Hamxa Tech Tools
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're passionate about creating powerful, user-friendly tools that help people work more efficiently with their digital files.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At Hamxa Tech, we believe that everyone should have access to professional-grade file processing tools without the complexity or cost barriers.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is to democratize access to powerful file conversion, compression, and editing tools through intuitive web-based applications that work seamlessly across all devices.
            </p>
          </div>
          <div className="bg-gradient-hero rounded-2xl p-8 text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Innovation First</h3>
            <p className="text-muted-foreground">
              Constantly pushing the boundaries of what's possible with web-based file processing
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">User-Centric</h3>
              <p className="text-sm text-muted-foreground">
                Every decision we make is guided by what's best for our users
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Precision</h3>
              <p className="text-sm text-muted-foreground">
                Accurate, reliable results with every file you process
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Excellence</h3>
              <p className="text-sm text-muted-foreground">
                Committed to delivering the highest quality tools and experience
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Accessibility</h3>
              <p className="text-sm text-muted-foreground">
                Free, fast, and accessible tools for everyone, everywhere
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            A diverse group of engineers, designers, and product experts working together to build the future of file processing.
          </p>
          
          <div className="bg-secondary/50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Join Our Mission</h3>
            <p className="text-muted-foreground mb-6">
              Interested in working with us? We're always looking for talented individuals who share our passion for creating exceptional user experiences.
            </p>
            <a 
              href="mailto:careers@hamxatech.com"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-hover transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;