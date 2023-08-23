import { Urbanist } from "next/font/google";

import type { Metadata } from "next";

import "./globals.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ModalProvider from "@/providers/modalProvider";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
