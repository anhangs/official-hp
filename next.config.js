/** @type {import('next').NextConfig} */

module.exports = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains:["*.anhangs.com"]
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });
    return config;
  }
};