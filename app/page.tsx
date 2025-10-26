import { CTAButton } from "@/components/CTAButton";
import Link from "next/link";
import { StructuredData } from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      <StructuredData />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary-50 to-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Professional Speech Therapy for Your Child
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Expert online speech therapy (logoped) services for Russian-speaking children in North America.
              Specialized care from a certified speech pathologist with personalized treatment plans.
            </p>
            <p className="mt-4 text-base text-gray-500 italic">
              Профессиональная логопедическая помощь для русскоговорящих детей в Северной Америке
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <CTAButton size="lg">
                Book Your Free Consultation
              </CTAButton>
              <Link
                href="/services"
                className="text-base font-semibold leading-7 text-primary-700 hover:text-primary-600 transition-colors"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
              <div className="flex flex-col">
                <dt className="text-base leading-7 text-gray-600">Years of Experience</dt>
                <dd className="order-first text-4xl font-semibold tracking-tight text-primary-700">10+</dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-base leading-7 text-gray-600">Happy Families</dt>
                <dd className="order-first text-4xl font-semibold tracking-tight text-primary-700">200+</dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-base leading-7 text-gray-600">Success Rate</dt>
                <dd className="order-first text-4xl font-semibold tracking-tight text-primary-700">95%</dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-base leading-7 text-gray-600">Online Sessions</dt>
                <dd className="order-first text-4xl font-semibold tracking-tight text-primary-700">100%</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Why Choose Anara</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Expert Care for Your Child's Speech Development
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Specialized speech therapy services tailored to Russian-speaking children with proven results and personalized approach.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-gray-900">
                  <svg className="h-6 w-6 flex-none text-primary-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                  Certified Expertise
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Certified speech-language pathologist with specialized training in pediatric speech therapy and bilingual language development.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-gray-900">
                  <svg className="h-6 w-6 flex-none text-primary-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                  Bilingual Approach
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Native Russian speaker with deep understanding of bilingual speech development challenges faced by Russian-speaking children in North America.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-gray-900">
                  <svg className="h-6 w-6 flex-none text-primary-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                  Proven Results
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Evidence-based therapy methods with documented success helping children overcome speech and language challenges with measurable progress.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Comprehensive Services</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Specialized Speech Therapy Services
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-2">
              <div className="flex flex-col items-start">
                <div className="rounded-lg bg-primary-50 p-3">
                  <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <dt className="mt-4 font-semibold text-gray-900 text-lg">Articulation Therapy</dt>
                <dd className="mt-2 leading-7 text-gray-600">
                  Helping children produce clear and accurate speech sounds. Addressing challenges with specific sounds in both Russian and English.
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-lg bg-primary-50 p-3">
                  <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                  </svg>
                </div>
                <dt className="mt-4 font-semibold text-gray-900 text-lg">Language Development</dt>
                <dd className="mt-2 leading-7 text-gray-600">
                  Supporting vocabulary building, grammar skills, and overall language comprehension in bilingual children.
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-lg bg-primary-50 p-3">
                  <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                </div>
                <dt className="mt-4 font-semibold text-gray-900 text-lg">Speech Assessment</dt>
                <dd className="mt-2 leading-7 text-gray-600">
                  Comprehensive evaluation of your child's speech and language abilities to create a personalized treatment plan.
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-lg bg-primary-50 p-3">
                  <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                  </svg>
                </div>
                <dt className="mt-4 font-semibold text-gray-900 text-lg">Convenient Online Sessions</dt>
                <dd className="mt-2 leading-7 text-gray-600">
                  Flexible online therapy sessions that fit your schedule. Effective treatment from the comfort of your home.
                </dd>
              </div>
            </dl>
          </div>
          <div className="mt-12 text-center">
            <CTAButton href="/services" variant="secondary">
              View All Services
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-primary-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Testimonials</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Parents Say
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col bg-white p-8 rounded-lg shadow-sm">
              <div className="flex gap-x-1 text-primary-600 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic">
                "Anara has been wonderful with our daughter. In just 3 months, we've seen incredible progress in her pronunciation. The online format works perfectly for our busy schedule."
              </p>
              <p className="mt-4 font-semibold text-gray-900">- Maria S.</p>
              <p className="text-sm text-gray-500">Parent from Toronto</p>
            </div>
            <div className="flex flex-col bg-white p-8 rounded-lg shadow-sm">
              <div className="flex gap-x-1 text-primary-600 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic">
                "As Russian-speaking parents, it was important to find a therapist who understands bilingual development. Anara's expertise in both languages has been invaluable."
              </p>
              <p className="mt-4 font-semibold text-gray-900">- Dmitry and Elena K.</p>
              <p className="text-sm text-gray-500">Parents from New York</p>
            </div>
            <div className="flex flex-col bg-white p-8 rounded-lg shadow-sm">
              <div className="flex gap-x-1 text-primary-600 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic">
                "Professional, patient, and caring. Our son looks forward to his sessions with Anara. His confidence in speaking has grown tremendously."
              </p>
              <p className="mt-4 font-semibold text-gray-900">- Anna M.</p>
              <p className="text-sm text-gray-500">Parent from Vancouver</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
            <h2 className="text-3xl font-bold leading-10 tracking-tight text-gray-900 text-center">
              Frequently Asked Questions
            </h2>
            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
              <div className="pt-6">
                <dt className="text-lg font-semibold leading-7 text-gray-900">
                  What age groups do you work with?
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  I specialize in working with children aged 2-12 years old. Each child receives an individualized treatment plan based on their specific needs and developmental stage.
                </dd>
              </div>
              <div className="pt-6">
                <dt className="text-lg font-semibold leading-7 text-gray-900">
                  How do online therapy sessions work?
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Online sessions are conducted via secure video conferencing. I use interactive activities, digital materials, and engaging techniques that work effectively in an online format. Parents receive guidance on how to support practice between sessions.
                </dd>
              </div>
              <div className="pt-6">
                <dt className="text-lg font-semibold leading-7 text-gray-900">
                  Do you work with bilingual children?
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Yes, I specialize in bilingual speech development for Russian-English speaking children. I understand the unique challenges of bilingualism and can provide therapy in both languages as needed.
                </dd>
              </div>
              <div className="pt-6">
                <dt className="text-lg font-semibold leading-7 text-gray-900">
                  What is included in the free consultation?
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  The free 30-minute consultation includes a discussion of your concerns, an overview of my approach, and initial recommendations. This helps us determine if my services are the right fit for your child's needs.
                </dd>
              </div>
              <div className="pt-6">
                <dt className="text-lg font-semibold leading-7 text-gray-900">
                  How long does therapy typically last?
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  The duration varies depending on each child's needs. Some children see significant progress in 3-6 months, while others may benefit from longer-term support. We regularly assess progress and adjust the treatment plan accordingly.
                </dd>
              </div>
              <div className="pt-6">
                <dt className="text-lg font-semibold leading-7 text-gray-900">
                  What are your qualifications?
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  I am a certified speech-language pathologist with specialized training in pediatric speech therapy and bilingual language development. I have over 10 years of experience working with Russian-speaking children and families.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-primary-700">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to help your child thrive?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-100">
              Book a free consultation today and take the first step towards better communication for your child.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <CTAButton variant="secondary" size="lg">
                Book Free Consultation
              </CTAButton>
              <Link
                href="/contact"
                className="text-base font-semibold leading-7 text-white hover:text-primary-100 transition-colors"
              >
                Contact us <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
