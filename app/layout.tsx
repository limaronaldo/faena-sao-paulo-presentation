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
  title: "MBRAS | The Reference in High-End Real Estate",
  description: "Founded in 2010, MBRAS is the reference in high-end real estate in São Paulo. Specialized consulting, unique and personalized experiences.",
  openGraph: {
    title: "MBRAS | The Reference in High-End Real Estate",
    description: "Founded in 2010, MBRAS is the reference in high-end real estate in São Paulo. Specialized consulting, unique and personalized experiences.",
    url: "https://mbras.com.br",
    siteName: "MBRAS",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MBRAS - High-End Real Estate",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${lato.variable} antialiased bg-cream-100 text-text-primary`}
      >
        {children}
      </body>
    </html>
  );
}
