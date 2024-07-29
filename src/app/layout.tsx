import type { Metadata } from "next";
import { Inter } from "next/font/google"
import LocalFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "masaki.kitsugi.dev",
    template: "%s | masaki_kitsugi.dev",
  },
  description: "founder of palpa, Inc.",
  openGraph: {
    title: "masaki.kitsugi.com",
    description: "founder of palpa, Inc.",
    url: "https://masaki.kitsugi.dev",
    siteName: "masaki.kitsugi.dev",
    images: [
      {
        url: "https://masaki.kitsugi.dev/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Chronark",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};

const calSans = LocalFont({
  src: "../../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <body 
        className={`bg-black ${
          process.env.NODE_ENV === "development" ? "debug-screens" : undefined
        }`}
      >{children}</body>
    </html>
  );
}
