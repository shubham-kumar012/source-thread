import { defineConfig, mergeConfig } from 'vite';

module.exports = (config) => {
  // Important: always return the modified config
  return mergeConfig(config, defineConfig({
    server: {
      allowedHosts: [
        'source-thread.onrender.com',
        '.onrender.com',
        '0.0.0.0'
      ],

      host: '0.0.0.0', 
      fs: {
        allow: [
          '..',
          '/opt/app',
          '/opt/render/project/src'
        ]
      }
    },

    resolve: {
      alias: {
        '@': '/src',
      },
    },
  }));
};
