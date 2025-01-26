import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Header from "@/components/Header";
import Script from "next/script";
import SocialShare from "@/components/SocialShare";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Acton Bodyworks - Professional Car & Auto Body Repair in London",
  description: "Expert car accident repair services in Acton, London. Specializing in car body repair, dent removal, vehicle collision repair, and professional car respray. Over 20 years of experience in auto body repairs.",
  keywords: "London car repair, Acton car repair, Accident repair in London, Car body repair in Acton, Auto body repair in London, Acton body repair services, London auto body repair, Car repair near Acton, Accident car repair London, Car dent repair in Acton, Vehicle body repair London, Auto repair Acton, Acton accident repair services, London crash repair, Car scratch repair London, Acton vehicle repair shop, Car panel repair in London, London vehicle bodywork, Auto body services in Acton, Car repair experts in London, Affordable car repair Acton, Car respray in Acton, Professional body repair London, Acton auto body shop, London collision repair, Car frame repair London, London bumper repair, Acton vehicle collision repair, Car paint repair in London",
  authors: [{ name: "Acton Bodyworks" }],
  creator: "Acton Bodyworks",
  publisher: "Acton Bodyworks",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  metadataBase: new URL('https://actonbodywork.vercel.app'),
  alternates: {
    canonical: '/',
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
  openGraph: {
    title: 'Acton Bodyworks - Leading Car Body Repair Shop in London',
    description: 'Premier auto body repair services in Acton, London. Expert car accident repairs, professional vehicle bodywork, collision repair, and car respray services. Trusted by London drivers for over 20 years.',
    url: 'https://actonbodywork.vercel.app',
    siteName: 'Acton Bodyworks',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/images/sitelogo.png',
        width: 350,
        height: 117,
        alt: 'Acton Bodyworks - Professional Car Body Repair Shop in London',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Acton Bodyworks - Expert Car Body Repairs in London',
    description: 'Professional auto body repair services in Acton. Specializing in accident repairs, car dent removal, vehicle collision repair, and expert car respray services.',
    images: ['/images/sitelogo.png'],
    creator: '@actonbodyworks',
    site: '@actonbodyworks',
  },
  verification: {
    google: 'add-your-google-site-verification-here',
  },
  category: 'Automotive',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/images/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/images/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#000000" />
        
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepairShop",
              "name": "Acton Bodyworks",
              "image": "https://actonbodywork.vercel.app/images/sitelogo.png",
              "description": "Expert car and vehicle repair services in Acton, London. Specializing in accident repairs, car body work, collision repair, dent removal, and professional car respray services.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "219 Horn Ln",
                "addressLocality": "London",
                "postalCode": "W3 9ED",
                "addressCountry": "GB"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "51.5151130",
                "longitude": "-0.2690847"
              },
              "url": "https://actonbodywork.vercel.app",
              "telephone": "07476753022",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "09:00",
                  "closes": "18:00"
                }
              ],
              "priceRange": "££",
              "areaServed": ["Acton", "London", "West London"],
              "serviceType": [
                "Car Body Repair",
                "Accident Repair",
                "Vehicle Collision Repair",
                "Car Dent Repair",
                "Auto Paint Services",
                "Car Respray",
                "Bumper Repair",
                "Panel Repair"
              ],
              "sameAs": [
                "https://www.instagram.com/actonbodyworks/",
                "https://wa.me/447476753022"
              ]
            })
          }}
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'YOUR-GA-ID');
          `}
        </Script>
      </head>
      <body className={`${inter.className} bg-black`}>
        <Header />
        <main>
          {children}
        </main>
        <SocialShare />
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
