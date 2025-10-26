import { CTAButton } from "@/components/CTAButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Anara's Speech Therapy",
  description: "Get in touch with Anara for speech therapy services. Book a free consultation or ask questions about online speech therapy for Russian-speaking children.",
  keywords: ["contact speech therapist", "speech therapy consultation", "online speech therapy", "Russian logoped contact"],
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Have questions? I'd love to hear from you. Reach out to learn more about how I can help your child.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <p className="mt-1 text-gray-600">
                      <a href="mailto:info@anaraspeechtherapy.com" className="text-primary-600 hover:text-primary-700">
                        info@anaraspeechtherapy.com
                      </a>
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      I typically respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Availability</h3>
                    <p className="mt-1 text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM EST
                    </p>
                    <p className="text-gray-600">
                      Saturday: 10:00 AM - 2:00 PM EST
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Flexible scheduling available
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Languages</h3>
                    <p className="mt-1 text-gray-600">
                      English and Russian (Английский и Русский)
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Feel free to contact me in either language
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Service Area</h3>
                    <p className="mt-1 text-gray-600">
                      Serving families across North America
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Online sessions available anywhere with internet access
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-primary-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Ready to Book?
                </h3>
                <p className="text-gray-600 mb-4">
                  The fastest way to get started is to book your free consultation directly.
                </p>
                <CTAButton>
                  Book Free Consultation
                </CTAButton>
              </div>
            </div>

            {/* FAQ Quick Reference */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Common Questions</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    How quickly can we start therapy?
                  </h3>
                  <p className="text-gray-600">
                    After your free consultation, we can typically schedule your first assessment or therapy session within 1-2 weeks, depending on availability.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    What do I need for online sessions?
                  </h3>
                  <p className="text-gray-600">
                    You'll need a computer or tablet with a camera and microphone, stable internet connection, and a quiet space. I'll provide technical support to ensure everything works smoothly.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Do you accept insurance?
                  </h3>
                  <p className="text-gray-600">
                    I provide detailed invoices (superbills) that you can submit to your insurance company for potential reimbursement. Many families receive partial or full coverage for speech therapy services.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    How long are therapy sessions?
                  </h3>
                  <p className="text-gray-600">
                    Regular therapy sessions are 45 minutes long. For younger children or those with attention challenges, we can adjust the session length as needed.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    What if I'm not sure if my child needs therapy?
                  </h3>
                  <p className="text-gray-600">
                    That's exactly what the free consultation is for! We'll discuss your concerns, and I'll provide professional insight on whether therapy would be beneficial. There's no obligation to continue if it's not the right fit.
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <a
                  href="/#faq"
                  className="text-base font-semibold text-primary-600 hover:text-primary-700"
                >
                  View all FAQs →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Proudly Serving Russian-Speaking Families
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Online services available across North America
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {[
              "Toronto, ON",
              "Vancouver, BC",
              "Montreal, QC",
              "Calgary, AB",
              "New York, NY",
              "Los Angeles, CA",
              "Chicago, IL",
              "Boston, MA",
              "San Francisco, CA",
              "Seattle, WA",
              "Miami, FL",
              "And more...",
            ].map((city) => (
              <div
                key={city}
                className="flex items-center justify-center bg-white rounded-lg p-4 text-center shadow-sm"
              >
                <p className="text-sm font-medium text-gray-900">{city}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-gray-600">
            Wherever you are in North America, I'm here to help your child communicate with confidence.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Let's Start Your Child's Journey
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Every child deserves to communicate with confidence. Book your free consultation today and discover how speech therapy can make a difference.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <CTAButton size="lg">
              Book Free Consultation
            </CTAButton>
            <a
              href="/services"
              className="text-base font-semibold leading-7 text-primary-700 hover:text-primary-600 transition-colors"
            >
              Learn more about services <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
