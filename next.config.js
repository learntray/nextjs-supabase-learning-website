const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      { source: "/learnapi/:path*", destination: "/api/learnapi/:path*" },
      { source: "/websiteapi/:path*", destination: "/api/websiteapi/:path*" },
    ];
  },
  webpack(config) {
    config.resolve.alias["@"] = path.resolve(__dirname, "./");

    return config;
  },
};

module.exports = nextConfig;
