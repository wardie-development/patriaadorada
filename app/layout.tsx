import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.patriaadorada.com"),
  title: {
    default: "Pátria Adorada — Faça o Brasil bom de uma vez por todas",
    template: "%s | Pátria Adorada",
  },
  description:
    "Site cívico brasileiro com dicas práticas para finanças pessoais, cidadania e política — sem extremos, com foco no que importa para o Brasil.",
  keywords: [
    "Pátria Adorada",
    "Patria Adorada",
    "Brasil",
    "cidadania",
    "finanças pessoais",
    "política",
    "educação",
  ],
  authors: [{ name: "Pátria Adorada", url: "https://www.patriaadorada.com" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.patriaadorada.com/",
    title: "Pátria Adorada — Faça o Brasil bom de uma vez por todas",
    description:
      "Dicas simples de finanças, cidadania e política para um Brasil melhor.",
    siteName: "Pátria Adorada",
    images: [
      {
        url: "/bandeira-do-brasil.webp",
        width: 1200,
        height: 800,
        alt: "Bandeira do Brasil tremulando, símbolo da República Federativa do Brasil",
      },
    ],
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pátria Adorada — Faça o Brasil bom de uma vez por todas",
    description:
      "Dicas simples de finanças, cidadania e política para um Brasil melhor.",
    images: [
      {
        url: "/bandeira-do-brasil.webp",
        alt: "Bandeira do Brasil do Brasil",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/brasaooficialcolorido.png" }],
  },
  manifest: "/site.webmanifest",
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "#0a0a0a" }, { media: "(prefers-color-scheme: dark)", color: "#000000" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Pátria Adorada',
              url: 'https://www.patriaadorada.com/',
              inLanguage: 'pt-BR',
              description:
                'Site cívico brasileiro com dicas práticas para finanças pessoais, cidadania e política — sem extremos, com foco no que importa para o Brasil.',
              publisher: {
                '@type': 'Organization',
                name: 'Pátria Adorada',
                url: 'https://www.patriaadorada.com/',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://www.patriaadorada.com/brasaooficialcolorido.png',
                },
              },
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://www.google.com/search?q=site:patriaadorada.com+{search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
