/**
 * @type { import("next").NextConfig}
 */
const config = {
  swcMinify: true,
  experimental: {
    cpus: 4,
    concurrentFeatures: true,
  },
};
module.exports = config;
