import type { MetadataRoute } from "next";
import { projects } from "@/lib/content";

const SITE_URL = "https://mohammadhunain83.wixsite.com/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectEntries = projects.map((project) => ({
    url: `${SITE_URL}/work/${project.slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: SITE_URL, lastModified: new Date() },
    ...projectEntries,
  ];
}
