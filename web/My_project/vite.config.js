import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    hot: true,
    watch: {
      usePolling: true, // Forza il monitoraggio con polling
      interval: 100,    // Tempo di polling (in ms)
    },
  },
});
