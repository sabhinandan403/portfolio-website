import tailwindcss from '@tailwindcss/postcss';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: __dirname,
  base: '/portfolio-website/',
  publicDir: resolve(__dirname, '../public'),
  css: { postcss: { plugins: [tailwindcss()] } },
  plugins: [react()],
  build: {
    outDir: resolve(__dirname, '../github-pages-dist'),
    emptyOutDir: true,
  },
});
