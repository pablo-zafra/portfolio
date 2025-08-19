import { Metadata } from "next";

export const metadata: Metadata = {
  title: "When text comes alive on scroll",
  description:
    "React Component, NPM Package, Animation, Micro-interactions, Front end",
  openGraph: {
    title: "When text comes alive on scroll",
    description:
      "React Component, NPM Package, Animation, Micro-interactions, Front end",
    images: [
      {
        url: "https://www.pablozafra.dev/media/work/when-text-comes-alive-on-scroll/og-main-img.gif",
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
    title: "When text comes alive on scroll",
    description:
      "React Component, NPM Package, Animation, Micro-interactions, Front end",
    images: [
      "https://www.pablozafra.dev/media/work/when-text-comes-alive-on-scroll/og-main-img.gif",
    ],
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
