module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	env: {
	},
	plugins: [
		[
			'module-resolver',
			{
				root: './src',
				cwd: 'babelrc',
				extensions: ['.tsx'],
			},
		],
	],
};
