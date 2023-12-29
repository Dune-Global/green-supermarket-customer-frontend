/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    scrollRestoration: true,
    workerThreads: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "greensupermarketstoreacc.blob.core.windows.net",
        port: "",
      },
      {
        protocol: "https",
        hostname: "greensupermarket-egadf4bnddgcene0.z02.azurefd.net",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
