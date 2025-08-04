import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themes/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sangosho",
  description: "Real-time monitoring for underwater ecosystems",
  openGraph: {
    title: "Sangosho - AI for Protecting Underwater Ecosystems",
    description: "Advanced AI solutions for marine conservation and ecosystem monitoring",
    url: "https://sangosho.xyz",
    siteName: "Sangosho",
    images: [
      {
        url: "/og-image.jpg", // Make sure this file is in the public folder
        width: 1200,
        height: 603,
        alt: "Sangosho Ocean Conservation AI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sangosho - AI for Protecting Underwater Ecosystems",
    description: "Advanced AI solutions for marine conservation and ecosystem monitoring",
    images: ["/og-image.jpg"], // Same image for Twitter
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.className} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster position="bottom-center" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
