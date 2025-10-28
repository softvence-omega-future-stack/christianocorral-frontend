// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" }, // dev – replace with real domains in prod
    ],
  },
};

export default nextConfig;