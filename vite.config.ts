import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Custom plugin to add GitHub Pages redirect code
const githubPagesPlugin = (): Plugin => {
  return {
    name: 'github-pages-spa-redirect',
    transformIndexHtml(html) {
      // The script to handle GitHub Pages SPA redirect
      const script = `
        <!-- GitHub Pages SPA redirect script -->
        <script type="text/javascript">
          // Single-page application for GitHub Pages
          // MIT License from https://github.com/rafgraph/spa-github-pages
          (function(l) {
            if (l.search[1] === '/' ) {
              var decoded = l.search.slice(1).split('&').map(function(s) { 
                return s.replace(/~and~/g, '&')
              }).join('?');
              window.history.replaceState(null, null,
                l.pathname.slice(0, -1) + decoded + l.hash
              );
            }
          }(window.location))
        </script>
      `;
      
      // Insert the script before the first script tag
      return html.replace('<head>', '<head>' + script);
    }
  };
};

export default defineConfig({
  base: "/bacanhub/",
  plugins: [
    react(),
    githubPagesPlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
});
