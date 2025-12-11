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
  title: "Faena São Paulo + MBRAS | Parceria Exclusiva",
  description: "O primeiro distrito Faena do Brasil. R$ 3 bilhões em VGV. Uma parceria para redefinir o luxo em São Paulo.",
  openGraph: {
    title: "Faena São Paulo + MBRAS | Parceria Exclusiva",
    description: "O primeiro distrito Faena do Brasil. R$ 3 bilhões em VGV.",
    url: "https://faena.mbras.com.br",
    siteName: "Faena São Paulo + MBRAS",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Faena São Paulo + MBRAS - Parceria Exclusiva",
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
