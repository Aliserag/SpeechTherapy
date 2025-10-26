import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Anara's Speech Therapy",
  description: "Privacy policy for Anara's Speech Therapy services. Learn how we protect and handle your personal information.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-24">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-8">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-600 mb-12">
          Last Updated: October 26, 2025
        </p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-600 mb-4">
              Anara's Speech Therapy ("we," "our," or "us") is committed to protecting your privacy and the privacy of your child. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Personal Information</h3>
            <p className="text-gray-600 mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Register for our services</li>
              <li>Book a consultation</li>
              <li>Fill out forms on our website</li>
              <li>Contact us via email or other means</li>
              <li>Participate in therapy sessions</li>
            </ul>
            <p className="text-gray-600 mb-4">
              This information may include:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Name, email address, phone number</li>
              <li>Child's name, age, and date of birth</li>
              <li>Medical and developmental history related to speech and language</li>
              <li>Session notes and progress reports</li>
              <li>Payment information</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Automatically Collected Information</h3>
            <p className="text-gray-600 mb-4">
              When you visit our website, we may automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies installed on your device.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Provide, operate, and maintain speech therapy services</li>
              <li>Schedule and conduct therapy sessions</li>
              <li>Communicate with you about appointments and progress</li>
              <li>Process payments and send invoices</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
              <li>Develop treatment plans and track progress</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing and Disclosure</h2>
            <p className="text-gray-600 mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li><strong>With Your Consent:</strong> When you give us explicit permission to share information</li>
              <li><strong>Service Providers:</strong> With trusted third-party service providers who assist in operating our website or conducting our business (e.g., payment processors, video conferencing platforms)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights or the safety of others</li>
              <li><strong>Healthcare Providers:</strong> With other healthcare professionals involved in your child's care, with your written consent</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-600 mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information. However, please note that no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
            <p className="text-gray-600 mb-4">
              Our security measures include:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Encrypted data transmission (SSL/TLS)</li>
              <li>Secure video conferencing platforms with encryption</li>
              <li>Password-protected client portals</li>
              <li>Regular security assessments</li>
              <li>Limited access to personal information on a need-to-know basis</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">HIPAA Compliance</h2>
            <p className="text-gray-600 mb-4">
              As a healthcare provider, we are committed to complying with the Health Insurance Portability and Accountability Act (HIPAA) and protecting your protected health information (PHI). We maintain administrative, physical, and technical safeguards to protect the privacy and security of your health information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Privacy Rights</h2>
            <p className="text-gray-600 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Access the personal information we hold about you</li>
              <li>Request corrections to your personal information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent for information use</li>
              <li>Request a copy of your child's therapy records</li>
            </ul>
            <p className="text-gray-600 mb-4">
              To exercise any of these rights, please contact us at info@anaraspeechtherapy.com
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-600 mb-4">
              Our services are directed to children, but we only collect personal information about children from their parents or legal guardians. We do not knowingly collect personal information directly from children without parental consent.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
            <p className="text-gray-600 mb-4">
              We retain your personal information for as long as necessary to provide our services and comply with legal obligations. Therapy records are typically retained for 7 years from the date of the last service, or longer if required by law.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-gray-600 mb-4">
              We may use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-600 mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-900 font-semibold mb-2">Anara's Speech Therapy</p>
              <p className="text-gray-600">Email: info@anaraspeechtherapy.com</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
