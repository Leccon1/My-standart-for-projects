import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  base: 'URL REPOZITORY',
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
})
