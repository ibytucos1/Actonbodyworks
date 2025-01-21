import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Acton Bodyworks - Professional Auto Body Repairs in London",
  description: "Expert vehicle crash repairs and bodywork services with over 20 years of experience in London.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
