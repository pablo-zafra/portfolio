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
  description: "Frontend developer, UI/UX designer, Motion Designer",
  icons: {
    icon: "img/pencil.svg",
  },
};

export const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html
      lang="en"
      className="max-h-100 overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-gray-dark-X [&::-webkit-scrollbar-thumb]:bg-gray [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-turquesa"
    >
      <body
        className={`${inter.variable} bg-gray-dark-X font-Inter text-white antialiased grid-pattern`}
      >
        <ScrollControll>
          <ScrollProvider>
            <CursorProvider>
              <CursorFollower />
              <LoadingScreen />
              <Header />
              {children}
              <FunDivider />
              <Footer />
            </CursorProvider>
          </ScrollProvider>
        </ScrollControll>
      </body>
    </html>
  );
};

export default RootLayout;
