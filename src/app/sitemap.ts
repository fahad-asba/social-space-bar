import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: "https://www.socialspacebar.com/",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://www.socialspacebar.com/thank-you",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];
}
