import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Anara's Speech Therapy | Professional Online Logoped Services for Children",
    template: "%s | Anara's Speech Therapy"
  },
  description: "Professional online speech therapy (logoped) services for Russian-speaking children in North America. Specialized in speech pathology and therapy with personalized online sessions. Book your free consultation today.",
  keywords: [
    "speech therapy",
    "logoped",
    "Russian speech therapy",
    "children speech therapy",
    "online speech therapy",
    "speech pathology",
    "speech therapist",
    "логопед",
    "логопед онлайн",
    "детский логопед",
    "North America",
    "online sessions",
    "speech development",
    "language therapy"
  ],
  authors: [{ name: "Anara" }],
  creator: "Anara",
  publisher: "Anara's Speech Therapy Services",
  metadataBase: new URL('https://anaraspeechtherapy.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ru_RU',
    url: 'https://anaraspeechtherapy.com',
    title: "Anara's Speech Therapy | Professional Online Logoped Services",
    description: "Professional online speech therapy services for Russian-speaking children in North America. Book your free consultation today.",
    siteName: "Anara's Speech Therapy",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Anara's Speech Therapy Services",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Anara's Speech Therapy | Professional Online Logoped Services",
    description: "Professional online speech therapy for Russian-speaking children in North America.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-sans antialiased">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
