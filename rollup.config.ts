import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';

export default [
  {
    input: './src/main.ts',
    output: {
      dir: 'dist',
      format: 'umd',
      entryFileNames: '[name].umd.js',
      name: 'file',
    },
    plugins: [resolve(), commonjs(), typescript()],
  },
];
