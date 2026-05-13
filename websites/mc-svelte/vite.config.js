import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
  server: {
    port: 3000,
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..', 'src', '/src', './src', './src/*']
    }
  },

  plugins: [sveltekit()],

  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/setupTest.ts'],
    include: ['src/**/*.{test,spec}.{js,ts}']
  },

  build: {
    chunkSizeWarningLimit: 8192
  }
};

export default config;
