/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      scrollRestoration: true,
      workerThreads: true,
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'greensupermarketstoreacc.blob.core.windows.net',
          port: '',
        }
      ]
    },
  };
  
  module.exports = nextConfig;