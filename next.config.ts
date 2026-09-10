import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/shop/daily-synergy-multi",
        destination: "/shop/daily-senergy-multi",
        permanent: true,
      },
      {
        source: "/synergywithjen",
        destination: "/",
        permanent: true,
      },
      {
        source: "/synergy-with-jen",
        destination: "/",
        permanent: true,
      },
      {
        source: "/synergy",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
