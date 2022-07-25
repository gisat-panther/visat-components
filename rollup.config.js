import path from 'path';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import postcss from 'rollup-plugin-postcss';
// import alias from '@rollup/plugin-alias';

const env = process.env.NODE_ENV;
const pkg = require('./package.json');

const CWD = process.cwd();
const Paths = {
	SRC: `${CWD}/src`,
	DIST: `${CWD}/dist`,
	NODE_MODULES: `${CWD}/node_modules`,
};
Object.assign(Paths, {
	INPUT: Paths.SRC + '/index.js',
	OUTPUT: Paths.DIST + '/index.js',
});

export default {
	input: 'src/index.js',
	output: {
		file: {
			es: 'dist/index.es.js',
			cjs: pkg.main,
		}[env],
		format: env,
		globals: {},
		exports: 'named' /** Disable warning for default imports */,
		sourcemap: true,
	},
	external: [
		'@gisatcz/ptr-atoms',
		'@gisatcz/ptr-core',
		'classnames',
		'prop-types',
		'react-modal',
		'react-icons',
		'react-icons/hi',
		'react-icons/si',
		'react-icons/ai',
		'react-icons/go',
		'react-icons/md',
		'react',
		'react-dom',
		'react/jsx-runtime',
		'react-slider',
		'react-tooltip',
		/@babel\/runtime/,
	],
	plugins: [
		babel({
			plugins: [],
			babelHelpers: 'runtime',
		}),
		commonjs({
			include: 'node_modules/**',
		}),
		postcss({
			extract: path.resolve(Paths.DIST + '/style.css'),
		}),
		filesize(),
		// alias({
		// 	entries: [
		// 		{
		// 			find: '@gisatcz/ptr-atoms',
		// 			replacement: 'C:/Users/PavelVlach/WebstormProjects/ptr-atoms',
		// 		},
		// 	],
		// }),
	],
};
