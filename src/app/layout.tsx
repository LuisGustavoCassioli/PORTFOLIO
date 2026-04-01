import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://luisgustavocassiolidev.com.br"),
  title: "Luis Gustavo Cassioli | Desenvolvedor Front-End — React & Next.js",
  description:
    "Portfólio de Luis Gustavo Cassioli, desenvolvedor Front-End especializado em React, Next.js e TypeScript. Criando interfaces de alto desempenho que geram resultados reais.",
  keywords: [
    "Luis Gustavo Cassioli",
    "Desenvolvedor Front-End",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "UI/UX",
    "Portfolio",
  ],
  authors: [{ name: "Luis Gustavo Cassioli", url: "https://luisgustavocassiolidev.com.br" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://luisgustavocassiolidev.com.br",
    siteName: "Luis Gustavo Cassioli | Dev Front-End",
    title: "Luis Gustavo Cassioli | Desenvolvedor Front-End — React & Next.js",
    description:
      "Criando interfaces de alto desempenho que geram resultados. Especialista em React, Next.js e TypeScript.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Luis Gustavo Cassioli — Desenvolvedor Front-End",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luis Gustavo Cassioli | Desenvolvedor Front-End",
    description:
      "Criando interfaces de alto desempenho que geram resultados. Especialista em React, Next.js e TypeScript.",
    images: ["/og-image.jpg"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
