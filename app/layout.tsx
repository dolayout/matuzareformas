import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://matuzareformas.com.br"),
  title: "Matuza Reformas | Santos e Baixada Santista",
  description:
    "Reformas residenciais com execução precisa, acabamento cuidadoso e comunicação direta em Santos e Baixada Santista.",
  icons: {
    icon: "/assets/matuza-logo.png",
    shortcut: "/assets/matuza-logo.png",
  },
  openGraph: {
    title: "Matuza Reformas",
    description:
      "Espaços que mudam. Execução que permanece.",
    url: "https://matuzareformas.com.br",
    siteName: "Matuza Reformas",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1734,
        height: 907,
        alt: "Matuza Reformas - Espaços que mudam. Execução que permanece.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matuza Reformas",
    description: "Espaços que mudam. Execução que permanece.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="theme-color" content="#061525" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Instrument+Sans:wdth,wght@75..100,400..700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
