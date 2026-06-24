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
      url: "https://www.socialspacebar.com/privacy-policy",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://www.socialspacebar.com/terms-conditions",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
