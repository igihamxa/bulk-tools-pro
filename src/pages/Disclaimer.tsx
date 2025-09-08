import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AlertTriangle, Info, Shield, FileX, Zap, HelpCircle } from 'lucide-react';

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-amber-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Disclaimer
            </h1>
            <p className="text-xl text-muted-foreground">
              Important information about tool limitations and usage
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Last updated: January 15, 2024
            </p>
          </div>

          {/* Important Notice */}
          <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-6 mb-12">
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center">
              <Info className="w-5 h-5 mr-2 text-amber-500" />
              Important Notice
            </h2>
            <p className="text-muted-foreground">
              Please read this disclaimer carefully before using Bulks Tool Pro services. 
              By using our tools, you acknowledge and accept the limitations and conditions outlined below.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            
            {/* General Disclaimer */}
            <section>
              <div className="flex items-center mb-6">
                <Shield className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">General Disclaimer</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  The information and tools provided by Bulks Tool Pro ("the Service") are offered for general 
                  informational and utility purposes only. While we strive to provide accurate and reliable 
                  file processing services, we make no representations or warranties of any kind, express or implied, 
                  about the completeness, accuracy, reliability, or suitability of our tools.
                </p>
                <p>
                  Any reliance you place on our tools and their output is strictly at your own risk. 
                  We disclaim any liability for errors, omissions, or results obtained from the use of our services.
                </p>
              </div>
            </section>

            {/* Tool Limitations */}
            <section>
              <div className="flex items-center mb-6">
                <FileX className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">Tool Limitations</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">File Size and Format Limits</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Maximum file size limits may apply to different tools</li>
                    <li>Some file formats may not be supported or may have limited functionality</li>
                    <li>Complex files may not process correctly or may lose formatting</li>
                    <li>Processing time may vary based on file size and complexity</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Quality and Accuracy</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>File compression may result in quality loss</li>
                    <li>Format conversion may not preserve all original elements</li>
                    <li>OCR and text extraction may contain errors</li>
                    <li>Color accuracy may vary between different file formats</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Browser and Device Compatibility</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Some tools may not work on older browsers</li>
                    <li>Mobile devices may have limited functionality</li>
                    <li>Internet connection speed may affect performance</li>
                    <li>Browser settings may impact tool functionality</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Service Availability */}
            <section>
              <div className="flex items-center mb-6">
                <Zap className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">Service Availability</h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong>No Guarantee of Availability:</strong> We do not guarantee that our services will be 
                  available at all times. The service may be temporarily unavailable due to maintenance, 
                  updates, server issues, or other technical problems.
                </p>
                <p>
                  <strong>Service Modifications:</strong> We reserve the right to modify, suspend, or discontinue 
                  any part of our service at any time without prior notice. Tools and features may be added, 
                  changed, or removed based on technical requirements or business decisions.
                </p>
                <p>
                  <strong>Third-Party Dependencies:</strong> Some of our tools may rely on third-party services 
                  or libraries. Issues with these dependencies may affect tool functionality.
                </p>
              </div>
            </section>

            {/* Data and Security */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Data and Security Limitations</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong>File Processing:</strong> While we implement security measures to protect your files 
                  during processing, we cannot guarantee absolute security. Files are processed on our servers 
                  or in your browser, and technical issues may occur.
                </p>
                <p>
                  <strong>Data Loss:</strong> We are not responsible for any loss of data or files that may occur 
                  during processing. We strongly recommend keeping backup copies of important files before processing.
                </p>
                <p>
                  <strong>Privacy:</strong> While we follow privacy best practices, you should not upload highly 
                  sensitive or confidential information unless you understand and accept the risks.
                </p>
              </div>
            </section>

            {/* User Responsibility */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">User Responsibility</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong>Appropriate Use:</strong> You are responsible for ensuring that your use of our tools 
                  is appropriate for your specific needs and complies with applicable laws and regulations.
                </p>
                <p>
                  <strong>File Verification:</strong> You should always verify the output of our tools before 
                  using processed files for important purposes. We recommend testing with sample files first.
                </p>
                <p>
                  <strong>Legal Compliance:</strong> You are responsible for ensuring that files you upload 
                  and process comply with copyright laws and other legal requirements.
                </p>
              </div>
            </section>

            {/* Professional Use */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Professional and Commercial Use</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong>Not Professional Advice:</strong> Our tools are not intended to replace professional 
                  software or services. For critical business or professional applications, consider using 
                  dedicated professional tools.
                </p>
                <p>
                  <strong>Verification Required:</strong> For commercial or professional use, always verify 
                  the quality and accuracy of processed files before final use or distribution.
                </p>
                <p>
                  <strong>No SLA:</strong> We do not provide service level agreements (SLA) or guarantees 
                  for availability, performance, or results.
                </p>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Limitation of Liability</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  To the fullest extent permitted by applicable law, Hamxa Tech and its affiliates, officers, 
                  directors, employees, and agents shall not be liable for any direct, indirect, incidental, 
                  special, consequential, or punitive damages arising from:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Use or inability to use our tools</li>
                  <li>Loss or corruption of files or data</li>
                  <li>Errors or omissions in processed files</li>
                  <li>Service interruptions or unavailability</li>
                  <li>Any other matter related to our service</li>
                </ul>
              </div>
            </section>

            {/* Updates to Disclaimer */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Updates to This Disclaimer</h2>
              <p className="text-muted-foreground">
                We may update this disclaimer from time to time to reflect changes in our services, 
                legal requirements, or other factors. We will post any updates on this page and update 
                the "Last updated" date. Your continued use of our services after any changes constitutes 
                acceptance of the updated disclaimer.
              </p>
            </section>

            {/* Contact and Support */}
            <section className="bg-secondary/50 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <HelpCircle className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">Questions or Concerns?</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                If you have questions about this disclaimer or need clarification about our tool limitations, 
                please contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Email:</strong> support@bulkstoolpro.com</p>
                <p><strong>Company:</strong> Hamxa Tech</p>
                <p><strong>Website:</strong> bulkstoolpro.com</p>
              </div>
              <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-sm text-muted-foreground">
                  <strong>Tip:</strong> For the best experience, always keep backup copies of your original files 
                  and test our tools with sample files before processing important documents.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Disclaimer;