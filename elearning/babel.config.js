module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          app: './src/app',
          config: './src/config',
          components: './src/components',
          screens: './src/screens',
          providers: './src/providers',
          styles: './src/styles',
          utils: './src/utils',
          constants: './src/constants',
          assets: './src/assets',
          mocks: './src/mocks',
          containers: './src/containers',
        },
      },
    ],
  ],
};
