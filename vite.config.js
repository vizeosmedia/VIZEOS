import { resolve } from 'path';
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');

// https://vite.js.dev/config/
export default defineConfig({
  root,
  plugins: [reactRefresh()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        contact: resolve(root, 'contact', 'index.html'),
        gallery: resolve(root, 'gallery', 'index.html'),
        about_us: resolve(root, 'about-us', 'index.html'),
      },
    },
  },
});
