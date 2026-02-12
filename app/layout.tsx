import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elena Wang",
  description: "I build AI-powered tools and translate them into growth.",
  metadataBase: new URL("https://elena-wang.vercel.app"),
  openGraph: {
    title: "Elena Wang",
    description: "I build AI-powered tools and translate them into growth.",
    url: "https://elena-wang.vercel.app",
    siteName: "Elena Wang",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Elena Wang — AI tools + growth",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elena Wang",
    description: "I build AI-powered tools and translate them into growth.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
