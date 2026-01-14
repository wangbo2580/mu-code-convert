import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Compression
  compress: true,

  // Strict mode
  reactStrictMode: true,

  // Production source maps disabled
  productionBrowserSourceMaps: false,

  // Redirects for short URLs
  async redirects() {
    return [
      {
        source: '/morse',
        destination: '/morse-code-translator',
        permanent: true,
      },
      {
        source: '/base64',
        destination: '/base64-encoder',
        permanent: true,
      },
      {
        source: '/binary',
        destination: '/binary-converter',
        permanent: true,
      },
      {
        source: '/hex',
        destination: '/hex-converter',
        permanent: true,
      },
      {
        source: '/url',
        destination: '/url-encoder',
        permanent: true,
      },
      {
        source: '/caesar',
        destination: '/caesar-cipher',
        permanent: true,
      },
      {
        source: '/html',
        destination: '/html-entities',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
