import Container from "@/components/layout/Container";
import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "License - NovalisAI",
  description:
    "This license outlines your rights and limitations for using the NovalisAI library, including the free version.",

  openGraph: {
    title: "License - NovalisAI",
    description:
      "This license outlines your rights and limitations for using the NovalisAI library, including the free version.",
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
      "This license outlines your rights and limitations for using the NovalisAI library, including the free version.",
    images: ["https://NovalisAI.com/assets/og-image-NovalisAI.jpg"],
  },
};

export default function TermsOfUseLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <Container type="extrinsic">{children}</Container>;
}
