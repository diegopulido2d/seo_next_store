import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SEO Next Store",
    template: "%s | SEO Next Store",
  },
  description:
    "SEO Next Store description for better search engine visibility and social sharing.",
  openGraph: {
    title: "SEO Next Store",
    description:
      "SEO Next Store description for better search engine visibility and social sharing.",
    siteName: "SEO Next Store",
    locale: "es",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Next Store",
    description:
      "SEO Next Store description for better search engine visibility and social sharing",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-screen antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
