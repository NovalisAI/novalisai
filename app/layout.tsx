import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";

import "@/styles/globals.css";
import { Suspense } from "react";

export const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "NovalisAI",
  description:
    "NovalisAI develops custom web solutions from high-quality websites to internal platforms, workflow systems, dashboards, and ERP-style tools built around your processes",
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
      { url: "/novalisai_logo_n.jfif", sizes: "32x32", type: "image/png" },
    ],
  },
  appleWebApp: {
    title: "NovalisAI",
  },
  openGraph: {
    title: "NovalisAI - Clean & Consistent Icons for Seamless UI",
    description:
      "NovalisAI develops custom web solutions from high-quality websites to internal platforms, workflow systems, dashboards, and ERP-style tools built around your processes",
    url: "https://NovalisAI.com",
    siteName: "NovalisAI",

    type: "website",
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body className={`antialiased ${beVietnamPro.className}`}>
        <Suspense>{children}</Suspense>
      </body>
    </html>
  );
}
