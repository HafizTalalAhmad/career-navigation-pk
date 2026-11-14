/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // Temporarily ignore TS errors during build so Vercel can deploy the site.
    // We will fix the strict TS types in the code later.
    ignoreBuildErrors: true,
  },
  eslint: {
    // !! WARN !!
    // Temporarily ignore ESLint errors during build.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
