import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://mohammadhunain83.wixsite.com/portfolio/sitemap.xml",
  };
}
