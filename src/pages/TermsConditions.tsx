import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FileText, AlertTriangle, Scale, Users, Shield, Gavel } from 'lucide-react';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Terms & Conditions
            </h1>
            <p className="text-xl text-muted-foreground">
              Rules and guidelines for using Bulks Tool Pro services
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Last updated: January 15, 2024
            </p>
          </div>

          {/* Quick Overview */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-12">
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2 text-primary" />
              Important Points
            </h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Our services are provided "as is" without warranties</li>
              <li>• You're responsible for the content of files you upload</li>
              <li>• Don't upload copyrighted or illegal content</li>
              <li>• We reserve the right to refuse service or terminate access</li>
              <li>• These terms may change, and continued use means acceptance</li>
            </ul>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            
            {/* Acceptance of Terms */}
            <section>
              <div className="flex items-center mb-6">
                <Scale className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">Acceptance of Terms</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  By accessing and using Bulks Tool Pro ("the Service"), you accept and agree to be bound by 
                  the terms and provision of this agreement. If you do not agree to abide by the above, 
                  please do not use this service.
                </p>
                <p>
                  These Terms & Conditions apply to all visitors, users, and others who access or use the Service.
                </p>
              </div>
            </section>

            {/* Use of Service */}
            <section>
              <div className="flex items-center mb-6">
                <Users className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">Use of Service</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Permitted Use</h3>
                  <p className="text-muted-foreground mb-3">
                    You may use our service for legitimate file processing needs, including:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Converting files between different formats</li>
                    <li>Compressing files to reduce size</li>
                    <li>Basic editing and manipulation of files</li>
                    <li>Personal, educational, or commercial use of processed files</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Prohibited Use</h3>
                  <p className="text-muted-foreground mb-3">
                    You agree not to use the service for:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Uploading copyrighted material without permission</li>
                    <li>Processing illegal, harmful, or malicious content</li>
                    <li>Attempting to overload or crash our systems</li>
                    <li>Reverse engineering or copying our service</li>
                    <li>Violating any applicable laws or regulations</li>
                    <li>Uploading viruses, malware, or other harmful code</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* User Responsibilities */}
            <section>
              <div className="flex items-center mb-6">
                <Shield className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">User Responsibilities</h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Content Responsibility</h3>
                  <p>
                    You are solely responsible for the content of files you upload and process. 
                    You warrant that you have the right to process all files you submit to our service.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Security</h3>
                  <p>
                    You are responsible for maintaining the security of any account credentials and 
                    for all activities that occur under your account.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Compliance</h3>
                  <p>
                    You agree to comply with all applicable laws and regulations when using our service, 
                    including data protection and privacy laws.
                  </p>
                </div>
              </div>
            </section>

            {/* Service Availability */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Service Availability</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We strive to maintain high service availability, but we do not guarantee uninterrupted access. 
                  The service may be temporarily unavailable due to maintenance, updates, or technical issues.
                </p>
                <p>
                  We reserve the right to modify, suspend, or discontinue any part of the service at any time 
                  without prior notice.
                </p>
              </div>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Intellectual Property</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  The service and its original content, features, and functionality are and will remain 
                  the exclusive property of Hamxa Tech and its licensors. The service is protected by 
                  copyright, trademark, and other laws.
                </p>
                <p>
                  You retain all rights to files you upload and process. We do not claim ownership 
                  of your content.
                </p>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section>
              <div className="flex items-center mb-6">
                <Gavel className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">Limitation of Liability</h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong>Service "As Is":</strong> The service is provided on an "as is" and "as available" basis. 
                  We make no warranties, expressed or implied, regarding the service's reliability, accuracy, or availability.
                </p>
                <p>
                  <strong>No Liability:</strong> In no event shall Hamxa Tech, its directors, employees, or agents 
                  be liable for any indirect, incidental, special, consequential, or punitive damages arising 
                  from your use of the service.
                </p>
                <p>
                  <strong>File Loss:</strong> While we take precautions to protect your files during processing, 
                  we are not responsible for any loss of data or files. We recommend keeping backups of important files.
                </p>
                <p>
                  <strong>Maximum Liability:</strong> Our total liability to you for all damages shall not exceed 
                  the amount you paid for the service (if any) in the 12 months preceding the claim.
                </p>
              </div>
            </section>

            {/* Privacy and Data */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Privacy and Data</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Your privacy is important to us. Our collection and use of personal information is governed 
                  by our Privacy Policy, which is incorporated into these terms by reference.
                </p>
                <p>
                  Files uploaded for processing are automatically deleted from our servers after completion 
                  or within 24 hours, whichever comes first.
                </p>
              </div>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Termination</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We may terminate or suspend your access to the service immediately, without prior notice, 
                  for any reason, including breach of these Terms & Conditions.
                </p>
                <p>
                  You may stop using the service at any time. Upon termination, your right to use 
                  the service will cease immediately.
                </p>
              </div>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Changes to Terms</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We reserve the right to modify or replace these Terms & Conditions at any time. 
                  If a revision is material, we will try to provide at least 30 days notice prior 
                  to any new terms taking effect.
                </p>
                <p>
                  Your continued use of the service after any changes constitutes acceptance of the new terms.
                </p>
              </div>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms & Conditions shall be governed by and construed in accordance with applicable laws, 
                without regard to conflict of law provisions. Any disputes shall be resolved through binding arbitration.
              </p>
            </section>

            {/* Contact */}
            <section className="bg-secondary/50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about these Terms & Conditions, please contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Email:</strong> legal@bulkstoolpro.com</p>
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

export default TermsConditions;