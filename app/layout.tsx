import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import HeaderNavBar from "../semantic-parts/Header-NavBar";

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
        <HeaderNavBar />

        {children}
      </body>
    </html>
  );
}
