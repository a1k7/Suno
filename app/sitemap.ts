import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
export default function sitemap(): MetadataRoute.Sitemap { return siteConfig.url ? ["/", "/privacy"].map((path) => ({ url: `${siteConfig.url}${path}`, lastModified: new Date() })) : []; }
