/* eslint-disable @next/next/no-css-tags, @next/next/no-page-custom-font */
import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";

const siteName = "VexiaRH";
const title = "VexiaRH | Sistema Operacional de Engajamento";
const description = "Reconhecimento, recompensas, carreira e operações de pessoas em um só lugar.";
const url = process.env.NEXT_PUBLIC_SITE_URL || "https://www.vexiarh.com.br";

export const metadata: Metadata = {
  title,
  description,
  applicationName: siteName,
  metadataBase: new URL(url),
  keywords: [
    "engajamento",
    "reconhecimento",
    "recursos humanos",
    "vexiarh",
    "people analytics",
    "trilhas de carreira",
    "academy",
    "férias e licenças",
    "intranet",
    "pontos e recompensas",
  ],
  openGraph: {
    title,
    description,
    url,
    siteName,
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  alternates: {
    canonical: url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Montserrat:300,300i,400,500,500i,600,700,800,900|Poppins:200,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900&display=swap"
        />
        <link rel="stylesheet" href="/css/plugins-css.css" />
        <link rel="stylesheet" href="/css/typography.css" />
        <link rel="stylesheet" href="/css/shortcodes/shortcodes.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/demo-one-page/agency-02/css/agency-02.css" />
        <link rel="stylesheet" href="/css/responsive.css" />
        <link rel="stylesheet" href="/css/skins/skin-red.css" />
      </head>
      <body>
        {children}
        <a
          href="https://wa.me/5511985266582?text=Quero%20saber%20mais%20sobre%20a%20VexiaRH"
          className="whatsapp-btn"
          aria-label="Falar com VexiaRH no WhatsApp"
          target="_blank"
          rel="noreferrer"
        >
          <Image src="/demo-one-page/agency-02/images/whatsup/01.jpg" alt="WhatsApp" width={48} height={48} />
        </a>
      </body>
    </html>
  );
}
