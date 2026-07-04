import { MetadataRoute } from 'next';
import { products } from '../data/products';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.BASE_URL;

  // 1. Safety check: Protects your build and satisfies TypeScript
  if (!baseUrl) {
    throw new Error('BASE_URL environment variable is missing. Please add it to your .env file.');
  }

  // 2. Clean up any trailing slashes just in case
  const cleanBaseUrl = baseUrl.replace(/\/$/, '');

  return [
    { url: cleanBaseUrl, lastModified: new Date() },
    { url: `${cleanBaseUrl}/about`, lastModified: new Date() },
    ...products.map(p => ({
      url: `${cleanBaseUrl}/${p.slug.startsWith('/') ? p.slug : `/${p.slug}`}`,
      lastModified: new Date(),
    })),
  ];
}
