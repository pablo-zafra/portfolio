import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Local TV Network Brand Restyling",
  description: "Visual Design, UX/UI, Motion Graphics",
  openGraph: {
    title: "Local TV Network Brand Restyling",
    description: "Visual Design, UX/UI, Motion Graphics",
    images: [
      {
        url: "https://www.pablozafra.dev/media/work/local-tv-network-brand-restyling/local-tv-network-brand-restyling.jpg",
      },
    ],
    locale: "en_EN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Local TV Network Brand Restyling",
    description: "Visual Design, UX/UI, Motion Graphics",
    images: [
      "https://www.pablozafra.dev/media/work/local-tv-network-brand-restyling/local-tv-network-brand-restyling.jpg",
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
