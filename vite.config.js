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
        mtg_collector_booster_box_display_case: resolve(root, 'mtg-collector-booster-box-display-case', 'index.html'),
        mtg_play_booster_box_display_case: resolve(root, 'mtg-play-booster-box-display-case', 'index.html'),
      },
    },
  },
});
