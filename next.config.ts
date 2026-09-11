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
        source: "/shop/daily-senergy-multi",
        destination: "/shop/daily-synergy-multi",
        permanent: true,
      },
      {
        source: "/senergywithjen",
        destination: "/",
        permanent: true,
      },
      {
        source: "/senergy-with-jen",
        destination: "/",
        permanent: true,
      },
      {
        source: "/senergy",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
