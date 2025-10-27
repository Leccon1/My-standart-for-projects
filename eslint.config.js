// eslint.config.js
import globals from 'globals'
import js from '@eslint/js'
import importPlugin from 'eslint-plugin-import'

export default [
	// Базовые рекомендуемые правила
	js.configs.recommended,

	// Глобальные переменные для браузера
	{
		files: ['**/*.{js,mjs,cjs}'],
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
	},

	// Основные настройки для вашего проекта
	{
		files: ['src/**/*.js'],
		plugins: {
			import: importPlugin,
		},
		rules: {
			// Ошибки и потенциальные баги
			'no-unused-vars': 'error',
			'no-console': 'warn',
			'no-debugger': 'error',
			'no-alert': 'warn',

			// Современный JS
			'prefer-const': 'error',
			'no-var': 'error',
			'arrow-parens': ['error', 'always'],

			//Для Prettier интеграции в новом формате
            // 'prettier/prettier': 'error',

			// Стиль кода
			quotes: ['error', 'single'],
			indent: ['error', 2],
			'comma-dangle': ['error', 'always-multiline'],
			'object-curly-spacing': ['error', 'always'],

			// Правила для импортов
			'import/order': [
				'error',
				{
					groups: [
						'builtin',
						'external',
						'internal',
						'parent',
						'sibling',
						'index',
					],
					'newlines-between': 'always',
					alphabetize: { order: 'asc' },
				},
			],
		},
	},

	// Игнорируемые файлы
	{
		ignores: ['node_modules/', 'dist/', 'build/', 'coverage/'],
	},
]
