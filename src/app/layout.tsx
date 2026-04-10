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
  title: "Luis Gustavo Cassioli | Desenvolvedor de Software — Visão de Produto & UI",
  description:
    "Engenheiro de software focado em performance, design de autor e produtos digitais de alto impacto. Especialista em ecossistemas React.",
  keywords: [
    "Luis Gustavo Cassioli",
    "Desenvolvedor de Software",
    "Engenharia de Software",
    "React",
    "Next.js",
    "TypeScript",
    "UI/UX",
    "Portfolio",
  ],
  authors: [{ name: "Luis Gustavo Cassioli", url: "https://luisgustavocassiolidev.com.br" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://luisgustavocassiolidev.com.br",
    siteName: "Luis Gustavo Cassioli | Software Engineer",
    title: "Luis Gustavo Cassioli | Desenvolvedor de Software — React & Next.js",
    description:
      "Construindo aplicações robustas com foco em valor de negócio e rigor técnico.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Luis Gustavo Cassioli — Desenvolvedor de Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luis Gustavo Cassioli | Desenvolvedor de Software",
    description:
      "Construindo aplicações robustas com foco em valor de negócio e rigor técnico.",
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
