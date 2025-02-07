import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";

export const metadata: Metadata = {
  title: "IT Ads",
  description: "Ogłoszenia o pracę z branzy IT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
