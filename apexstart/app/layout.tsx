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
  title: "ApexStart — Tu empresa en EE.UU. desde LATAM",
  description: "Formamos tu LLC en Estados Unidos, abrimos tu cuenta bancaria en Mercury o Relay, creamos tu web, configuramos Stripe, tramitamos tu ITIN y manejamos tu contabilidad. 100% online desde cualquier país de LATAM.",
  keywords: "LLC, empresa USA, cuenta bancaria Mercury, Relay, ITIN, contabilidad, Stripe, LATAM",
  openGraph: {
    title: "ApexStart — Tu empresa en EE.UU. desde LATAM",
    description: "LLC + cuenta bancaria + web + Stripe + ITIN + contabilidad. Todo desde LATAM.",
    url: "https://apexstart.us",
    siteName: "ApexStart",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" style={{background:'#FFFFFF', color:'#07111F'}}>{children}</body>
    </html>
  );
}
