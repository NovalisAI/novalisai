import Container from "@/components/layout/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Updates - Zappicon",
  description:
    "We regularly update the Zappicon library to enhance your design experience and keep your projects running smoothly.",

  openGraph: {
    title: "License - Zappicon",
    description:
      "We regularly update the Zappicon library to enhance your design experience and keep your projects running smoothly.",
    url: "https://zappicon.com",
    siteName: "Zappicon",
    images: [
      {
        url: "https://zappicon.com/assets/og-image-Zappicon.jpg",
        width: 1200,
        height: 630,
        alt: "Zappicon Icon Library",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "License - Zappicon",
    description:
      "We regularly update the Zappicon library to enhance your design experience and keep your projects running smoothly.",
    images: ["https://zappicon.com/assets/og-image-Zappicon.jpg"],
  },
};

export default function UpdatesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Container type="extrinsic">{children}</Container>;
}
