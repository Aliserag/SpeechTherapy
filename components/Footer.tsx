import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white">Anara's Speech Therapy</h3>
              <p className="mt-4 text-sm leading-6 text-gray-300">
                Professional online speech therapy services for Russian-speaking children in North America.
              </p>
            </div>
            <div className="flex space-x-6">
              {/* Social media links can be added here */}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Navigation</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/services#speech-assessment" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Speech Assessment
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#articulation" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Articulation Therapy
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#language-development" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Language Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#online-sessions" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Online Sessions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Contact</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="text-sm leading-6 text-gray-300">
                    Email: info@anaraspeechtherapy.com
                  </li>
                  <li className="text-sm leading-6 text-gray-300">
                    Available for online consultations
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/privacy" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {currentYear} Anara's Speech Therapy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
