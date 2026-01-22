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
  title: "MBRAS Academy | Programa de Excelência em Tecnologia e Vendas",
  description: "Onde a expertise de mercado encontra a fronteira da tecnologia. Programa de excelência em tecnologia e vendas para o mercado de luxo.",
  openGraph: {
    title: "MBRAS Academy | Programa de Excelência em Tecnologia e Vendas",
    description: "Onde a expertise de mercado encontra a fronteira da tecnologia. Programa de excelência em tecnologia e vendas para o mercado de luxo.",
    url: "https://academy.mbras.com.br",
    siteName: "MBRAS Academy",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MBRAS Academy",
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
