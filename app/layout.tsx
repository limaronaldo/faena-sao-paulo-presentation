import type { Metadata } from "next";
import { Tenor_Sans, Public_Sans, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500"],
});

const tenorSans = Tenor_Sans({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400"],
});

export const metadata: Metadata = {
  title: "Pinna 5109 — Jardim Paulista",
  description: "Pinna 5109 — Empreendimento exclusivo de 26 unidades na Av. Nove de Julho, São Paulo. Arquitetura por Studio MK27 - Marcio Kogan.",
  icons: {
    icon: "/icon-mbras.png",
    apple: "/icon-mbras.png",
  },
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
        className={`${publicSans.variable} ${tenorSans.variable} ${outfit.variable} ${jetbrains.variable} antialiased bg-dark text-cream`}
      >
        {children}
      </body>
    </html>
  );
}
