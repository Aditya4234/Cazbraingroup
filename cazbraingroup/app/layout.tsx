import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mobile App Development Company | CazBrainGroup",
  description: "CazBrainGroup is a leading mobile app development company offering web and mobile app development services.",
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
      </body>
    </html>
  );
}
