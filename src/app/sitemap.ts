import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ceezaa.com',
      lastModified: new Date('2025-10-25'),
      priority: 1,
    },
    {
      url: 'https://ceezaa.com/about',
      lastModified: new Date('2025-10-25'),
      priority: 0.8,
    },
    {
      url: 'https://ceezaa.com/travelers',
      lastModified: new Date('2025-10-25'),
      priority: 0.8,
    },
    {
      url: 'https://ceezaa.com/hostels',
      lastModified: new Date('2025-10-25'),
      priority: 0.8,
    },
    {
      url: 'https://ceezaa.com/experience-partners',
      lastModified: new Date('2025-10-25'),
      priority: 0.8,
    },
    {
      url: 'https://ceezaa.com/contact',
      lastModified: new Date('2025-10-25'),
      priority: 0.7,
    },
    {
      url: 'https://ceezaa.com/faq',
      lastModified: new Date('2025-10-25'),
      priority: 0.6,
    },
    {
      url: 'https://ceezaa.com/privacy',
      lastModified: new Date('2025-10-25'),
      priority: 0.3,
    },
    {
      url: 'https://ceezaa.com/terms',
      lastModified: new Date('2025-10-25'),
      priority: 0.3,
    },
    {
      url: 'https://ceezaa.com/cookies',
      lastModified: new Date('2025-10-25'),
      priority: 0.3,
    },
  ]
}
