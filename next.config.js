/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  redirects: async () => [
    {
      source: "/user",
      destination: "/",
      permanent: false,
    },
    {
      source: "/user/:id",
      destination: "/",
      permanent: false,
    },
  ],
};

module.exports = nextConfig;
