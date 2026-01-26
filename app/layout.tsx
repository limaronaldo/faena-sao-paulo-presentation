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
  title: "MBRAS | Referência no Mercado Imobiliário de Alto Padrão",
  description: "Fundada em 2010, a MBRAS é referência no mercado imobiliário de alto padrão em São Paulo. Consultoria especializada, experiências únicas e personalizadas.",
  openGraph: {
    title: "MBRAS | Referência no Mercado Imobiliário de Alto Padrão",
    description: "Fundada em 2010, a MBRAS é referência no mercado imobiliário de alto padrão em São Paulo. Consultoria especializada, experiências únicas e personalizadas.",
    url: "https://mbras.com.br",
    siteName: "MBRAS",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MBRAS - Imobiliária de Alto Padrão",
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
        className={`${playfair.variable} ${lato.variable} antialiased bg-cream-100 text-text-primary`}
      >
        {children}
      </body>
    </html>
  );
}
