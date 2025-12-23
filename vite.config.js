import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  base: 'URL REPO',

  plugins: [
    react({
      include: ['**/*.jsx', '**/*.js'],
    }),
    svgr({
      svgrOptions: {
        icon: true,
      },
    }),
    checker({
      stylelint: {
        lintCommand: 'stylelint "./src/**/*.scss"',
      },
    }),
  ],
  assetsInclude: ['**/*.svg'],
  resolve: {
    alias: {
      // base
      '@': path.resolve(__dirname, './src'),

      // assets
      '@assets': path.resolve(__dirname, './src/assets'),
      '@images': path.resolve(__dirname, './src/assets/images'),
      '@icons': path.resolve(__dirname, './src/assets/icons'),
      '@fonts': path.resolve(__dirname, './src/assets/fonts'),
      '@favicons': path.resolve(__dirname, './src/assets/favicons'),

      // styles
      '@styles': path.resolve(__dirname, './src/style'),
      '@style-base': path.resolve(__dirname, './src/style/base'),
      '@style-helpers': path.resolve(__dirname, './src/style/helpers'),
      '@style-setting': path.resolve(__dirname, './src/style/setting'),

      // components
      '@components': path.resolve(__dirname, './src/components'),
      '@common': path.resolve(__dirname, './src/components/common'),
      '@layout': path.resolve(__dirname, './src/components/layout'),
      '@pages': path.resolve(__dirname, './src/components/pages'),
      '@ui': path.resolve(__dirname, './src/components/ui'),

      // logic
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@utils': path.resolve(__dirname, './src/utils'),
    },
  },
})
