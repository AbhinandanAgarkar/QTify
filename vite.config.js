import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr'; // Correct import

export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: '**/*.svg?react', // Optional: Only process SVGs with ?react suffix
    }),
  ],
});