import type { MetadataRoute } from "next";
import { absoluteUrl } from "./lib/seo";

const pages = [
  "/",
  "/developpeur-freelance-bretagne",
  "/creation-site-internet-sur-mesure-bretagne",
  "/developpement-logiciel-sur-mesure-bretagne",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return pages.map((path, index) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : 0.8,
  }));
}
