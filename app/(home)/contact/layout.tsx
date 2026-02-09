import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Contact Us - Zappicon",
  description: "Have questions, feedback, or need support? We're here to help.",

  openGraph: {
    title: "Contact Us - Zappicon",
    description: "Have questions, feedback, or need support? We're here to help.",
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
    title: "Contact Us - Zappicon",
    description: "Have questions, feedback, or need support? We're here to help.",
    images: ["https://zappicon.com/assets/og-image-Zappicon.jpg"],
  },

};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className='max-w-150 px-8 mx-auto'>{children}</div>;
}
