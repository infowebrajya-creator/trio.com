import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { return ["", "/cpa-firms", "/businesses", "/individuals", "/wealth", "/resources", "/about", "/contact"].map(path => ({ url: `https://trusttrio.com${path}`, lastModified: new Date(), changeFrequency: path ? "monthly" : "weekly", priority: path ? 0.7 : 1 })); }
