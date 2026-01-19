import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-sans",
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "W Residences São Paulo",
  description: "W Residences São Paulo.",
  openGraph: {
    title: "W Residences São Paulo",
    description: "W Residences São Paulo.",
    url: "https://wresidences.mbras.com.br",
    siteName: "W Residences São Paulo",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "W Residences São Paulo",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${playfair.variable} ${lato.variable} antialiased bg-dark-900 text-cream-100`}
      >
        {children}
      </body>
    </html>
  );
}
