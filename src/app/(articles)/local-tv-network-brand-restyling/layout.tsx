import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Local TV Network Brand Restyling",
  description: "Visual Design, UX/UI, Motion Graphics",
  icons: {
    icon: "media/pencil.svg",
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
