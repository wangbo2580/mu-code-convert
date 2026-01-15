import { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `Terms of Service for ${SITE_CONFIG.name}`,
};

export default function TermsPage() {
  return (
    <div className="relative min-h-[calc(100vh-8rem)]">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="gradient-blob gradient-blob-1 w-[300px] h-[300px] -top-24 -right-24 opacity-15" />
        <div className="gradient-blob gradient-blob-2 w-[200px] h-[200px] bottom-32 -left-16 opacity-10" />
      </div>
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

      <div className="relative container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-3xl font-bold mb-2 gradient-text">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 bg-card/80 backdrop-blur-sm rounded-xl p-8 border border-border/50 shadow-lg">
          <section>
            <h2 className="text-xl font-semibold mt-0 mb-4">Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing and using {SITE_CONFIG.name}, you accept and agree to be bound by these
              Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-4">Description of Service</h2>
            <p className="text-muted-foreground">
              {SITE_CONFIG.name} provides free online encoding and decoding tools including but not
              limited to Base64, URL encoding, Morse code, binary conversion, and other text
              transformation utilities. All processing is performed locally in your browser.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-4">Use of Service</h2>
            <p className="text-muted-foreground mb-3">You agree to use our services only for lawful purposes. You must not:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Use the service for any illegal or unauthorized purpose</li>
              <li>Attempt to interfere with or disrupt the service</li>
              <li>Use automated systems to access the service in a manner that sends more requests than a human can reasonably produce</li>
              <li>Attempt to probe, scan, or test the vulnerability of the system</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-4">Intellectual Property</h2>
            <p className="text-muted-foreground">
              The content, features, and functionality of {SITE_CONFIG.name} are owned by us and are
              protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-4">Disclaimer of Warranties</h2>
            <p className="text-muted-foreground">
              Our services are provided &quot;as is&quot; and &quot;as available&quot; without any warranties of any
              kind, either express or implied. We do not guarantee that the service will be
              uninterrupted, secure, or error-free.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground">
              In no event shall {SITE_CONFIG.name} be liable for any indirect, incidental, special,
              consequential, or punitive damages arising out of or relating to your use of the
              service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-4">Accuracy of Results</h2>
            <p className="text-muted-foreground">
              While we strive to provide accurate encoding and decoding results, we make no
              guarantees about the accuracy or completeness of the output. Users should verify
              critical results independently.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-4">Changes to Terms</h2>
            <p className="text-muted-foreground">
              We reserve the right to modify these Terms of Service at any time. Changes will be
              effective immediately upon posting on this page. Your continued use of the service
              after any changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-4">Contact</h2>
            <p className="text-muted-foreground">
              If you have any questions about these Terms of Service, please contact us.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
