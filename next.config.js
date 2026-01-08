/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kunalsharmaphoto-gen1-storage-b6a17dfb41599-staging.s3.us-west-1.amazonaws.com',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
