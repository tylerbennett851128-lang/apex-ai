import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';
import cspDirectives from './csp-directives.mjs';
import path from 'path-browserify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [vitePreprocess()],

  kit: {
    adapter: adapter({ out: 'build' }),
    csp: {
      mode: 'hash',
      directives: cspDirectives
    },

    alias: {
      $src: path.resolve('src'),
      $lib: path.resolve('src/lib'),
      $assets: path.resolve('src/assets'),
      $components: path.resolve('src/components'),
      $config: path.resolve('src/config'),
      $mc: path.resolve('src/mc')
    }
  },

  onwarn: (warning, handler) => {
    if (warning.code === 'a11y-click-events-have-key-events') return;
    handler(warning);
  }
};

export default config;
