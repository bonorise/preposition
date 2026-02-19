import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/in-back-of",
        destination: "/en/p/in-back-of",
        permanent: true,
      },
      {
        source: "/in-front-of",
        destination: "/en/p/in-front-of",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
