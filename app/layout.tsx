import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";

import "@/styles/globals.css";
import { Suspense } from "react";
import Scripts from "@/components/Scripts";

export const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "NovalisAI - Clean & Consistent Icons for Seamless UI",
  description:
    "NovalisAI is a free & premium UI icons library, crafted to simplify workflows for designers, developers and creators",
  keywords: [
    "NovalisAI",
    "ui icons",
    "ux icons",
    "user interface icons",
    "interface design icons",
    "mobile app icons",
    "website icons",
    "vector icon set",
    "flat icons",
    "line icons",
    "outline icons",
    "filled icons",
    "duotone icons",
    "pixel perfect icons",
    "scalable icons",
    "minimal icons",
    "design toolkit",
    "product design icons",
    "dashboard icons",
    "wireframe icons",
    "creative icon pack",
    "icon resources",
    "ui kit icons",
    "modern ui icons",
    "free icons",
    "svg icons",
    "png icons",
    "figma icons",
    "iconjar",
    "IOS icons",
    "design resources",
    "ui components",
    "icon bundle",
    "design tools",
  ],
  icons: {
    icon: [
      { url: "/assets/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/assets/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/assets/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/assets/favicon.ico",
    apple: "/assets/apple-touch-icon.png",
  },
  appleWebApp: {
    title: "NovalisAI",
  },
  manifest: "/assets/site.webmanifest",

  openGraph: {
    title: "NovalisAI - Clean & Consistent Icons for Seamless UI",
    description:
      "NovalisAI is a free & premium UI icons library, crafted to simplify workflows for designers, developers and creators",
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
    title: "NovalisAI - Clean & Consistent Icons for Seamless UI",
    description:
      "NovalisAI is a free & premium UI icons library, crafted to simplify workflows for designers, developers and creators",
    images: ["https://NovalisAI.com/assets/og-image-NovalisAI.jpg"],
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <head>
        <Scripts />
      </head>

      <body className={`antialiased ${beVietnamPro.className}`}>
        <Suspense>{children}</Suspense>
      </body>
    </html>
  );
}
