import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import HeaderComponent from "../semantic-parts/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Website Portfolio",
  description: "Earl Lauriece S. Butlay Website Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderComponent />

        {children}
      </body>
    </html>
  );
}
