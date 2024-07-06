import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import compression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),
    
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
    compression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    })
  ], 
  resolve: {
    dedupe: ['swiper'], // Add this line if you're facing issues with module resolution
  },
  server: {
    host: true,
    port: 3000,
    https: false
  },
  css: {
    devSourcemap: true // تأكد من وجود هذا السطر لتوليد ملفات source map لملفات CSS
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    minify: true,
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
      }
    }
  }
});
