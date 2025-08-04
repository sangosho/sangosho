// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable CSS optimization that requires critters
  experimental: {
    optimizeCss: false,
  },

  // Enable proper video file handling with TypeScript types
  webpack: (config: import('webpack').Configuration) => {
    // Add video file loader rule
    config.module?.rules?.push({
      test: /\.(mp4|webm|mov)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/media',
            outputPath: 'static/media',
            name: '[name].[hash].[ext]',
          },
        },
      ],
    });

    return config;
  },

  // Configure images and video domains
  images: {
    domains: [
      'videos.pexels.com',
      'images.unsplash.com'
    ],
  },
};

module.exports = nextConfig;