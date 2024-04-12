/** 
 * @type {import('next').NextConfig} 
 * 
 * nextConfig:
 * Configuration settings for Next.js application.
 * 
 * images:
 * Configuration for image optimization and domains.
 * - domains: List of allowed domains for image optimization.
 *   Ensure to include all the domains from which your application fetches images.
 */
const nextConfig = {
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "1h3.googleusercontent.com",
      "kinclimg9.bluestone.com",
      "kinclimg4.bluestone.com",
      "kinclimg7.bluestone.com",
      "kinclimg5.bluestone.com",
      "kinclimg1.bluestone.com",
    ],
  },
};

module.exports = nextConfig;
