// @ts-check
/**
 * @type { import("next").NextConfig}
 */
const config = {
  experimental: {
    cpus: 4,
    runtime: "edge",
    serverComponents: true,
  },
};
module.exports = config;
