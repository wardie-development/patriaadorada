import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "patriaadorada.com",
          },
        ],
        destination: "https://www.patriaadorada.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
