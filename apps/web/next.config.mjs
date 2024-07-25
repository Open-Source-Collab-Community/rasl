/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["assets.aceternity.com", "images.unsplash.com"], // Correctly formatted array
  },
};

export default nextConfig;
