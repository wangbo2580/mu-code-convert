import { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy Policy for ${SITE_CONFIG.name}`,
};

export default function PrivacyPage() {
  return (
    <div className="relative min-h-[calc(100vh-8rem)]">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="gradient-blob gradient-blob-1 w-[300px] h-[300px] -top-24 -right-24 opacity-15" />
        <div className="gradient-blob gradient-blob-2 w-[200px] h-[200px] bottom-32 -left-16 opacity-10" />
      </div>
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

      <div className="relative container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-3xl font-bold mb-2 gradient-text">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 bg-card/80 backdrop-blur-sm rounded-xl p-8 border border-border/50 shadow-lg">
          <section>
            <h2 className="text-xl font-semibold mt-0 mb-4">Overview</h2>
            <p className="text-muted-foreground">
              {SITE_CONFIG.name} is committed to protecting your privacy. This Privacy Policy explains
              how we handle information when you use our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-4">Data Collection</h2>
            <p className="text-muted-foreground">
              <strong className="text-foreground">We do not collect any personal data.</strong> All encoding and decoding
              operations are performed entirely in your browser. No data you enter is ever
              sent to our servers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-4">Local Processing</h2>
            <p className="text-muted-foreground mb-3">
              All conversions happen locally on your device using JavaScript. This means:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Your data never leaves your browser</li>
              <li>We have no access to your input or output</li>
              <li>No data is stored on our servers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-4">Cookies</h2>
            <p className="text-muted-foreground">
              We may use essential cookies to improve your experience. These cookies do not
              track you or collect personal information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-4">Analytics</h2>
            <p className="text-muted-foreground">
              We may use privacy-friendly analytics tools to understand how our website is
              used. These tools do not collect personally identifiable information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-4">Third-Party Services</h2>
            <p className="text-muted-foreground">
              Our website is hosted on Vercel. Please refer to Vercel&apos;s privacy policy for
              information about how they handle data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-4">Changes to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. Any changes will be
              reflected on this page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-4">Contact</h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
