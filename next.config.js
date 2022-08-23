/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    for (const [index, rule] of config.module.rules.entries()) {
      if (!rule.test && rule.oneOf) {
        config.module.rules[index].oneOf = [
          {
            resourceQuery: /raw/,
            type: "asset/source",
          },
        ].concat(config.module.rules[index].oneOf);
      }
    }

    return config;
  },
};

module.exports = nextConfig;
