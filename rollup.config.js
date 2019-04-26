import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';

const moduleOptions = {
  name: 'videojs-react',
  globals: {
    'video.js': 'videojs'
  },
  sourcemap: true
};

export default {
  input: './src/index.js',

  output: [
    {
      ...moduleOptions,
      file: './build/index.js',
      format: 'umd'
    },
    {
      ...moduleOptions,
      file: 'build/index.module.js',
      format: 'es'
    }
  ],

  plugins: [
    resolve({
      extensions: ['.mjs', '.js', '.json', '.node', '.ttf']
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    commonjs()
  ],

  external: ['react', 'react-dom']
};
