const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants');

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isProd =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1';
  const isStaging =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1';

  console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`);

  const env = {
    MEDIA_HOST: (() => {
      if (isDev) return '192.168.100.161';
      if (isProd) {
        return '192.168.100.161';
      }
      if (isStaging) return '192.168.100.161';
      return 'MEDIA_HOST:not (isDev,isProd && !isStaging,isProd && isStaging)';
    })(),
    GRAPHQL_API_URL: (() => {
      if (isDev) return 'http://192.168.100.161:5000/graphql';
      if (isProd) {
        return 'http://192.168.100.161:5000/graphql';
      }
      if (isStaging) return 'http://192.168.100.161:5000/graphql';
      return 'GRAPHQL_API_HOST:not (isDev,isProd && !isStaging,isProd && isStaging)';
    })(),
    STORAGE_URL: (() => {
      if (isDev) return 'http://192.168.100.161:5000';
      if (isProd) {
        return 'http://192.168.100.161:5000';
      }
      if (isStaging) return 'http://192.168.100.161:5000';
      return 'STORAGE_URL:not (isDev,isProd && !isStaging,isProd && isStaging)';
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
