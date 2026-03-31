import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/daily-bias",
    "/market-structure",
    "/key-levels",
    "/naked-chart",
    "/scenarios",
    "/journal",
    "/chart-lab",
    "/studio",
  ];

  return staticRoutes.map((path) => ({
    url: `${siteConfig.url}${path}`,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
}
