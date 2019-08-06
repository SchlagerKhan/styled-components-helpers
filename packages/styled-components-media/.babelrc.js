module.exports = {
	presets: ['@babel/preset-env', '@babel/preset-react'],
	plugins: [
		'@babel/plugin-proposal-optional-chaining',
		['@babel/plugin-proposal-decorators', { legacy: true }],
		['@babel/plugin-proposal-class-properties', { loose: true }],
	],
	env: {
		development: {},
		production: {
			ignore: ['**/*.test.js'],
		},
	},
};
