module.exports = {
	trailingComma: 'es5',
	tabWidth: 4,
	semi: true,
	singleQuote: true,
	overrides: [
		{
			files: '*.yml',
			options: {
				tabWidth: 2,
			},
		},
		{
			files: '*.md',
			options: {
				useTabs: false,
			}
		}
	],
};
