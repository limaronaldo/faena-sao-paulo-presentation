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
  title: "Hype Gabriel — Jardim América",
  description: "Hype Gabriel — Condomínio exclusivo de 3 casas no Jardim América, São Paulo.",
  openGraph: {
    title: "Hype Gabriel — Jardim América",
    description: "Condomínio exclusivo de 3 casas de alto padrão no Jardim América.",
    url: "https://hypegabriel.mbras.com.br",
    siteName: "Hype Gabriel",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hype Gabriel — Jardim América",
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
        className={`${playfair.variable} ${lato.variable} antialiased bg-light-50 text-dark-900`}
      >
        {children}
      </body>
    </html>
  );
}
