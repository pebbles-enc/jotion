/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: "/flask_backend", don't use this, whole application will crash
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
  },
  // reactStrictMode: false // Doesn't work to fix the rewrites issue (does actually work to fix internal Next rendering)
};

export default nextConfig;
