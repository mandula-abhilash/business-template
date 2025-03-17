import bundleAnalyzer from "@next/bundle-analyzer";
import withPWA from "next-pwa";
import TerserPlugin from "terser-webpack-plugin";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable PWA
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },

  // Enable image optimization
  images: {
    domains: ["images.unsplash.com"], // Add this line for compatibility
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Enable React strict mode
  reactStrictMode: true,

  // Enable compression
  compress: true,

  // Add cache headers for better performance
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
      {
        source: "/api/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, max-age=0",
          },
        ],
      },
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/fonts/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Webpack optimizations
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
        automaticNameDelimiter: "~",
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
          styles: {
            name: "styles",
            test: /\.(css|scss|sass)$/,
            chunks: "all",
            enforce: true,
          },
          commons: {
            name: "commons",
            chunks: "all",
            minChunks: 2,
            priority: -5,
          },
        },
      };

      // Enable terser minification with optimal settings
      config.optimization.minimize = true;

      // Disable console statements in production
      config.optimization.minimizer.forEach((minimizer) => {
        if (minimizer.constructor.name === "TerserPlugin") {
          minimizer.options.terserOptions = {
            ...minimizer.options.terserOptions,
            compress: {
              ...minimizer.options.terserOptions.compress,
              drop_console: true,
            },
          };
        }
      });
    }

    return config;
  },

  // Experimental features
  experimental: {
    // Enable optimized package imports
    optimizePackageImports: [
      "lucide-react",
      "react-icons",
      "date-fns",
      "framer-motion",
    ],

    // Enable server actions with proper configuration
    serverActions: {
      bodySizeLimit: "2mb",
      allowedOrigins: ["localhost:3000"],
    },

    // Enable improved tree-shaking
    optimizeCss: true,

    // Enable improved code splitting
    optimizeServerReact: true,
  },
};

export default withBundleAnalyzer(nextConfig);
