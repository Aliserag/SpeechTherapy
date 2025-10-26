import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Anara's Speech Therapy",
  description: "Terms of service for Anara's Speech Therapy. Learn about our policies, cancellation terms, and service agreements.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-24">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-8">
          Terms of Service
        </h1>
        <p className="text-sm text-gray-600 mb-12">
          Last Updated: October 26, 2025
        </p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing and using the services of Anara's Speech Therapy, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Services Provided</h2>
            <p className="text-gray-600 mb-4">
              Anara's Speech Therapy provides online speech therapy services (telepractice) for children, including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Speech and language assessments</li>
              <li>Articulation therapy</li>
              <li>Language development therapy</li>
              <li>Parent consultation and education</li>
              <li>Progress monitoring and reporting</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Relationship</h2>
            <p className="text-gray-600 mb-4">
              The relationship between Anara's Speech Therapy and clients is a professional therapeutic relationship. Services are provided by a licensed speech-language pathologist.
            </p>
            <p className="text-gray-600 mb-4">
              Our services are not intended to replace emergency medical care. If your child is experiencing a medical emergency, please call 911 or seek immediate medical attention.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Scheduling and Appointments</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Booking</h3>
            <p className="text-gray-600 mb-4">
              Sessions are scheduled by mutual agreement between the therapist and client. Regular weekly or bi-weekly sessions are recommended for optimal progress.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Attendance</h3>
            <p className="text-gray-600 mb-4">
              Clients are expected to attend all scheduled sessions. Consistent attendance is crucial for therapeutic progress.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Cancellation Policy</h3>
            <p className="text-gray-600 mb-4">
              We require at least 24 hours notice for cancellations or rescheduling. Cancellations made with less than 24 hours notice, or missed appointments without notification, will be charged the full session fee.
            </p>
            <p className="text-gray-600 mb-4">
              Exceptions may be made for emergencies or illness at the therapist's discretion.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Fees</h3>
            <p className="text-gray-600 mb-4">
              Payment is due at the time of service unless other arrangements have been made in advance. We accept payment by credit card, debit card, or electronic bank transfer.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Insurance</h3>
            <p className="text-gray-600 mb-4">
              We provide detailed invoices (superbills) that can be submitted to your insurance company for potential reimbursement. However, we do not bill insurance companies directly. You are responsible for full payment regardless of insurance coverage.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Late Payments</h3>
            <p className="text-gray-600 mb-4">
              Accounts more than 30 days overdue may result in suspension of services until payment is received. A late fee may be applied to overdue accounts.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Online Session Requirements</h2>
            <p className="text-gray-600 mb-4">
              To participate in online therapy sessions, you must have:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>A reliable internet connection</li>
              <li>A computer or tablet with camera and microphone</li>
              <li>A quiet, private space for sessions</li>
              <li>Necessary software or apps installed (instructions will be provided)</li>
            </ul>
            <p className="text-gray-600 mb-4">
              Technical difficulties on the client's end that prevent a session from taking place will be subject to the standard cancellation policy unless rescheduling is possible within the same week.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Confidentiality and Privacy</h2>
            <p className="text-gray-600 mb-4">
              All information shared during therapy sessions is confidential and protected under HIPAA and applicable privacy laws. Please refer to our Privacy Policy for detailed information about how we handle your personal information.
            </p>
            <p className="text-gray-600 mb-4">
              Confidentiality may be breached only in situations where:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>There is a risk of harm to the child or others</li>
              <li>Suspected child abuse or neglect</li>
              <li>Required by law or court order</li>
              <li>You provide written consent for information sharing</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Parent/Guardian Responsibilities</h2>
            <p className="text-gray-600 mb-4">
              As a parent or guardian, you agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Provide accurate and complete information about your child's medical and developmental history</li>
              <li>Attend scheduled sessions or provide adequate notice of cancellation</li>
              <li>Supervise your child during online sessions as needed</li>
              <li>Complete home practice activities as recommended</li>
              <li>Communicate any concerns or changes in your child's condition</li>
              <li>Maintain a safe and appropriate environment for online sessions</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination of Services</h2>
            <p className="text-gray-600 mb-4">
              Either party may terminate the therapeutic relationship at any time. We recommend providing notice to allow for proper closure and transition planning.
            </p>
            <p className="text-gray-600 mb-4">
              Services may be terminated by the therapist if:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Payment obligations are not met</li>
              <li>The client consistently misses appointments without notice</li>
              <li>The therapeutic relationship is no longer beneficial</li>
              <li>There is a conflict of interest or ethical concern</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-600 mb-4">
              While we strive to provide the highest quality services, Anara's Speech Therapy cannot guarantee specific outcomes or results. Speech therapy progress depends on many factors including the child's individual needs, consistent participation, and home practice.
            </p>
            <p className="text-gray-600 mb-4">
              We are not liable for any indirect, incidental, or consequential damages arising from the use of our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
            <p className="text-gray-600 mb-4">
              All materials, activities, and resources provided during therapy sessions are the intellectual property of Anara's Speech Therapy. These materials are for personal use only and may not be reproduced, distributed, or used for commercial purposes without permission.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Recording of Sessions</h2>
            <p className="text-gray-600 mb-4">
              Recording of therapy sessions by either party requires explicit written consent from the other party. Unauthorized recording is strictly prohibited.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Dispute Resolution</h2>
            <p className="text-gray-600 mb-4">
              In the event of a dispute, we encourage open communication to resolve issues. If a resolution cannot be reached through discussion, both parties agree to attempt mediation before pursuing legal action.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
            <p className="text-gray-600 mb-4">
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to our website. Continued use of our services after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
            <p className="text-gray-600 mb-4">
              These Terms of Service are governed by the laws of the jurisdiction in which services are provided, without regard to conflict of law principles.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-900 font-semibold mb-2">Anara's Speech Therapy</p>
              <p className="text-gray-600">Email: info@anaraspeechtherapy.com</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Acknowledgment</h2>
            <p className="text-gray-600 mb-4">
              By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
