import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "../components";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pablo Zafra",
  description: "Frontend developer, UI/UX designer, Motion Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} bg-gray-dark-X font-Inter text-white antialiased grid-pattern`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
