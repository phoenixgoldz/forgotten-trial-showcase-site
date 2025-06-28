
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Conditionally import componentTagger only if available
let componentTagger: any;
try {
  const taggerModule = await import("lovable-tagger");
  componentTagger = taggerModule.componentTagger;
} catch (error) {
  // lovable-tagger not available, use a no-op function
  componentTagger = () => null;
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
