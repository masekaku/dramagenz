import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DramaChina Free",
  description: "Nonton Drama China Gratis Tanpa Iklan Mengganggu",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
