import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://mediremind.flowentech.com"),
  title: {
    default: "MediRemind - Your Smart Medicine Reminder App",
    template: "%s | MediRemind"
  },
  description: "Never miss your medication again! MediRemind is your intelligent medicine reminder app that helps you stay on track with your health routine. Set reminders, track history, and manage your medications easily.",
  keywords: ["medicine reminder", "medication tracker", "health app", "pill reminder", "prescription reminder", "medication management", "health reminder app"],
  authors: [{ name: "MediRemind Team" }],
  creator: "MediRemind",
  publisher: "MediRemind",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mediremind.flowentech.com",
    siteName: "MediRemind",
    title: "MediRemind - Your Smart Medicine Reminder App",
    description: "Never miss your medication again! MediRemind helps you stay on track with your health routine.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MediRemind - Smart Medicine Reminder App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MediRemind - Your Smart Medicine Reminder App",
    description: "Never miss your medication again! MediRemind helps you stay on track with your health routine.",
    images: ["/og-image.png"],
    creator: "@mediremind",
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://mediremind.flowentech.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className={inter.className}>
        <StructuredData />
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
