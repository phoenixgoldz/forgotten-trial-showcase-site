
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const plugins = [react()];
  
  // Only add componentTagger in development mode if available
  if (mode === 'development') {
    try {
      const { componentTagger } = require("lovable-tagger");
      if (componentTagger) {
        plugins.push(componentTagger());
      }
    } catch (error) {
      // lovable-tagger not available, continue without it
      console.log('lovable-tagger not available, continuing without it');
    }
  }

  return {
    base: mode === 'production' ? './' : '/',
    server: {
      host: "::",
      port: 8080,
    },
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
      emptyOutDir: true,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            router: ['react-router-dom'],
          },
          assetFileNames: 'assets/[name].[ext]',
          chunkFileNames: 'assets/[name].js',
          entryFileNames: 'assets/[name].js',
        },
      },
    },
    assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg', '**/*.mp3', '**/*.wav'],
    css: {
      postcss: "./postcss.config.cjs",
    },
  };
});
