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
        return_policy: resolve(root, 'return-policy', 'index.html'),
        thank_you: resolve(root, 'thank-you', 'index.html'),
        elite_trainer_box_display_case: resolve(root, 'elite-trainer-box-display-case', 'index.html'),
        booster_box_display_case: resolve(root, 'booster-box-display-case', 'index.html'),
        new_releases: resolve(root, 'new-releases', 'index.html'),
        prismatic_evolutions_super_premium_collection_display_case: resolve(root, 'prismatic-evolutions-super-premium-collection-display-case', 'index.html'),
        three_pack_booster_bundle_display_case: resolve(root, '3-pack-booster-bundle-display-case', 'index.html'),
        nothing_but_bowman: resolve(root, 'nothing-but-bowman', 'index.html'),
        mtg_collector_booster_box_display_case: resolve(root, 'mtg-collector-booster-box-display-case', 'index.html'),
        mtg_play_booster_box_display_case: resolve(root, 'mtg-play-booster-box-display-case', 'index.html'),
      },
    },
  },
});
