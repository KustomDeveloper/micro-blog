import type { Metadata } from "next";
import localFont from "next/font/local";
import { Asap } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const asap = Asap({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Micro Blog",
  description: "My mini blog.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={asap.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
