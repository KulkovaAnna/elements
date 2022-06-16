module.exports = function (api) {
  api.cache(true);
  return {
    plugins: ['macros', ['@babel/plugin-transform-runtime']],
    presets: ['@babel/preset-env', '@babel/preset-react', 'next/babel'],
  };
};
