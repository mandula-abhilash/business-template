import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable SWC minification for better performance
  swcMinify: true,

  // Optimize images
  images: {
    domains: ["images.unsplash.com"],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  // Enable React strict mode
  reactStrictMode: true,

  // Enable compression
  compress: true,

  // Experimental optimizations
  experimental: {
    // Enable optimized package imports
    optimizePackageImports: ["lucide-react"],

    // Enable modern JavaScript features
    modern: true,

    // Enable granular chunks
    granularChunks: true,

    // Enable server components
    serverComponents: true,

    // Enable concurrent features
    concurrentFeatures: true,
  },

  // Optimize webpack configuration
  webpack: (config, { dev, isServer }) => {
    // Production optimizations
    if (!dev && !isServer) {
      // Optimize chunks
      config.optimization.splitChunks = {
        chunks: "all",
        minSize: 20000,
        maxSize: 244000,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      };

      // Enable terser minification
      config.optimization.minimize = true;
    }

    return config;
  },
};

export default withBundleAnalyzer(nextConfig);
