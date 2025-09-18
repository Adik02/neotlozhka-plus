import type { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://example.kg/', lastModified: new Date() },
    { url: 'https://example.kg/services', lastModified: new Date() },
    { url: 'https://example.kg/contacts', lastModified: new Date() }
  ]
}
