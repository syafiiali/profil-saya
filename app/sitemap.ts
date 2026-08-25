import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://alisyafii.id'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog/monev-internal-pkm-batu-mulia`,
      lastModified: new Date('2026-08-25T00:00:00.000Z'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/program-pemberdayaan-pengrajin-batu-mulia-cempaka`,
      lastModified: new Date('2026-08-17T00:00:00.000Z'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/kegiatan-pkm-pengrajin-batu-mulia`,
      lastModified: new Date('2026-08-15T00:00:00.000Z'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}