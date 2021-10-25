module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@components': './src/components',
            '@containers': './src/containers',
            '@helpers': './src/helpers',
            '@screens': './src/screens',
            '@services': './src/services',
            '@store': './src/store',
            '@themes': './src/themes',
            '@assets': './src/assets',
            '@config': './src/config',
            '@dataMock': './src/mock',
            '@inferfaces': './src/inferfaces',
            '@utils': './src/utils',
            '@navigator': './src/navigators',
            '@shimmers': './src/shimmers',
            '@hooks': './src/hooks',
            '@context': './src/context',
            '@dto': './src/dto',
          },
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.android.js',
            '.android.tsx',
            '.ios.js',
            '.ios.tsx',
          ],
        },
      ],
    ],
  };
};
