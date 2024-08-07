// vite.config.js
import { defineConfig } from "file:///D:/lihw/source/anything-llm/embed/node_modules/.pnpm/vite@5.3.5_terser@5.31.3/node_modules/vite/dist/node/index.js";
import { fileURLToPath, URL } from "url";

// postcss.config.js
import tailwind from "file:///D:/lihw/source/anything-llm/embed/node_modules/.pnpm/tailwindcss@3.4.1/node_modules/tailwindcss/lib/index.js";
import autoprefixer from "file:///D:/lihw/source/anything-llm/embed/node_modules/.pnpm/autoprefixer@10.4.20_postcss@8.4.41/node_modules/autoprefixer/lib/autoprefixer.js";

// tailwind.config.js
var tailwind_config_default = {
  darkMode: "false",
  prefix: "allm-",
  corePlugins: {
    preflight: false
  },
  content: {
    relative: true,
    files: [
      "./src/components/**/*.{js,jsx}",
      "./src/hooks/**/*.js",
      "./src/models/**/*.js",
      "./src/pages/**/*.{js,jsx}",
      "./src/utils/**/*.js",
      "./src/*.jsx",
      "./index.html"
    ]
  },
  theme: {
    extend: {
      rotate: {
        "270": "270deg",
        "360": "360deg"
      },
      colors: {
        "black-900": "#141414",
        accent: "#3D4147",
        "sidebar-button": "#31353A",
        sidebar: "#25272C",
        "historical-msg-system": "rgba(255, 255, 255, 0.05);",
        "historical-msg-user": "#2C2F35",
        outline: "#4E5153",
        "primary-button": "#46C8FF",
        secondary: "#2C2F36",
        "dark-input": "#18181B",
        "mobile-onboarding": "#2C2F35",
        "dark-highlight": "#1C1E21",
        "dark-text": "#222628",
        description: "#D2D5DB",
        "x-button": "#9CA3AF"
      },
      backgroundImage: {
        "preference-gradient": "linear-gradient(180deg, #5A5C63 0%, rgba(90, 92, 99, 0.28) 100%);",
        "chat-msg-user-gradient": "linear-gradient(180deg, #3D4147 0%, #2C2F35 100%);",
        "selected-preference-gradient": "linear-gradient(180deg, #313236 0%, rgba(63.40, 64.90, 70.13, 0) 100%);",
        "main-gradient": "linear-gradient(180deg, #3D4147 0%, #2C2F35 100%)",
        "modal-gradient": "linear-gradient(180deg, #3D4147 0%, #2C2F35 100%)",
        "sidebar-gradient": "linear-gradient(90deg, #5B616A 0%, #3F434B 100%)",
        "login-gradient": "linear-gradient(180deg, #3D4147 0%, #2C2F35 100%)",
        "menu-item-gradient": "linear-gradient(90deg, #3D4147 0%, #2C2F35 100%)",
        "menu-item-selected-gradient": "linear-gradient(90deg, #5B616A 0%, #3F434B 100%)",
        "workspace-item-gradient": "linear-gradient(90deg, #3D4147 0%, #2C2F35 100%)",
        "workspace-item-selected-gradient": "linear-gradient(90deg, #5B616A 0%, #3F434B 100%)",
        "switch-selected": "linear-gradient(146deg, #5B616A 0%, #3F434B 100%)"
      },
      fontFamily: {
        sans: [
          "plus-jakarta-sans",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"'
        ]
      },
      animation: {
        sweep: "sweep 0.5s ease-in-out"
      },
      keyframes: {
        sweep: {
          "0%": { transform: "scaleX(0)", transformOrigin: "bottom left" },
          "100%": { transform: "scaleX(1)", transformOrigin: "bottom left" }
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 }
        }
      }
    }
  },
  plugins: []
};

// postcss.config.js
var postcss_config_default = {
  plugins: [
    tailwind(tailwind_config_default),
    autoprefixer
  ]
};

