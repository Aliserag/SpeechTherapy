import { CTAButton } from "@/components/CTAButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speech Therapy Services | Online Logoped for Children",
  description: "Comprehensive online speech therapy services for Russian-speaking children: articulation therapy, language development, speech assessment, and more. Flexible online sessions tailored to your child's needs.",
  keywords: [
    "speech therapy services",
    "articulation therapy",
    "language development",
    "speech assessment",
    "online speech therapy",
    "bilingual speech therapy",
    "Russian logoped",
    "children's speech therapy"
  ],
};

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Comprehensive Speech Therapy Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Professional, evidence-based speech therapy services tailored to your child's unique needs.
              All sessions conducted online for your convenience.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-20">
            {/* Articulation Therapy */}
            <div id="articulation" className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <div className="inline-flex items-center rounded-full bg-primary-100 px-4 py-2 text-sm font-semibold text-primary-700 mb-4">
                  Core Service
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  Articulation Therapy
                </h2>
                <p className="mt-6 text-lg text-gray-600">
                  Help your child produce clear and accurate speech sounds. I specialize in addressing articulation challenges in both Russian and English, ensuring your bilingual child can communicate confidently in both languages.
                </p>
                <div className="mt-8 space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">What we address:</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <svg className="h-6 w-6 flex-shrink-0 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Sound substitutions (e.g., "wabbit" for "rabbit")</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 flex-shrink-0 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Sound omissions (leaving out sounds in words)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 flex-shrink-0 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Lisps and other speech sound disorders</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 flex-shrink-0 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Difficulty with Russian-specific sounds (р, ы, щ, etc.)</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-primary-50 rounded-lg p-8 lg:p-12">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900">Typical Session Flow</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">1</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Warm-up Activities</h4>
                        <p className="text-gray-600">Fun exercises to prepare for therapy</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">2</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Targeted Practice</h4>
                        <p className="text-gray-600">Focused work on specific sounds</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">3</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Interactive Games</h4>
                        <p className="text-gray-600">Engaging activities to reinforce learning</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">4</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Home Practice Plan</h4>
                        <p className="text-gray-600">Activities for continued progress</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Language Development */}
            <div id="language-development" className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="order-2 lg:order-1 bg-primary-50 rounded-lg p-8 lg:p-12">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900">Bilingual Benefits</h3>
                  <p className="text-gray-600">
                    As a native Russian speaker with expertise in English, I understand the unique advantages and challenges of bilingual language development.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-primary-600 mr-3" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">Code-switching support</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-primary-600 mr-3" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">Cultural context integration</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-primary-600 mr-3" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">Parent education in both languages</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center rounded-full bg-primary-100 px-4 py-2 text-sm font-semibold text-primary-700 mb-4">
                  Core Service
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  Language Development
                </h2>
                <p className="mt-6 text-lg text-gray-600">
                  Support your child's overall language growth including vocabulary, grammar, and comprehension.
                  Specialized support for bilingual children navigating two language systems.
                </p>
                <div className="mt-8 space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">We focus on:</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <svg className="h-6 w-6 flex-shrink-0 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Vocabulary expansion in both Russian and English</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 flex-shrink-0 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Grammar and sentence structure development</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 flex-shrink-0 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Following directions and comprehension skills</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 flex-shrink-0 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Narrative skills and storytelling abilities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Speech Assessment */}
            <div id="speech-assessment" className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <div className="inline-flex items-center rounded-full bg-accent-100 px-4 py-2 text-sm font-semibold text-accent-700 mb-4">
                  Initial Step
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  Comprehensive Speech Assessment
                </h2>
                <p className="mt-6 text-lg text-gray-600">
                  Every child begins with a thorough evaluation to identify their specific needs and create a personalized treatment plan. The assessment covers all aspects of speech and language development.
                </p>
                <div className="mt-8 space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">Assessment includes:</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <svg className="h-6 w-6 flex-shrink-0 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Articulation and phonological assessment</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 flex-shrink-0 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Language comprehension and expression evaluation</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 flex-shrink-0 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Bilingual language proficiency assessment</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 flex-shrink-0 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Detailed written report with recommendations</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-8 lg:p-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">What to Expect</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Duration</h4>
                    <p className="text-gray-600">1-2 hours, can be split across multiple sessions</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Format</h4>
                    <p className="text-gray-600">Interactive activities and standardized tests conducted online</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Parent Involvement</h4>
                    <p className="text-gray-600">Parent interview and observation of child's typical communication</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Results</h4>
                    <p className="text-gray-600">Comprehensive report delivered within 1 week, followed by consultation to discuss findings and treatment plan</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Online Sessions */}
            <div id="online-sessions" className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="order-2 lg:order-1 bg-primary-50 rounded-lg p-8 lg:p-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Technology Requirements</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="h-6 w-6 flex-shrink-0 text-primary-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Device</h4>
                      <p className="text-gray-600">Computer or tablet with camera and microphone</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-6 w-6 flex-shrink-0 text-primary-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Internet</h4>
                      <p className="text-gray-600">Stable internet connection</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-6 w-6 flex-shrink-0 text-primary-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Environment</h4>
                      <p className="text-gray-600">Quiet space free from distractions</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center rounded-full bg-primary-100 px-4 py-2 text-sm font-semibold text-primary-700 mb-4">
                  Convenient & Flexible
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  Online Therapy Sessions
                </h2>
                <p className="mt-6 text-lg text-gray-600">
                  All therapy is conducted online via secure video conferencing, making it convenient and accessible no matter where you are in North America. Research shows online therapy can be just as effective as in-person sessions.
                </p>
                <div className="mt-8 space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">Benefits of online therapy:</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <svg className="h-6 w-6 flex-shrink-0 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>No travel time - therapy from the comfort of your home</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 flex-shrink-0 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Flexible scheduling to fit your family's routine</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 flex-shrink-0 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Children often more comfortable in familiar environment</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 flex-shrink-0 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Easy parent observation and participation</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 flex-shrink-0 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Access to specialist regardless of geographic location</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Transparent Pricing
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Invest in your child's communication future with clear, upfront pricing.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-lg gap-8 lg:max-w-4xl lg:grid-cols-2">
            <div className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-200">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Initial Consultation</h3>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  Perfect for getting started and determining if we're the right fit.
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">Free</span>
                </p>
                <p className="mt-2 text-sm text-gray-500">30-minute session</p>
                <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-primary-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    Discussion of concerns
                  </li>
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-primary-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    Overview of approach
                  </li>
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-primary-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    Initial recommendations
                  </li>
                </ul>
              </div>
              <CTAButton className="mt-8" size="lg">
                Book Free Consultation
              </CTAButton>
            </div>
            <div className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-2 ring-primary-600">
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-2xl font-bold text-gray-900">Regular Sessions</h3>
                  <p className="rounded-full bg-primary-600 px-3 py-1 text-xs font-semibold leading-5 text-white">
                    Most Popular
                  </p>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  Ongoing therapy sessions for continuous progress.
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">$85</span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">/session</span>
                </p>
                <p className="mt-2 text-sm text-gray-500">45-minute session</p>
                <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-primary-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    Personalized therapy plan
                  </li>
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-primary-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    Progress tracking and reports
                  </li>
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-primary-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    Home practice materials
                  </li>
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-primary-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    Parent consultation and support
                  </li>
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-primary-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    Flexible scheduling
                  </li>
                </ul>
              </div>
              <CTAButton href="/contact" variant="secondary" className="mt-8" size="lg">
                Get Started
              </CTAButton>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-600">
            <p>Package discounts available. Contact for details.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-700 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="mt-6 text-lg leading-8 text-primary-100 max-w-2xl mx-auto">
            Book your free consultation today and discover how speech therapy can help your child communicate with confidence.
          </p>
          <div className="mt-10">
            <CTAButton variant="secondary" size="lg">
              Book Free Consultation
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
