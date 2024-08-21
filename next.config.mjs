/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "files.edgestore.dev"
    ]
  },
  rewrites: async () => {
    return [
      {
        source: '/flask_backend/:path*',
        destination: 'http://localhost:5000/:path*'
      }
    ]
  }
};

export default nextConfig;
