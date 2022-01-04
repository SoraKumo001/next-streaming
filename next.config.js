/**
 * @type { import("next").NextConfig}
 */
const config = {
  reactStrictMode: true,
  experimental: {
    cpus: 4,
    concurrentFeatures: true,
  },
};
module.exports = config;
