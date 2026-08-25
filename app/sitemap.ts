import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.alisyafii.id'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog/monev-internal-pkm-batu-mulia`,
      lastModified: new Date('2026-08-25'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/program-pemberdayaan-pengrajin-batu-mulia-cempaka`,
      lastModified: new Date('2026-08-17'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/kegiatan-pkm-pengrajin-batu-mulia`,
      lastModified: new Date('2026-08-15'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}