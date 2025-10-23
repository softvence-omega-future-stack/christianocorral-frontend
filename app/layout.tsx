// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/common/FloatingButtons";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "SmartShop",
  description: "Buy and sell iPhones, iPads, Macs, and Laptops",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="pt-16 bg-gray-50">
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <FloatingButtons />
        </Providers>
      </body>
    </html>
  );
}
