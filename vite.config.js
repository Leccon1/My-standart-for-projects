import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
	base: 'URL REPOZITORY',
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
