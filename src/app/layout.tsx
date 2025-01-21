import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Acton Bodyworks - Professional Auto Body Repairs in London",
  description: "Expert vehicle crash repairs and bodywork services with over 20 years of experience in London. Specializing in collision repair, paint services, and bodywork.",
  keywords: "auto body repair, car repair london, collision repair, paint services, bodywork, car maintenance, vehicle repair, auto repair shop london, acton bodyworks",
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
    title: 'Acton Bodyworks - Professional Auto Body Repairs in London',
    description: 'Expert vehicle crash repairs and bodywork services with over 20 years of experience in London. Specializing in collision repair, paint services, and bodywork.',
    url: 'https://actonbodywork.vercel.app',
    siteName: 'Acton Bodyworks',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/images/sitelogo.png',
        width: 350,
        height: 117,
        alt: 'Acton Bodyworks Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Acton Bodyworks - Professional Auto Body Repairs in London',
    description: 'Expert vehicle crash repairs and bodywork services with over 20 years of experience in London. Specializing in collision repair, paint services, and bodywork.',
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
        <link rel="icon" href="/images/sitelogo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/images/sitelogo.png" />
      </head>
      <body className={`${inter.className} bg-black`}>
        <Header />
        <main>
          {children}
        </main>
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
