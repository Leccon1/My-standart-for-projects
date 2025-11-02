import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'

export default defineConfig({
  base: 'URL REPO',

  plugins: [
    [react()],
    checker({
      stylelint: {
        lintCommand: 'stylelint "./src/**/*.scss"',
      },
    }),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@styles': path.resolve(__dirname, './src/style/sass'),
      '@js': path.resolve(__dirname, './src/js'),
      '@images': path.resolve(__dirname, './src/assets/images'),
      '@fonts': path.resolve(__dirname, './src/assets/fonts'),
    },
  },
})
