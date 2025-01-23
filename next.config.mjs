/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        // https://image.tmdb.org/t/p/
        hostname: 'image.tmdb.org',
        pathname: '/t/p/**',
        port: '',
        protocol: 'https',
      },
    ],
  },
};

export default nextConfig;
