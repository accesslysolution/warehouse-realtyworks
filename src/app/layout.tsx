import type { Metadata } from "next";
import { Inter, Archivo } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactFormPopup from "@/components/sections/ContactForm";
import FloatingContact from "@/components/FloatingContact";
// Inter for clean, readable body text
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Archivo for heavy, high-impact industrial headings
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Warehouse Rentals Pune | Grade-A Industrial Spaces",
  description: "Secure, scalable warehouse spaces in Chakan, Talegaon, and Wagholi. High-load flooring, 24/7 security, and prime connectivity for logistics and manufacturing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${archivo.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        {/* Google Tag (gtag.js) - Google Ads */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=AW-CONVERSION_ID`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-CONVERSION_ID');
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary selection:text-white">
        {/* You can add your Navbar here later */}
        <Navbar />
        <ContactFormPopup />
        <main className="flex-grow">
          {children}
        </main>
        <FloatingContact />
        <Footer />
        {/* You can add your Footer here later */}
      </body>
    </html>
  );
}