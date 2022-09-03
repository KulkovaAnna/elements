const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants');

const { i18n } = require('./next-i18next.config');

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isProd = phase === PHASE_PRODUCTION_BUILD;

  console.log(`isDev:${isDev}  isProd:${isProd}`);

  const env = {
    MEDIA_HOST: process.env.MEDIA_HOST,
    GRAPHQL_API_URL: process.env.GRAPHQL_API_URL,
    STORAGE_URL: process.env.STORAGE_URL,
  };

  return {
    env,
    images: {
      domains: [process.env.MEDIA_HOST],
    },
    i18n,
    async redirects() {
      return [
        {
          source: '/chapters',
          destination: '/chapters/1',
          permanent: true,
        },
      ];
    },
  };
};
