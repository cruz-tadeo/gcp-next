const withNextIntl = require("next-intl/plugin")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: false,
  },
  env: {
    url_salesforce: "https://gcp-api-salesforce-pss64ximca-uc.a.run.app/api/v1",
  },
};

module.exports = withNextIntl(nextConfig);
