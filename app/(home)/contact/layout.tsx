import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Novalis AI",
  description: "Have questions, feedback, or need support? We're here to help.",

  openGraph: {
    title: "Contact Us - Novalis AI",
    description:
      "Have questions, feedback, or need support? We're here to help.",
    url: "https://novalisai.com",
    siteName: "Novalis AI",

    type: "website",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
