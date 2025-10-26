import { CTAButton } from "@/components/CTAButton";
import Link from "next/link";
import { StructuredData } from "@/components/StructuredData";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <StructuredData />

      {/* Hero Section with Image */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxNGI4YTYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE zNGgxNHYxNEgzNnpNMTAgMTBoMTR2MTRIMTB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8 lg:py-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="text-left animate-fade-in">
              <div className="inline-flex items-center rounded-full bg-primary-100 px-4 py-2 text-sm font-semibold text-primary-700 mb-6">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                </span>
                Now Accepting New Clients
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-6xl lg:text-7xl">
                Helping Children
                <span className="block text-primary-600 mt-2">Find Their Voice</span>
              </h1>

              <p className="mt-6 text-xl leading-8 text-neutral-600 max-w-2xl">
                Professional online speech therapy for Russian-speaking children in North America.
                Expert care from a certified speech pathologist with personalized treatment plans.
              </p>

              <p className="mt-3 text-base text-neutral-500 italic">
                Профессиональная логопедическая помощь для русскоговорящих детей
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <CTAButton size="lg" className="shadow-soft-lg w-full sm:w-auto">
                  <span className="flex items-center justify-center">
                    Book Free Consultation
                    <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </CTAButton>
                <Link
                  href="/services"
                  className="text-base font-semibold leading-7 text-primary-700 hover:text-primary-600 transition-colors flex items-center group"
                >
                  Learn more
                  <span aria-hidden="true" className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="mt-12 flex flex-wrap gap-6 text-sm text-neutral-600">
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Certified SLP</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>10+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>200+ Happy Families</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative lg:ml-auto animate-slide-up">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft-lg">
                <Image
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=600&fit=crop&q=80"
                  alt="Child in speech therapy session"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent"></div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-soft-lg p-6 max-w-xs">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-primary-100 rounded-lg p-3">
                    <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary-600">95%</p>
                    <p className="text-sm text-neutral-600">Success Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators - Stats Bar */}
      <section className="bg-white border-y border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <dt className="text-sm font-medium text-neutral-600">Years of Experience</dt>
              <dd className="mt-2 text-4xl font-bold text-primary-600">10+</dd>
            </div>
            <div className="flex flex-col items-center text-center">
              <dt className="text-sm font-medium text-neutral-600">Happy Families</dt>
              <dd className="mt-2 text-4xl font-bold text-primary-600">200+</dd>
            </div>
            <div className="flex flex-col items-center text-center">
              <dt className="text-sm font-medium text-neutral-600">Success Rate</dt>
              <dd className="mt-2 text-4xl font-bold text-primary-600">95%</dd>
            </div>
            <div className="flex flex-col items-center text-center">
              <dt className="text-sm font-medium text-neutral-600">Online Sessions</dt>
              <dd className="mt-2 text-4xl font-bold text-primary-600">100%</dd>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions with Images */}
      <section className="bg-neutral-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600 uppercase tracking-wide">Why Choose Anara</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
              Expert Care for Your Child's Speech Development
            </p>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Specialized speech therapy services tailored to Russian-speaking children with proven results and personalized approach.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col bg-white rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300 overflow-hidden group">
                <div className="relative h-48 bg-gradient-to-br from-primary-400 to-primary-600 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop&q=80"
                    alt="Certified expertise"
                    fill
                    className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                      <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <dt className="text-2xl font-bold leading-7 text-neutral-900 mb-4">
                    Certified Expertise
                  </dt>
                  <dd className="text-base leading-7 text-neutral-600">
                    Certified speech-language pathologist with specialized training in pediatric speech therapy and bilingual language development.
                  </dd>
                </div>
              </div>

              <div className="flex flex-col bg-white rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300 overflow-hidden group">
                <div className="relative h-48 bg-gradient-to-br from-secondary-400 to-secondary-600 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=400&h=300&fit=crop&q=80"
                    alt="Bilingual approach"
                    fill
                    className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                      <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <dt className="text-2xl font-bold leading-7 text-neutral-900 mb-4">
                    Bilingual Approach
                  </dt>
                  <dd className="text-base leading-7 text-neutral-600">
                    Native Russian speaker with deep understanding of bilingual speech development challenges faced by Russian-speaking children in North America.
                  </dd>
                </div>
              </div>

              <div className="flex flex-col bg-white rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300 overflow-hidden group">
                <div className="relative h-48 bg-gradient-to-br from-accent-400 to-accent-600 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=400&h=300&fit=crop&q=80"
                    alt="Proven results"
                    fill
                    className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent-900/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                      <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <dt className="text-2xl font-bold leading-7 text-neutral-900 mb-4">
                    Proven Results
                  </dt>
                  <dd className="text-base leading-7 text-neutral-600">
                    Evidence-based therapy methods with documented success helping children overcome speech and language challenges with measurable progress.
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Services Overview with Image */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-soft-lg">
                <Image
                  src="https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=600&h=800&fit=crop&q=80"
                  alt="Speech therapy services"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary-100 rounded-2xl -z-10"></div>
            </div>

            <div>
              <h2 className="text-base font-semibold leading-7 text-primary-600 uppercase tracking-wide">Comprehensive Services</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
                Specialized Speech Therapy Services
              </p>
              <p className="mt-6 text-lg leading-8 text-neutral-600">
                From assessment to ongoing therapy, we provide comprehensive care tailored to your child's unique needs.
              </p>

              <dl className="mt-10 space-y-6">
                <div className="relative pl-16">
                  <dt className="text-lg font-semibold text-neutral-900">
                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                      </svg>
                    </div>
                    Articulation Therapy
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-neutral-600">
                    Helping children produce clear and accurate speech sounds in both Russian and English.
                  </dd>
                </div>

                <div className="relative pl-16">
                  <dt className="text-lg font-semibold text-neutral-900">
                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                      </svg>
                    </div>
                    Language Development
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-neutral-600">
                    Supporting vocabulary building, grammar skills, and overall language comprehension in bilingual children.
                  </dd>
                </div>

                <div className="relative pl-16">
                  <dt className="text-lg font-semibold text-neutral-900">
                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                      </svg>
                    </div>
                    Convenient Online Sessions
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-neutral-600">
                    Flexible online therapy sessions that fit your schedule. Effective treatment from the comfort of your home.
                  </dd>
                </div>
              </dl>

              <div className="mt-10">
                <CTAButton href="/services" variant="secondary">
                  View All Services
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-primary-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600 uppercase tracking-wide">Testimonials</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              What Parents Say
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col bg-white rounded-2xl shadow-soft p-8 hover:shadow-soft-lg transition-shadow">
              <div className="flex gap-x-1 text-accent-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="flex-1">
                <p className="text-neutral-700 leading-relaxed">
                  "Anara has been wonderful with our daughter. In just 3 months, we've seen incredible progress in her pronunciation. The online format works perfectly for our busy schedule."
                </p>
              </blockquote>
              <div className="mt-6 flex items-center gap-x-4">
                <div className="h-12 w-12 rounded-full bg-primary-200 flex items-center justify-center">
                  <span className="text-primary-700 font-semibold text-lg">MS</span>
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">Maria S.</p>
                  <p className="text-sm text-neutral-500">Parent from Toronto</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-white rounded-2xl shadow-soft p-8 hover:shadow-soft-lg transition-shadow">
              <div className="flex gap-x-1 text-accent-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="flex-1">
                <p className="text-neutral-700 leading-relaxed">
                  "As Russian-speaking parents, it was important to find a therapist who understands bilingual development. Anara's expertise in both languages has been invaluable."
                </p>
              </blockquote>
              <div className="mt-6 flex items-center gap-x-4">
                <div className="h-12 w-12 rounded-full bg-primary-200 flex items-center justify-center">
                  <span className="text-primary-700 font-semibold text-lg">DK</span>
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">Dmitry and Elena K.</p>
                  <p className="text-sm text-neutral-500">Parents from New York</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-white rounded-2xl shadow-soft p-8 hover:shadow-soft-lg transition-shadow">
              <div className="flex gap-x-1 text-accent-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="flex-1">
                <p className="text-neutral-700 leading-relaxed">
                  "Professional, patient, and caring. Our son looks forward to his sessions with Anara. His confidence in speaking has grown tremendously."
                </p>
              </blockquote>
              <div className="mt-6 flex items-center gap-x-4">
                <div className="h-12 w-12 rounded-full bg-primary-200 flex items-center justify-center">
                  <span className="text-primary-700 font-semibold text-lg">AM</span>
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">Anna M.</p>
                  <p className="text-sm text-neutral-500">Parent from Vancouver</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold leading-10 tracking-tight text-neutral-900 text-center mb-12">
              Frequently Asked Questions
            </h2>
            <dl className="space-y-8 divide-y divide-neutral-200">
              {[
                {
                  question: "What age groups do you work with?",
                  answer: "I specialize in working with children aged 2-12 years old. Each child receives an individualized treatment plan based on their specific needs and developmental stage."
                },
                {
                  question: "How do online therapy sessions work?",
                  answer: "Online sessions are conducted via secure video conferencing. I use interactive activities, digital materials, and engaging techniques that work effectively in an online format. Parents receive guidance on how to support practice between sessions."
                },
                {
                  question: "Do you work with bilingual children?",
                  answer: "Yes, I specialize in bilingual speech development for Russian-English speaking children. I understand the unique challenges of bilingualism and can provide therapy in both languages as needed."
                },
                {
                  question: "What is included in the free consultation?",
                  answer: "The free 30-minute consultation includes a discussion of your concerns, an overview of my approach, and initial recommendations. This helps us determine if my services are the right fit for your child's needs."
                }
              ].map((faq, index) => (
                <div key={index} className="pt-8">
                  <dt className="text-lg font-semibold leading-7 text-neutral-900">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-neutral-600">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoMTR2MTRIMzZ6TTEwIDEwaDEzdjE0SDEweiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>

        <div className="relative px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Ready to help your child thrive?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-100">
              Book a free consultation today and take the first step towards better communication for your child.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/book"
                className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-primary-700 shadow-soft-lg hover:bg-primary-50 transition-all hover:scale-105 w-full sm:w-auto"
              >
                Book Free Consultation
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center text-base font-semibold leading-7 text-white hover:text-primary-100 transition-colors"
              >
                Contact us
                <span aria-hidden="true" className="ml-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
