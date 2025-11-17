import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com"
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com"
      },
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com"
      },
      {
        protocol: "https",
        hostname: "cdn3.iconfinder.com"
      }
    ]
  }
};

export default nextConfig;