// vite.config.js
import react from "file:///D:/lihw/source/anything-llm/embed/node_modules/.pnpm/@vitejs+plugin-react@4.3.1_vite@5.3.5/node_modules/@vitejs/plugin-react/dist/index.mjs";
import image from "file:///D:/lihw/source/anything-llm/embed/node_modules/.pnpm/@rollup+plugin-image@3.0.3_rollup@4.20.0/node_modules/@rollup/plugin-image/dist/es/index.js";
var __vite_injected_original_import_meta_url = "file:///D:/lihw/source/anything-llm/embed/vite.config.js";
var vite_config_default = defineConfig({
  plugins: [react(), image()],
  define: {
    // In dev, we need to disable this, but in prod, we need to enable it
    "process.env.NODE_ENV": JSON.stringify("production")
  },
  css: {
    postcss: postcss_config_default
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
      },
      {
        process: "process/browser",
        stream: "stream-browserify",
        zlib: "browserify-zlib",
        util: "util",
        find: /^~.+/,
        replacement: (val) => {
          return val.replace(/^~/, "");
        }
      }
    ]
  },
  build: {
    lib: {
      entry: "src/main.jsx",
      name: "EmbeddedAnythingLLM",
      formats: ["umd"],
      fileName: (_format) => `anythingllm-chat-widget.js`
    },
    rollupOptions: {
      external: [
        // Reduces transformation time by 50% and we don't even use this variant, so we can ignore.
        /@phosphor-icons\/react\/dist\/ssr/
      ]
    },
    commonjsOptions: {
      transformMixedEsModules: true
    },
    cssCodeSplit: false,
    assetsInlineLimit: 1e8,
    minify: "esbuild",
    outDir: "dist",
    emptyOutDir: true,
    inlineDynamicImports: true,
    assetsDir: "",
    sourcemap: "inline"
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis"
      },
      plugins: []
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiLCAicG9zdGNzcy5jb25maWcuanMiLCAidGFpbHdpbmQuY29uZmlnLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcbGlod1xcXFxzb3VyY2VcXFxcYW55dGhpbmctbGxtXFxcXGVtYmVkXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxsaWh3XFxcXHNvdXJjZVxcXFxhbnl0aGluZy1sbG1cXFxcZW1iZWRcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2xpaHcvc291cmNlL2FueXRoaW5nLWxsbS9lbWJlZC92aXRlLmNvbmZpZy5qc1wiOy8vIHZpdGUuY29uZmlnLmpzXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiXG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tIFwidXJsXCJcbmltcG9ydCBwb3N0Y3NzIGZyb20gXCIuL3Bvc3Rjc3MuY29uZmlnLmpzXCJcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIlxuaW1wb3J0IGltYWdlIGZyb20gXCJAcm9sbHVwL3BsdWdpbi1pbWFnZVwiXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpLCBpbWFnZSgpXSxcbiAgZGVmaW5lOiB7XG4gICAgLy8gSW4gZGV2LCB3ZSBuZWVkIHRvIGRpc2FibGUgdGhpcywgYnV0IGluIHByb2QsIHdlIG5lZWQgdG8gZW5hYmxlIGl0XG4gICAgXCJwcm9jZXNzLmVudi5OT0RFX0VOVlwiOiBKU09OLnN0cmluZ2lmeShcInByb2R1Y3Rpb25cIilcbiAgfSxcbiAgY3NzOiB7XG4gICAgcG9zdGNzc1xuICB9LFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IFtcbiAgICAgIHtcbiAgICAgICAgZmluZDogXCJAXCIsXG4gICAgICAgIHJlcGxhY2VtZW50OiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoXCIuL3NyY1wiLCBpbXBvcnQubWV0YS51cmwpKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcHJvY2VzczogXCJwcm9jZXNzL2Jyb3dzZXJcIixcbiAgICAgICAgc3RyZWFtOiBcInN0cmVhbS1icm93c2VyaWZ5XCIsXG4gICAgICAgIHpsaWI6IFwiYnJvd3NlcmlmeS16bGliXCIsXG4gICAgICAgIHV0aWw6IFwidXRpbFwiLFxuICAgICAgICBmaW5kOiAvXn4uKy8sXG4gICAgICAgIHJlcGxhY2VtZW50OiAodmFsKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHZhbC5yZXBsYWNlKC9efi8sIFwiXCIpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogXCJzcmMvbWFpbi5qc3hcIixcbiAgICAgIG5hbWU6IFwiRW1iZWRkZWRBbnl0aGluZ0xMTVwiLFxuICAgICAgZm9ybWF0czogW1widW1kXCJdLFxuICAgICAgZmlsZU5hbWU6IChfZm9ybWF0KSA9PiBgYW55dGhpbmdsbG0tY2hhdC13aWRnZXQuanNgXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBleHRlcm5hbDogW1xuICAgICAgICAvLyBSZWR1Y2VzIHRyYW5zZm9ybWF0aW9uIHRpbWUgYnkgNTAlIGFuZCB3ZSBkb24ndCBldmVuIHVzZSB0aGlzIHZhcmlhbnQsIHNvIHdlIGNhbiBpZ25vcmUuXG4gICAgICAgIC9AcGhvc3Bob3ItaWNvbnNcXC9yZWFjdFxcL2Rpc3RcXC9zc3IvXG4gICAgICBdXG4gICAgfSxcbiAgICBjb21tb25qc09wdGlvbnM6IHtcbiAgICAgIHRyYW5zZm9ybU1peGVkRXNNb2R1bGVzOiB0cnVlXG4gICAgfSxcbiAgICBjc3NDb2RlU3BsaXQ6IGZhbHNlLFxuICAgIGFzc2V0c0lubGluZUxpbWl0OiAxMDAwMDAwMDAsXG4gICAgbWluaWZ5OiBcImVzYnVpbGRcIixcbiAgICBvdXREaXI6IFwiZGlzdFwiLFxuICAgIGVtcHR5T3V0RGlyOiB0cnVlLFxuICAgIGlubGluZUR5bmFtaWNJbXBvcnRzOiB0cnVlLFxuICAgIGFzc2V0c0RpcjogXCJcIixcbiAgICBzb3VyY2VtYXA6IFwiaW5saW5lXCJcbiAgfSxcbiAgb3B0aW1pemVEZXBzOiB7XG4gICAgZXNidWlsZE9wdGlvbnM6IHtcbiAgICAgIGRlZmluZToge1xuICAgICAgICBnbG9iYWw6IFwiZ2xvYmFsVGhpc1wiXG4gICAgICB9LFxuICAgICAgcGx1Z2luczogW11cbiAgICB9XG4gIH1cbn0pXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXGxpaHdcXFxcc291cmNlXFxcXGFueXRoaW5nLWxsbVxcXFxlbWJlZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcbGlod1xcXFxzb3VyY2VcXFxcYW55dGhpbmctbGxtXFxcXGVtYmVkXFxcXHBvc3Rjc3MuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9saWh3L3NvdXJjZS9hbnl0aGluZy1sbG0vZW1iZWQvcG9zdGNzcy5jb25maWcuanNcIjtpbXBvcnQgdGFpbHdpbmQgZnJvbSAndGFpbHdpbmRjc3MnXG5pbXBvcnQgYXV0b3ByZWZpeGVyIGZyb20gJ2F1dG9wcmVmaXhlcidcbmltcG9ydCB0YWlsd2luZENvbmZpZyBmcm9tICcuL3RhaWx3aW5kLmNvbmZpZy5qcydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBwbHVnaW5zOiBbXG4gICAgdGFpbHdpbmQodGFpbHdpbmRDb25maWcpLFxuICAgIGF1dG9wcmVmaXhlcixcbiAgXSxcbn0iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXGxpaHdcXFxcc291cmNlXFxcXGFueXRoaW5nLWxsbVxcXFxlbWJlZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcbGlod1xcXFxzb3VyY2VcXFxcYW55dGhpbmctbGxtXFxcXGVtYmVkXFxcXHRhaWx3aW5kLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovbGlody9zb3VyY2UvYW55dGhpbmctbGxtL2VtYmVkL3RhaWx3aW5kLmNvbmZpZy5qc1wiOy8qKiBAdHlwZSB7aW1wb3J0KCd0YWlsd2luZGNzcycpLkNvbmZpZ30gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGFya01vZGU6ICdmYWxzZScsXG4gIHByZWZpeDogJ2FsbG0tJyxcbiAgY29yZVBsdWdpbnM6IHtcbiAgICBwcmVmbGlnaHQ6IGZhbHNlLFxuICB9LFxuICBjb250ZW50OiB7XG4gICAgcmVsYXRpdmU6IHRydWUsXG4gICAgZmlsZXM6IFtcbiAgICAgIFwiLi9zcmMvY29tcG9uZW50cy8qKi8qLntqcyxqc3h9XCIsXG4gICAgICBcIi4vc3JjL2hvb2tzLyoqLyouanNcIixcbiAgICAgIFwiLi9zcmMvbW9kZWxzLyoqLyouanNcIixcbiAgICAgIFwiLi9zcmMvcGFnZXMvKiovKi57anMsanN4fVwiLFxuICAgICAgXCIuL3NyYy91dGlscy8qKi8qLmpzXCIsXG4gICAgICBcIi4vc3JjLyouanN4XCIsXG4gICAgICBcIi4vaW5kZXguaHRtbFwiLFxuICAgIF1cbiAgfSxcbiAgdGhlbWU6IHtcbiAgICBleHRlbmQ6IHtcbiAgICAgIHJvdGF0ZToge1xuICAgICAgICBcIjI3MFwiOiBcIjI3MGRlZ1wiLFxuICAgICAgICBcIjM2MFwiOiBcIjM2MGRlZ1wiXG4gICAgICB9LFxuICAgICAgY29sb3JzOiB7XG4gICAgICAgIFwiYmxhY2stOTAwXCI6IFwiIzE0MTQxNFwiLFxuICAgICAgICBhY2NlbnQ6IFwiIzNENDE0N1wiLFxuICAgICAgICBcInNpZGViYXItYnV0dG9uXCI6IFwiIzMxMzUzQVwiLFxuICAgICAgICBzaWRlYmFyOiBcIiMyNTI3MkNcIixcbiAgICAgICAgXCJoaXN0b3JpY2FsLW1zZy1zeXN0ZW1cIjogXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1wiLFxuICAgICAgICBcImhpc3RvcmljYWwtbXNnLXVzZXJcIjogXCIjMkMyRjM1XCIsXG4gICAgICAgIG91dGxpbmU6IFwiIzRFNTE1M1wiLFxuICAgICAgICBcInByaW1hcnktYnV0dG9uXCI6IFwiIzQ2QzhGRlwiLFxuICAgICAgICBzZWNvbmRhcnk6IFwiIzJDMkYzNlwiLFxuICAgICAgICBcImRhcmstaW5wdXRcIjogXCIjMTgxODFCXCIsXG4gICAgICAgIFwibW9iaWxlLW9uYm9hcmRpbmdcIjogXCIjMkMyRjM1XCIsXG4gICAgICAgIFwiZGFyay1oaWdobGlnaHRcIjogXCIjMUMxRTIxXCIsXG4gICAgICAgIFwiZGFyay10ZXh0XCI6IFwiIzIyMjYyOFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCIjRDJENURCXCIsXG4gICAgICAgIFwieC1idXR0b25cIjogXCIjOUNBM0FGXCJcbiAgICAgIH0sXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IHtcbiAgICAgICAgXCJwcmVmZXJlbmNlLWdyYWRpZW50XCI6XG4gICAgICAgICAgXCJsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjNUE1QzYzIDAlLCByZ2JhKDkwLCA5MiwgOTksIDAuMjgpIDEwMCUpO1wiLFxuICAgICAgICBcImNoYXQtbXNnLXVzZXItZ3JhZGllbnRcIjpcbiAgICAgICAgICBcImxpbmVhci1ncmFkaWVudCgxODBkZWcsICMzRDQxNDcgMCUsICMyQzJGMzUgMTAwJSk7XCIsXG4gICAgICAgIFwic2VsZWN0ZWQtcHJlZmVyZW5jZS1ncmFkaWVudFwiOlxuICAgICAgICAgIFwibGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzMxMzIzNiAwJSwgcmdiYSg2My40MCwgNjQuOTAsIDcwLjEzLCAwKSAxMDAlKTtcIixcbiAgICAgICAgXCJtYWluLWdyYWRpZW50XCI6IFwibGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzNENDE0NyAwJSwgIzJDMkYzNSAxMDAlKVwiLFxuICAgICAgICBcIm1vZGFsLWdyYWRpZW50XCI6IFwibGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzNENDE0NyAwJSwgIzJDMkYzNSAxMDAlKVwiLFxuICAgICAgICBcInNpZGViYXItZ3JhZGllbnRcIjogXCJsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM1QjYxNkEgMCUsICMzRjQzNEIgMTAwJSlcIixcbiAgICAgICAgXCJsb2dpbi1ncmFkaWVudFwiOiBcImxpbmVhci1ncmFkaWVudCgxODBkZWcsICMzRDQxNDcgMCUsICMyQzJGMzUgMTAwJSlcIixcbiAgICAgICAgXCJtZW51LWl0ZW0tZ3JhZGllbnRcIjpcbiAgICAgICAgICBcImxpbmVhci1ncmFkaWVudCg5MGRlZywgIzNENDE0NyAwJSwgIzJDMkYzNSAxMDAlKVwiLFxuICAgICAgICBcIm1lbnUtaXRlbS1zZWxlY3RlZC1ncmFkaWVudFwiOlxuICAgICAgICAgIFwibGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNUI2MTZBIDAlLCAjM0Y0MzRCIDEwMCUpXCIsXG4gICAgICAgIFwid29ya3NwYWNlLWl0ZW0tZ3JhZGllbnRcIjpcbiAgICAgICAgICBcImxpbmVhci1ncmFkaWVudCg5MGRlZywgIzNENDE0NyAwJSwgIzJDMkYzNSAxMDAlKVwiLFxuICAgICAgICBcIndvcmtzcGFjZS1pdGVtLXNlbGVjdGVkLWdyYWRpZW50XCI6XG4gICAgICAgICAgXCJsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM1QjYxNkEgMCUsICMzRjQzNEIgMTAwJSlcIixcbiAgICAgICAgXCJzd2l0Y2gtc2VsZWN0ZWRcIjogXCJsaW5lYXItZ3JhZGllbnQoMTQ2ZGVnLCAjNUI2MTZBIDAlLCAjM0Y0MzRCIDEwMCUpXCJcbiAgICAgIH0sXG4gICAgICBmb250RmFtaWx5OiB7XG4gICAgICAgIHNhbnM6IFtcbiAgICAgICAgICBcInBsdXMtamFrYXJ0YS1zYW5zXCIsXG4gICAgICAgICAgXCJ1aS1zYW5zLXNlcmlmXCIsXG4gICAgICAgICAgXCJzeXN0ZW0tdWlcIixcbiAgICAgICAgICBcIi1hcHBsZS1zeXN0ZW1cIixcbiAgICAgICAgICBcIkJsaW5rTWFjU3lzdGVtRm9udFwiLFxuICAgICAgICAgICdcIlNlZ29lIFVJXCInLFxuICAgICAgICAgIFwiUm9ib3RvXCIsXG4gICAgICAgICAgJ1wiSGVsdmV0aWNhIE5ldWVcIicsXG4gICAgICAgICAgXCJBcmlhbFwiLFxuICAgICAgICAgICdcIk5vdG8gU2Fuc1wiJyxcbiAgICAgICAgICBcInNhbnMtc2VyaWZcIixcbiAgICAgICAgICAnXCJBcHBsZSBDb2xvciBFbW9qaVwiJyxcbiAgICAgICAgICAnXCJTZWdvZSBVSSBFbW9qaVwiJyxcbiAgICAgICAgICAnXCJTZWdvZSBVSSBTeW1ib2xcIicsXG4gICAgICAgICAgJ1wiTm90byBDb2xvciBFbW9qaVwiJ1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgYW5pbWF0aW9uOiB7XG4gICAgICAgIHN3ZWVwOiBcInN3ZWVwIDAuNXMgZWFzZS1pbi1vdXRcIlxuICAgICAgfSxcbiAgICAgIGtleWZyYW1lczoge1xuICAgICAgICBzd2VlcDoge1xuICAgICAgICAgIFwiMCVcIjogeyB0cmFuc2Zvcm06IFwic2NhbGVYKDApXCIsIHRyYW5zZm9ybU9yaWdpbjogXCJib3R0b20gbGVmdFwiIH0sXG4gICAgICAgICAgXCIxMDAlXCI6IHsgdHJhbnNmb3JtOiBcInNjYWxlWCgxKVwiLCB0cmFuc2Zvcm1PcmlnaW46IFwiYm90dG9tIGxlZnRcIiB9XG4gICAgICAgIH0sXG4gICAgICAgIGZhZGVJbjoge1xuICAgICAgICAgIFwiMCVcIjogeyBvcGFjaXR5OiAwIH0sXG4gICAgICAgICAgXCIxMDAlXCI6IHsgb3BhY2l0eTogMSB9XG4gICAgICAgIH0sXG4gICAgICAgIGZhZGVPdXQ6IHtcbiAgICAgICAgICBcIjAlXCI6IHsgb3BhY2l0eTogMSB9LFxuICAgICAgICAgIFwiMTAwJVwiOiB7IG9wYWNpdHk6IDAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBwbHVnaW5zOiBbXVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMsZUFBZSxXQUFXOzs7QUNGa1EsT0FBTyxjQUFjO0FBQzFULE9BQU8sa0JBQWtCOzs7QUNBekIsSUFBTywwQkFBUTtBQUFBLEVBQ2IsVUFBVTtBQUFBLEVBQ1YsUUFBUTtBQUFBLEVBQ1IsYUFBYTtBQUFBLElBQ1gsV0FBVztBQUFBLEVBQ2I7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLFVBQVU7QUFBQSxJQUNWLE9BQU87QUFBQSxNQUNMO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxNQUNOLFFBQVE7QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxNQUNUO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTixhQUFhO0FBQUEsUUFDYixRQUFRO0FBQUEsUUFDUixrQkFBa0I7QUFBQSxRQUNsQixTQUFTO0FBQUEsUUFDVCx5QkFBeUI7QUFBQSxRQUN6Qix1QkFBdUI7QUFBQSxRQUN2QixTQUFTO0FBQUEsUUFDVCxrQkFBa0I7QUFBQSxRQUNsQixXQUFXO0FBQUEsUUFDWCxjQUFjO0FBQUEsUUFDZCxxQkFBcUI7QUFBQSxRQUNyQixrQkFBa0I7QUFBQSxRQUNsQixhQUFhO0FBQUEsUUFDYixhQUFhO0FBQUEsUUFDYixZQUFZO0FBQUEsTUFDZDtBQUFBLE1BQ0EsaUJBQWlCO0FBQUEsUUFDZix1QkFDRTtBQUFBLFFBQ0YsMEJBQ0U7QUFBQSxRQUNGLGdDQUNF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
