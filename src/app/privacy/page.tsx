import { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy Policy for ${SITE_CONFIG.name}`,
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

      <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
        <p className="text-muted-foreground">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <section>
          <h2 className="text-xl font-semibold mt-8 mb-4">Overview</h2>
          <p>
            {SITE_CONFIG.name} is committed to protecting your privacy. This Privacy Policy explains
            how we handle information when you use our website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-8 mb-4">Data Collection</h2>
          <p>
            <strong>We do not collect any personal data.</strong> All encoding and decoding
            operations are performed entirely in your browser. No data you enter is ever
            sent to our servers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-8 mb-4">Local Processing</h2>
          <p>
            All conversions happen locally on your device using JavaScript. This means:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Your data never leaves your browser</li>
            <li>We have no access to your input or output</li>
            <li>No data is stored on our servers</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-8 mb-4">Cookies</h2>
          <p>
            We may use essential cookies to improve your experience. These cookies do not
            track you or collect personal information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-8 mb-4">Analytics</h2>
          <p>
            We may use privacy-friendly analytics tools to understand how our website is
            used. These tools do not collect personally identifiable information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-8 mb-4">Third-Party Services</h2>
          <p>
            Our website is hosted on Vercel. Please refer to Vercel&apos;s privacy policy for
            information about how they handle data.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-8 mb-4">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be
            reflected on this page.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-8 mb-4">Contact</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us.
          </p>
        </section>
      </div>
    </div>
  );
}
