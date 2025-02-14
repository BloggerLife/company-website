import { Footer, Header } from "@/components";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
const myFont = localFont({
  src: "../public/HousttelySignature-GOonZ.ttf",
  variable: "--font-house",
});

export const metadata: Metadata = {
  title: "Sahara Leaf",
  description: "Tobacco Merchant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body data-barba="wrapper" className="">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
