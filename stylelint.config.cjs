// stylelint.config.cjs
module.exports = {
	extends: ['stylelint-config-standard-scss'], // базовые правила SCSS
	plugins: ['stylelint-scss'], // SCSS-плагины
	customSyntax: 'postcss-scss',
	rules: {
		'color-hex-length': null,
		'color-function-notation': null,
		'alpha-value-notation': null,
		'color-function-alias-notation': null,
		'scss/dollar-variable-empty-line-before': null,
		'at-rule-empty-line-before': null,
		'comment-empty-line-before': null,
		'scss/dollar-variable-pattern': null,
		'scss/at-rule-conditional-no-parentheses': null,
		'no-empty-source': null,
		'hue-degree-notation': null,
		'declaration-empty-line-before': null,
		'import-notation': null,
		'rule-empty-line-before': null,
		'block-no-empty': null,
		'scss/double-slash-comment-empty-line-before': null,
		'selector-class-pattern': null,
	},
	overrides: [
		{
			files: ['src/sass/components/**/*.scss'],
			rules: {
				'block-no-empty': null,
				'rule-empty-line-before': null,
			},
		},
	],
}
