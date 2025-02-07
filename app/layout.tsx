import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
        <main className="pt-20 bg-black max-w-[1920px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
