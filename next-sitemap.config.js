/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://your-domain.com',
  generateRobotsTxt: false, // We've created a custom robots.txt
  exclude: ['/api/*', '/admin/*'],
  generateIndexSitemap: false,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 7000,
  transform: async (config, path) => {
    // Custom priority for specific paths
    const priorities = {
      '/': 1.0,
      '/projects': 0.8,
      '/blog': 0.8,
      '/contact': 0.7
    }
    
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] || config.priority,
      lastmod: new Date().toISOString()
    }
  }
} 