/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

// const withMDX = require('@next/mdx')({
//   extension: /\.mdx?$/
// })
// module.exports = withMDX({
//   pageExtensions: ['js', 'jsx', 'md', 'mdx', 'tsx']
// })
