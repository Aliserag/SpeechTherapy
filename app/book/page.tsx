"use client";

import { useState } from "react";
import type { Metadata } from "next";

export default function BookPage() {
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    childName: "",
    childAge: "",
    preferredLanguage: "english",
    concerns: "",
    preferredTime: "",
    hearAboutUs: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - in production, this would send to your backend/email service
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
    }, 1500);
  };

  if (submitStatus === "success") {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center px-6">
        <div className="max-w-2xl text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
            <svg
              className="h-10 w-10 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Thank You for Your Interest!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Your consultation request has been received. I'll reach out to you within 24 hours to schedule your free consultation.
          </p>
          <p className="text-base text-gray-600 mb-8">
            In the meantime, feel free to explore more about my services or reach out directly at{" "}
            <a href="mailto:info@anaraspeechtherapy.com" className="text-primary-600 hover:text-primary-700 font-semibold">
              info@anaraspeechtherapy.com
            </a>
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-md bg-primary-600 px-6 py-3 text-base font-medium text-white hover:bg-primary-700 transition-colors"
            >
              Return Home
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center rounded-md border-2 border-primary-600 bg-white px-6 py-3 text-base font-medium text-primary-700 hover:bg-primary-50 transition-colors"
            >
              View Services
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Book Your Free Consultation
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Take the first step towards helping your child communicate with confidence. The initial 30-minute consultation is completely free with no obligation.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 pb-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Parent Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Parent/Guardian Information</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label htmlFor="parentName" className="block text-sm font-semibold leading-6 text-gray-900">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="parentName"
                      id="parentName"
                      required
                      value={formData.parentName}
                      onChange={handleChange}
                      className="mt-2 block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-2 block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-2 block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              {/* Child Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Child Information</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="childName" className="block text-sm font-semibold leading-6 text-gray-900">
                      Child's Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="childName"
                      id="childName"
                      required
                      value={formData.childName}
                      onChange={handleChange}
                      className="mt-2 block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div>
                    <label htmlFor="childAge" className="block text-sm font-semibold leading-6 text-gray-900">
                      Child's Age <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="childAge"
                      id="childAge"
                      required
                      placeholder="e.g., 4 years old"
                      value={formData.childAge}
                      onChange={handleChange}
                      className="mt-2 block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="preferredLanguage" className="block text-sm font-semibold leading-6 text-gray-900">
                      Preferred Language for Consultation
                    </label>
                    <select
                      name="preferredLanguage"
                      id="preferredLanguage"
                      value={formData.preferredLanguage}
                      onChange={handleChange}
                      className="mt-2 block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                    >
                      <option value="english">English</option>
                      <option value="russian">Russian (Русский)</option>
                      <option value="both">Both</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Consultation Details */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Tell Me More</h2>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="concerns" className="block text-sm font-semibold leading-6 text-gray-900">
                      What are your main concerns about your child's speech or language development? <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="concerns"
                      id="concerns"
                      required
                      rows={4}
                      value={formData.concerns}
                      onChange={handleChange}
                      placeholder="Please describe any speech or language challenges you've noticed..."
                      className="mt-2 block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-semibold leading-6 text-gray-900">
                      Preferred Time for Consultation
                    </label>
                    <input
                      type="text"
                      name="preferredTime"
                      id="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      placeholder="e.g., Weekday evenings, Weekend mornings"
                      className="mt-2 block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div>
                    <label htmlFor="hearAboutUs" className="block text-sm font-semibold leading-6 text-gray-900">
                      How did you hear about us?
                    </label>
                    <select
                      name="hearAboutUs"
                      id="hearAboutUs"
                      value={formData.hearAboutUs}
                      onChange={handleChange}
                      className="mt-2 block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                    >
                      <option value="">Select an option</option>
                      <option value="google">Google Search</option>
                      <option value="social-media">Social Media</option>
                      <option value="referral">Friend/Family Referral</option>
                      <option value="doctor">Doctor/Pediatrician</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Privacy Notice */}
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-sm text-gray-600">
                  <strong>Privacy Notice:</strong> Your information will be kept confidential and used only to schedule your consultation and provide speech therapy services. By submitting this form, you agree to our{" "}
                  <a href="/privacy" className="text-primary-600 hover:text-primary-700 underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 inline-flex items-center justify-center rounded-md bg-primary-600 px-6 py-4 text-base font-semibold text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    "Submit Request"
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Additional Information */}
          <div className="mt-12 bg-primary-50 rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">What Happens Next?</h3>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">1</span>
                <div>
                  <h4 className="font-semibold text-gray-900">I'll Review Your Request</h4>
                  <p className="text-gray-600">Within 24 hours, I'll reach out to schedule your free consultation</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">2</span>
                <div>
                  <h4 className="font-semibold text-gray-900">We'll Meet Online</h4>
                  <p className="text-gray-600">30-minute video consultation to discuss your child's needs</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">3</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Get Recommendations</h4>
                  <p className="text-gray-600">I'll provide initial insights and discuss next steps</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">4</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Decide Together</h4>
                  <p className="text-gray-600">No pressure—you decide if you'd like to move forward with therapy</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}
