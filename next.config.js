const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants');

const { i18n } = require('./next-i18next.config');

const API_LOCAL_HOST = 'http://192.168.100.111:5000';
const API_PROD_HOST = 'https://ipoe-api.herokuapp.com';

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isProd = phase === PHASE_PRODUCTION_BUILD;

  console.log(`isDev:${isDev}  isProd:${isProd}`);

  const env = {
    MEDIA_HOST: (() => {
      if (isDev) return '192.168.100.111';
      if (isProd) {
        return 'ipoe-api.herokuapp.com';
      }
      return 'MEDIA_HOST:not (isDev,isProd)';
    })(),
    GRAPHQL_API_URL: (() => {
      if (isDev) return `${API_LOCAL_HOST}/graphql`;
      if (isProd) {
        return `${API_PROD_HOST}/graphql`;
      }
      return 'GRAPHQL_API_HOST:not (isDev,isProd)';
    })(),
    STORAGE_URL: (() => {
      if (isDev) return API_LOCAL_HOST;
      if (isProd) {
        return API_PROD_HOST;
      }
      return 'STORAGE_URL:not (isDev,isProd)';
    })(),
  };

  return {
    env,
    images: {
      domains: [env.MEDIA_HOST],
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
