import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Eye, Cookie, Database, Lock, AlertCircle } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground">
              How we collect, use, and protect your personal information
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Last updated: January 15, 2024
            </p>
          </div>

          {/* Quick Summary */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-12">
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center">
              <Eye className="w-5 h-5 mr-2 text-primary" />
              Quick Summary
            </h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• We don't store your uploaded files on our servers</li>
              <li>• All file processing happens in your browser when possible</li>
              <li>• We use cookies only for essential functionality</li>
              <li>• We don't sell your personal information to third parties</li>
              <li>• You can use our tools without creating an account</li>
            </ul>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            
            {/* Information We Collect */}
            <section>
              <div className="flex items-center mb-6">
                <Database className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">Information We Collect</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Files You Upload</h3>
                  <p className="text-muted-foreground mb-3">
                    When you use our file processing tools, we temporarily process your files to provide the requested service. 
                    Your files are processed in your browser whenever possible and are automatically deleted from our servers 
                    within 24 hours if server processing is required.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Usage Information</h3>
                  <p className="text-muted-foreground">
                    We collect anonymous usage statistics to improve our services, including:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                    <li>Pages visited and tools used</li>
                    <li>Browser type and operating system</li>
                    <li>General location (country/region)</li>
                    <li>Referral source</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Newsletter Subscription</h3>
                  <p className="text-muted-foreground">
                    If you subscribe to our newsletter, we collect your email address to send you updates 
                    about new tools and features. You can unsubscribe at any time.
                  </p>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section>
              <div className="flex items-center mb-6">
                <Lock className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">How We Use Your Information</h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p><strong>File Processing:</strong> To provide the file conversion, compression, and editing services you request.</p>
                <p><strong>Service Improvement:</strong> To understand how our tools are used and improve their functionality.</p>
                <p><strong>Communication:</strong> To send newsletter updates if you've subscribed (you can opt-out anytime).</p>
                <p><strong>Legal Compliance:</strong> To comply with applicable laws and protect our rights.</p>
              </div>
            </section>

            {/* Cookies and Tracking */}
            <section>
              <div className="flex items-center mb-6">
                <Cookie className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">Cookies and Tracking</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Essential Cookies</h3>
                  <p className="text-muted-foreground">
                    We use essential cookies to remember your preferences and ensure our website functions properly. 
                    These cookies don't track you across other websites.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Analytics</h3>
                  <p className="text-muted-foreground">
                    We use privacy-friendly analytics to understand how our tools are used. This data is anonymized 
                    and helps us improve our services.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Advertising</h3>
                  <p className="text-muted-foreground">
                    We may display relevant ads to support our free services. These ads may use cookies to show 
                    you relevant content, but we don't share your personal information with advertisers.
                  </p>
                </div>
              </div>
            </section>

            {/* Data Security */}
            <section>
              <div className="flex items-center mb-6">
                <Shield className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">Data Security</h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We implement industry-standard security measures to protect your data:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>SSL encryption for all data transmission</li>
                  <li>Secure servers with regular security updates</li>
                  <li>Automatic file deletion after processing</li>
                  <li>No permanent storage of uploaded files</li>
                  <li>Regular security audits and monitoring</li>
                </ul>
              </div>
            </section>

            {/* Your Rights */}
            <section>
              <div className="flex items-center mb-6">
                <AlertCircle className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">Your Rights</h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Access the personal information we have about you</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Delete your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Data portability (receive your data in a structured format)</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us at{' '}
                  <a href="mailto:privacy@bulkstoolpro.com" className="text-primary hover:underline">
                    privacy@bulkstoolpro.com
                  </a>
                </p>
              </div>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Third-Party Services</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We may use third-party services to provide certain functionality:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Analytics:</strong> To understand website usage patterns</li>
                  <li><strong>CDN:</strong> To deliver content faster and more reliably</li>
                  <li><strong>Email Service:</strong> To send newsletters and updates</li>
                </ul>
                <p>
                  These services have their own privacy policies, and we encourage you to review them.
                </p>
              </div>
            </section>

            {/* Updates to Policy */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Updates to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this privacy policy from time to time. We'll notify you of any significant 
                changes by posting the new policy on this page and updating the "Last updated" date. 
                Your continued use of our services after any changes constitutes acceptance of the updated policy.
              </p>
            </section>

            {/* Contact */}
            <section className="bg-secondary/50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about this privacy policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Email:</strong> privacy@bulkstoolpro.com</p>
                <p><strong>Company:</strong> Hamxa Tech</p>
                <p><strong>Website:</strong> bulkstoolpro.com</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;