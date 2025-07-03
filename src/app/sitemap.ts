import { MetadataRoute } from 'next'

const SITE_URL = process.env.SITE_URL || 'https://your-domain.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Core pages with static routes
  const routes = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${SITE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // Add dynamic project pages
  const projects = [
    'enterprise-ai-dashboard',
    'ml-recommendation-system',
    'realtime-analytics-platform',
    'ai-chatbot-integration'
  ]

  const projectRoutes = projects.map((slug) => ({
    url: `${SITE_URL}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Add dynamic blog posts
  const blogPosts = [
    'building-scalable-nextjs-applications',
    'integrating-ai-into-web-apps',
    'from-software-developer-to-ai-ml'
  ]

  const blogRoutes = blogPosts.map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...routes, ...projectRoutes, ...blogRoutes]
} 