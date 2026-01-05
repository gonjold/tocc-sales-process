/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export for Netlify
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      },
    ],
  },
  trailingSlash: true,
}

module.exports = nextConfig
