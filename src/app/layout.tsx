import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Plus_Jakarta_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: {
    default: "Darwin Dine | Top End Restaurant",
    template: "%s | Darwin Dine",
  },
  description: "Coastal-inspired modern Australian restaurant in Darwin, NT.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://darwin-dine.vercel.app"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Darwin Dine | Top End Restaurant",
    description: "Coastal-inspired modern Australian restaurant in Darwin, NT.",
    url: "/",
    siteName: "Darwin Dine",
    images: [
      {
        url: "/vercel.svg",
        width: 1200,
        height: 630,
        alt: "Darwin Dine",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Darwin Dine | Top End Restaurant",
    description: "Coastal-inspired modern Australian restaurant in Darwin, NT.",
    images: ["/vercel.svg"],
  },
};

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={plusJakarta.variable}>
      <body className="antialiased bg-black text-zinc-50">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
