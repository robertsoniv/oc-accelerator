import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3001,
  },
  build: {
    rollupOptions: {
      treeshake: 'recommended',
    },
  },
  plugins: [react(), tsconfigPaths(), splitVendorChunkPlugin()],
})
