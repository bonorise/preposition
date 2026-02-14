import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/in-back-of",
        destination: "/en/p/in-back-of",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
