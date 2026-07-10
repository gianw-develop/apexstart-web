import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://apexstart.us"),
  title: "ApexStart — Tu LLC en EE.UU. desde LATAM",
  description:
    "Formamos tu LLC en Estados Unidos, abrimos tu cuenta bancaria en Mercury o Relay, y te damos la plataforma para operar. 100% online en español.",
  keywords: [
    "LLC",
    "empresa USA",
    "cuenta bancaria Mercury",
    "Relay",
    "ITIN",
    "contabilidad",
    "Stripe",
    "LATAM",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "ApexStart — Tu LLC en EE.UU. desde LATAM",
    description:
      "LLC + cuenta bancaria + plataforma de operación. Todo desde LATAM.",
    url: "https://apexstart.us",
    siteName: "ApexStart",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ApexStart — Tu LLC en EE.UU. desde LATAM",
    description:
      "Formamos tu LLC en EE.UU. y abrimos tu cuenta bancaria en 7 días.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F8F9FB] text-[#0F172A]">
        {children}
      </body>
    </html>
  );
}
