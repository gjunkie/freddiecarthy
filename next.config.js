/** @type {import('next').NextConfig} */
const nextConfig = [{
  reactStrictMode: true,
  swcMinify: true,
}, {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.ogg$/,
      use: {
        loader: 'file-loader',
      },
    });
    return config;
  },
}]

module.exports = nextConfig

// const withMDX = require('@next/mdx')({
//   extension: /\.mdx?$/
// })
// module.exports = withMDX({
//   pageExtensions: ['js', 'jsx', 'md', 'mdx', 'tsx']
// })
