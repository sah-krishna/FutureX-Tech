import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Suspense } from 'react'
import LoadingSpinner from './components/LoadingSpinner'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FutureX Tech - Imagination to Real Solutions",
  description: "Transform your ideas into reality with FutureX Tech. We specialize in design, development, digital marketing, AI solutions, and SEO.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Suspense fallback={<LoadingSpinner />}>
          <main className="pt-20 bg-black max-w-[1920px]">
            {children}
          </main>
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
