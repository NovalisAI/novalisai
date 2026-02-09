import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://zappicon.com/",
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://zappicon.com/contact",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://zappicon.com/license",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://zappicon.com/updates",
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];
}
