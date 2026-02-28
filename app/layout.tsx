import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Pinna 5109 — Jardim Paulista",
  description: "Pinna 5109 — Empreendimento exclusivo de 26 unidades na Av. Nove de Julho, São Paulo. Arquitetura por Studio MK27 - Marcio Kogan.",
  openGraph: {
    title: "Pinna 5109 — Jardim Paulista",
    description: "Empreendimento exclusivo de 26 unidades na Av. Nove de Julho. Arquitetura por Marcio Kogan.",
    url: "https://pinna5109.mbras.com.br",
    siteName: "Pinna 5109",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pinna 5109 — Jardim Paulista",
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
        className={`${inter.variable} ${cormorant.variable} antialiased bg-cream-50 text-charcoal-900`}
      >
        {children}
      </body>
    </html>
  );
}
