/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: 'build',
  images: {
    loader: "akamai",
    path: ""
  },
  basePath: "/nextjs-pages",
  assetPrefix: "/nextjs-pages"
}

module.exports = nextConfig
