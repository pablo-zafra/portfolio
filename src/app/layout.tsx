import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar, SmoothScroll } from "../components";
import { LoadingScreen } from "@/components/LoadingScreen/LoadingScreen";

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
    <html lang="es">
      <body
        className={`${inter.variable} bg-gray-dark-X font-Inter text-white antialiased grid-pattern overflow-x-hidden w-screen`}
      >
        <SmoothScroll>
          <NavBar />
          <LoadingScreen />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
