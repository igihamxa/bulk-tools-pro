import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Ultimate Guide to PDF Compression: Reduce File Size Without Losing Quality",
      excerpt: "Learn professional techniques to compress PDF files while maintaining document quality. Perfect for sharing, storage, and web optimization.",
      date: "2024-01-15",
      readTime: "5 min read",
      author: "Ameer Hamza",
      category: "PDF Tools",
      slug: "pdf-compression-guide"
    },
    {
      id: 2,
      title: "Image Optimization for Web: Best Formats and Compression Techniques",
      excerpt: "Discover the best image formats for web use and learn how to optimize images for faster loading times without sacrificing visual quality.",
      date: "2024-01-12",
      readTime: "7 min read",
      author: "Ameer Hamza",
      category: "Image Tools",
      slug: "image-optimization-web"
    },
    {
      id: 3,
      title: "Video Compression Explained: Balancing Quality and File Size",
      excerpt: "Understanding video codecs, bitrates, and compression settings to achieve the perfect balance between quality and file size for your needs.",
      date: "2024-01-10",
      readTime: "6 min read",
      author: "Ameer Hamza",
      category: "Video Tools",
      slug: "video-compression-guide"
    },
    {
      id: 4,
      title: "Audio File Formats: When to Use MP3, WAV, FLAC, and More",
      excerpt: "A comprehensive guide to choosing the right audio format for different use cases, from music production to web streaming.",
      date: "2024-01-08",
      readTime: "4 min read",
      author: "Ameer Hamza",
      category: "Audio Tools",
      slug: "audio-formats-guide"
    },
    {
      id: 5,
      title: "File Conversion Best Practices: Maintaining Quality Across Formats",
      excerpt: "Essential tips and techniques for converting files between different formats while preserving quality and avoiding common pitfalls.",
      date: "2024-01-05",
      readTime: "8 min read",
      author: "Ameer Hamza",
      category: "Converters",
      slug: "file-conversion-best-practices"
    },
    {
      id: 6,
      title: "Protecting Your Privacy: How Our Tools Keep Your Files Secure",
      excerpt: "Learn about the security measures we implement to protect your files during processing and why client-side processing matters.",
      date: "2024-01-03",
      readTime: "3 min read",
      author: "Ameer Hamza",
      category: "Security",
      slug: "file-security-privacy"
    }
  ];

  const categories = ["All", "PDF Tools", "Image Tools", "Video Tools", "Audio Tools", "Converters", "Security"];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* SEO Optimized Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            File Processing Blog & Tutorials
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Expert guides, tips, and tutorials on file compression, conversion, and optimization. 
            Learn how to get the most out of your digital files with our professional tools.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full border border-border hover:bg-secondary transition-colors text-sm font-medium"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-center mb-8">
            <span className="inline-block px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium mb-4">
              Featured Article
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {blogPosts[0].title}
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              {blogPosts[0].excerpt}
            </p>
            <Link
              to={`/blog/${blogPosts[0].slug}`}
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Read Full Article
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <article key={post.id} className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                  <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-secondary/50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Stay Updated</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest tutorials, tool updates, and file processing tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;