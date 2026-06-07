import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";
import { ToastContainer } from "@/components/ui/Toast";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "CazBrainGroup - Mobile App & Software Development Company",
    template: "%s | CazBrainGroup",
  },
  description: "CazBrainGroup is a leading mobile app development company offering web and mobile app development services, custom software solutions, and digital transformation.",
  keywords: ["mobile app development", "web development", "software development", "custom software", "MVP development", "AR/VR solutions"],
  openGraph: {
    title: "CazBrainGroup - Software Development Company",
    description: "Premium mobile app and web development services for all types of businesses.",
    url: "https://cazbraingroup-rose.vercel.app",
    siteName: "CazBrainGroup",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <ToastContainer />
        <Analytics />
      </body>
    </html>
  );
}
