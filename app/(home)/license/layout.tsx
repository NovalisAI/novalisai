import Container from '@/components/layout/Container'
import { ReactNode } from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "License - Zappicon",
  description: "This license outlines your rights and limitations for using the Zappicon library, including the free version.",

  openGraph: {
    title: "License - Zappicon",
    description: "This license outlines your rights and limitations for using the Zappicon library, including the free version.",
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
    description: "This license outlines your rights and limitations for using the Zappicon library, including the free version.",
    images: ["https://zappicon.com/assets/og-image-Zappicon.jpg"],
  },
};

export default function TermsOfUseLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <Container type='extrinsic'>
    {children}
  </Container>
}
