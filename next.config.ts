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
      {
        protocol: "https",
        hostname: "usprod.synergyworldwide.com",
      },
      {
        protocol: "https",
        hostname: "www.synergyworldwide.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/shop/daily-senergy-multi",
        destination: "/shop/proargi-9",
        permanent: true,
      },
      {
        source: "/shop/daily-synergy-multi",
        destination: "/shop/vitalift",
        permanent: true,
      },
      {
        source: "/shop/d3-k2-sunshine",
        destination: "/shop/vitamin-d3",
        permanent: true,
      },
      {
        source: "/shop/magnesium-calm",
        destination: "/shop/melatonin-plus",
        permanent: true,
      },
      {
        source: "/shop/omega-3-marine",
        destination: "/shop/omega-3",
        permanent: true,
      },
      {
        source: "/shop/womens-energy-complex",
        destination: "/shop/e9",
        permanent: true,
      },
      {
        source: "/shop/gut-harmony-probiotic",
        destination: "/shop/biome-shake",
        permanent: true,
      },
      {
        source: "/shop/immune-c-zinc",
        destination: "/shop/vitalift",
        permanent: true,
      },
      {
        source: "/shop/beauty-collagen",
        destination: "/shop/trugreen",
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
