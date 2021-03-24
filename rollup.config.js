import path from 'path';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

const dev = process.env.NODE_ENV !== 'production';

export default {
  input: 'src/scripts/index.js',
  output: {
    sourcemap: false,
    format: 'iife',
    name: 'main',
    file: 'dist/assets/index.bundle.js',
  },
  plugins: [
    postcss({
      extract: path.resolve('dist/assets/index.bundle.css'),
      minimize: !dev,
    }),
    !dev && terser(),
  ],
  watch: {
    clearScreen: false,
  },
};
