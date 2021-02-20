import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named'
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named'
    }
  ],
  external: Object.keys(pkg.peerDependencies || {}),
  plugins:[
    babel({
      exclude: 'node_modules/**',
    }),
    resolve(),
    commonjs()
  ]
};
