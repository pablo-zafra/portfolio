import { NavBar } from "../components";
import type { Metadata } from "next";

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
    <html lang="en">
      <body className="bg-dark">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
