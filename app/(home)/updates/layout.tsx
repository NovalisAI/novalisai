import Container from "@/components/layout/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Updates - NovalisAI",
  description:
    "We regularly update the NovalisAI library to enhance your design experience and keep your projects running smoothly.",

  openGraph: {
    title: "License - NovalisAI",
    description:
      "We regularly update the NovalisAI library to enhance your design experience and keep your projects running smoothly.",
    url: "https://NovalisAI.com",
    siteName: "NovalisAI",
    images: [
      {
        url: "https://NovalisAI.com/assets/og-image-NovalisAI.jpg",
        width: 1200,
        height: 630,
        alt: "NovalisAI Icon Library",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "License - NovalisAI",
    description:
      "We regularly update the NovalisAI library to enhance your design experience and keep your projects running smoothly.",
    images: ["https://NovalisAI.com/assets/og-image-NovalisAI.jpg"],
  },
};

export default function UpdatesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Container type="extrinsic">{children}</Container>;
}
