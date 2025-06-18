import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  CursorFollower,
  Footer,
  FunDivider,
  Header,
  ScrollControll,
} from "../components";
import { LoadingScreen } from "../components/LoadingScreen/LoadingScreen";
import { CursorProvider, ScrollProvider } from "../context";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pablo Zafra",
  description: "Fron-tend developer, UI/UX designer, Motion Designer",
  icons: {
    icon: "media/favicon.png",
  },
  other: {
    google: "notranslate",
  },
  openGraph: {
    title: "Pablo Zafra",
    description: "Front-end developer, UI/UX designer, Motion Designer",
    url: "https://pablozafra.dev",
    siteName: "Pablo Zafra Portafolio",
    images: [
      {
        url: "https://www.pablozafra.dev/media/og-main-img.jpg",
        width: 1200,
        height: 630,
        alt: "Pablo Zafra - Front-end developer, UI/UX designer, Motion Designer",
      },
    ],
    locale: "en_EN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pablo Zafra",
    description: "Front-end developer, UI/UX designer, Motion Designer",
    images: ["https://www.pablozafra.dev/media/og-main-img.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      translate="no"
      className="notranslate max-h-100 overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-gray-dark-X [&::-webkit-scrollbar-thumb]:bg-gray [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-turquesa"
    >
      <body
        className={`${inter.variable} bg-gray-dark-X font-Inter text-white antialiased grid-pattern`}
      >
        <ScrollControll>
          <ScrollProvider>
            <CursorProvider>
              <LoadingScreen />
              <Header />
              <CursorFollower />
              {children}
              <FunDivider />
              <Footer />
            </CursorProvider>
          </ScrollProvider>
        </ScrollControll>
      </body>
    </html>
  );
}
