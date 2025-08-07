/** @type {import('next').NextConfig} */
const nextConfig = {
      // async rewrites() {
      // return [
      //       {
      //       source: '/lokacraft',
      //       destination: '/lokacraft',
      //       },
      // ]
      // },
      reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'hydeparkwinterwonderland.com'
      },
      {
        protocol: 'https',
        hostname: 'wembleypark.com'
      },
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com'
      },
      {
        protocol: 'https',
        hostname: 'placehold.co'
      },
    ]
  }
};


export default nextConfig;
