const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants');

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isProd =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1';

  console.log(`isDev:${isDev}  isProd:${isProd}`);

  const env = {
    MEDIA_HOST: (() => {
      if (isDev) return '192.168.100.161';
      if (isProd) {
        return 'ipoe-api.herokuapp.com';
      }
      return 'MEDIA_HOST:not (isDev,isProd && !isStaging,isProd)';
    })(),
    GRAPHQL_API_URL: (() => {
      if (isDev) return 'http://192.168.100.161:5000/graphql';
      if (isProd) {
        return 'https://ipoe-api.herokuapp.com/graphql';
      }
      return 'GRAPHQL_API_HOST:not (isDev,isProd && !isStaging,isProd)';
    })(),
    STORAGE_URL: (() => {
      if (isDev) return 'http://192.168.100.161:5000';
      if (isProd) {
        return 'https://ipoe-api.herokuapp.com/graphql';
      }
      return 'STORAGE_URL:not (isDev,isProd && !isStaging,isProd)';
    })(),
  };

  return {
    env,
    images: {
      domains: [env.MEDIA_HOST],
    },
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
