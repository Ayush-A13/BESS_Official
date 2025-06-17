/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // Enable static export
  images: {
    unoptimized: true        // Required if you're using <Image> component without optimization on static hosting
  }
};

export default nextConfig;