import type { Metadata } from "next";
import { titleFont } from "@/config/fonts";

import "./globals.css";


export const metadata = {
  metadataBase: new URL("https://firmacasas.com/"),
  alternates: {
    canonical: new URL("https://firmacasas.com/"),
  },
  referrer: 'origin-when-cross-origin',
  keywords: ['Firma casas', 'Firma propiedades', 'Alquiler', 'Casas', 'Anticretico'],
  publisher: 'Firma Propiedades',
  openGraph: {
    title: 'Firma Propiedades',
    description: 'La llave para tu futuro',
    url: "https://firmacasas.com/",
    siteName: 'A Todo Motor',
    images: [
      {
        url: "https://webmedia.firmacdn.com/domus/public/system/logo/logo.png",
        width: 800,
        height: 600,
      }
    ],
    locale: 'es_BO',
    type: 'website',
  },
  title: {
    template: '%s | Firma Propiedades',
    default: 'Firma Propiedades',
  },
  description: 'La llave para tu futuro',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className={titleFont.className}>{children}</body>
    </html>
  );
}
