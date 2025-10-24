import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ceezaa - Your Digital Passport to Hostel Adventures",
  description: "Every hostel stay should feel personal. With Ceezaa, your stay adapts to you — your vibe, your tastes, and your rhythm. Feel at home wherever you are through curated dining, local moments, and experiences that make every stay uniquely yours.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
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
        <Header />
              {children}
              <Footer />
      </body>
    </html>
  );
}
