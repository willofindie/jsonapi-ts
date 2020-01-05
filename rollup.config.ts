import resolve from '@rollup/plugin-node-resolve';
import sourceMaps from 'rollup-plugin-sourcemaps';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';

const pkg = require('./package.json');

export default [
  {
    input: `src/index.ts`,
    output: [
      { file: pkg.browser, name: 'index', format: 'umd', sourcemap: true },
    ],
    external: [],
    watch: {
      include: 'src/**'
    },
    plugins: [
      // Allow json resolution
      json(),
      // Compile TypeScript files
      typescript(),
      resolve({ extensions: ['.js', '.ts'] }),
      sourceMaps()
    ]
  },

  {
    input: `src/index.ts`,
    output: [
      { file: pkg.main, name: 'index', format: 'cjs', sourcemap: true },
      { file: pkg.module, name: 'index', format: 'esm', sourcemap: true },
    ],
    external: ['pluralize'],
    watch: {
      include: 'src/**'
    },
    plugins: [
      // Allow json resolution
      json(),
      // Compile TypeScript files
      typescript(),
      resolve({ extensions: ['.js', '.ts'] }),
      sourceMaps()
    ]
  }
];
