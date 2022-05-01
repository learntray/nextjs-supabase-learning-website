/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      { source: "/learnapi/:path*", destination: "/api/learnapi/:path*" },
    ];
  },
};

module.exports = nextConfig;
