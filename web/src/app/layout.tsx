import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "One Page Agency",
  description: "One-page agency template rebuilt with Next.js and TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Montserrat:300,300i,400,500,500i,600,700,800,900|Poppins:200,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900"
        />
        <link rel="stylesheet" href="/css/plugins-css.css" />
        <link rel="stylesheet" href="/css/typography.css" />
        <link rel="stylesheet" href="/css/shortcodes/shortcodes.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/demo-one-page/agency-02/css/agency-02.css" />
        <link rel="stylesheet" href="/css/responsive.css" />
        <link rel="stylesheet" href="/css/skins/skin-red.css" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.MAPS_API_KEY = "${process.env.NEXT_PUBLIC_MAPS_API_KEY || ''}";`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
