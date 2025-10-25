import type { Metadata } from "next";
import Script from "next/script";
import { Manrope } from "next/font/google";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from '@vercel/speed-insights/next';
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ceezaa - Your Passport to a Personalized World of Hostel Adventures",
  description: "Every hostel stay should feel personal. With Ceezaa, your stay adapts to you — your vibe, your tastes, and your rhythm. Feel at home wherever you are through curated dining, local moments, and experiences that make every stay uniquely yours.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
  },

  openGraph: {
    title: "Ceezaa - Your Passport to a Personalized World of Hostel Adventures",
    description:
      "Every hostel stay should feel personal. With Ceezaa, your stay adapts to you — your vibe, your tastes, and your rhythm.",
    url: "https://ceezaa.com",
    siteName: "Ceezaa",
    images: [
      {
        url: "https://bl974d7s47.ufs.sh/f/eiqM2oDvPqg1gwu44a0X6UpLkW4Zv2BarPy9lFbSdHIsonzi", // 👈 UploadThing image URL
        width: 1200,
        height: 630,
        alt: "Ceezaa hero preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ceezaa - Your Passport to a Personalized World of Hostel Adventures",
    description:
      "Every hostel stay should feel personal. With Ceezaa, your stay adapts to you — your vibe, your tastes, and your rhythm.",
    images: ["https://bl974d7s47.ufs.sh/f/eiqM2oDvPqg1gwu44a0X6UpLkW4Zv2BarPy9lFbSdHIsonzi"], // 👈 same UploadThing URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        {/* Termly Cookie Consent - Loads after page is interactive */}
        <Script src="https://app.termly.io/resource-blocker/c67357f1-2cf8-484d-82ec-4a6ea4990a8f?autoBlock=on"/>
        <Header />
          {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
