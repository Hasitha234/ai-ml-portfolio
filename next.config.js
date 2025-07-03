/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove static export for now to fix build issues
  // output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['localhost'],
  },
  swcMinify: true,
  poweredByHeader: false,
  reactStrictMode: true,
  
  // Fix build trace issues - Updated for Vercel deployment
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
    outputFileTracingIncludes: {
      '/': ['./public/**/*'],
    },
    // Additional experimental features to prevent build trace errors
    outputFileTracingExcludes: {
      '*': ['node_modules/@swc/core-linux-x64-gnu', 'node_modules/@swc/core-linux-x64-musl', 'node_modules/@esbuild/linux-x64'],
    },
  },
  
  // Webpack configuration to handle potential circular dependencies
  webpack: (config, { isServer }) => {
    // Prevent circular dependency issues
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        ...config.optimization.splitChunks,
        cacheGroups: {
          ...config.optimization.splitChunks?.cacheGroups,
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      },
    };
    
    // Additional optimization to prevent build trace issues
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };
    
    return config;
  },
}

module.exports = nextConfig 