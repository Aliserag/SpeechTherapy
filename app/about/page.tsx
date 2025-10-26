import { CTAButton } from "@/components/CTAButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Anara | Certified Speech-Language Pathologist",
  description: "Meet Anara, a certified speech-language pathologist specializing in bilingual speech therapy for Russian-speaking children. Over 10 years of experience helping children communicate with confidence.",
  keywords: [
    "speech pathologist",
    "speech therapist",
    "bilingual speech therapy",
    "Russian logoped",
    "pediatric speech therapy",
    "online speech therapy"
  ],
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              About Anara
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Certified Speech-Language Pathologist dedicated to helping children find their voice
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {/* Left column - Story */}
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  My Story
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  For over 10 years, I've had the privilege of helping Russian-speaking children and their families
                  navigate the challenges of speech and language development. My passion for this work stems from
                  understanding the unique journey of bilingual children growing up in North America.
                </p>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  As a native Russian speaker who has mastered English, I deeply understand the nuances of bilingual
                  language development. I know firsthand the challenges families face when raising children to be
                  proficient in two languages, and I'm committed to helping your child succeed in both.
                </p>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  My approach is rooted in evidence-based practices, but I also believe that every child is unique.
                  I take the time to understand each child's individual needs, interests, and learning style to create
                  a therapy plan that's both effective and engaging.
                </p>
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Why I Love What I Do
                </h3>
                <p className="text-base text-gray-600">
                  There's nothing more rewarding than seeing a child's face light up when they successfully produce
                  a sound they've been working on, or hearing a parent share how their child's confidence has grown.
                  Every small victory in therapy represents a huge step forward in a child's ability to communicate,
                  connect with others, and express themselves.
                </p>
              </div>
            </div>

            {/* Right column - Credentials & Approach */}
            <div className="pt-8 lg:pt-0">
              <div className="bg-primary-50 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Qualifications & Expertise
                </h3>
                <dl className="space-y-6">
                  <div>
                    <dt className="font-semibold text-gray-900">Education</dt>
                    <dd className="mt-2 text-gray-600">
                      Master's Degree in Speech-Language Pathology
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-900">Certification</dt>
                    <dd className="mt-2 text-gray-600">
                      Certified Speech-Language Pathologist (SLP)
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-900">Specializations</dt>
                    <dd className="mt-2 text-gray-600">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Pediatric Speech Therapy (ages 2-12)</li>
                        <li>Bilingual Language Development</li>
                        <li>Articulation and Phonological Disorders</li>
                        <li>Language Development and Delays</li>
                        <li>Online Therapy Delivery</li>
                      </ul>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-900">Experience</dt>
                    <dd className="mt-2 text-gray-600">
                      10+ years working with Russian-speaking families in North America
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-900">Languages</dt>
                    <dd className="mt-2 text-gray-600">
                      Native Russian speaker, fluent in English
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  My Approach
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">Evidence-Based</h4>
                      <p className="mt-1 text-gray-600">
                        Using research-proven methods and techniques that deliver results
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">Child-Centered</h4>
                      <p className="mt-1 text-gray-600">
                        Therapy that's fun and engaging, tailored to each child's interests
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">Family-Focused</h4>
                      <p className="mt-1 text-gray-600">
                        Parents are partners in therapy, with guidance for supporting progress at home
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
                      <h4 className="font-semibold text-gray-900">Culturally Sensitive</h4>
                      <p className="mt-1 text-gray-600">
                        Deep understanding of Russian culture and the bilingual experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What I Believe
            </h2>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col bg-white p-8 rounded-lg shadow-sm">
                <dt className="text-xl font-semibold leading-7 text-gray-900">
                  Every Child Can Progress
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    With the right support, encouragement, and therapeutic approach, every child can improve their
                    communication skills. I'm committed to finding what works for each individual child.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col bg-white p-8 rounded-lg shadow-sm">
                <dt className="text-xl font-semibold leading-7 text-gray-900">
                  Bilingualism is a Gift
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Being bilingual is an asset, not a hindrance. I help children thrive in both languages,
                    celebrating their unique cultural heritage while building strong communication skills.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col bg-white p-8 rounded-lg shadow-sm">
                <dt className="text-xl font-semibold leading-7 text-gray-900">
                  Parents are Essential Partners
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Parents know their children best. I work collaboratively with families, providing guidance and
                    support to ensure progress continues beyond our therapy sessions.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Why Online Therapy Works */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Online Therapy?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Online therapy isn't just convenient—it's highly effective.
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <div className="space-y-8">
              <div className="bg-primary-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Research-Backed Effectiveness
                </h3>
                <p className="text-gray-600">
                  Studies show that online speech therapy (telepractice) can be just as effective as in-person sessions,
                  with the added benefits of convenience and accessibility. Children often feel more comfortable in their
                  own environment, leading to better engagement and faster progress.
                </p>
              </div>
              <div className="bg-primary-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Accessible Expertise
                </h3>
                <p className="text-gray-600">
                  For Russian-speaking families in North America, finding a qualified speech therapist who understands
                  both languages and cultures can be challenging. Online therapy removes geographic barriers, giving you
                  access to specialized care no matter where you live.
                </p>
              </div>
              <div className="bg-primary-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Family Involvement
                </h3>
                <p className="text-gray-600">
                  With online sessions, parents can easily observe and participate in therapy from home. This makes it
                  easier to understand the techniques being used and continue practicing between sessions, leading to
                  better outcomes for your child.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-700 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let's work together
          </h2>
          <p className="mt-6 text-lg leading-8 text-primary-100 max-w-2xl mx-auto">
            I'd love to help your child develop the communication skills they need to thrive. Book a free consultation to learn more about how we can work together.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <CTAButton variant="secondary" size="lg">
              Book Free Consultation
            </CTAButton>
            <a
              href="/services"
              className="text-base font-semibold leading-7 text-white hover:text-primary-100 transition-colors"
            >
              View services <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
