/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Force dynamic rendering for all pages
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

module.exports = nextConfig;