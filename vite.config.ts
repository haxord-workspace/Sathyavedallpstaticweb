// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const config = defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  nitro: {
    prerender: {
      crawlLinks: false,
    },
    preset: "cloudflare_module",
  },
});

export default async (env: any) => {
  let resolvedConfig;
  if (typeof config === 'function') {
    resolvedConfig = await config(env);
  } else {
    resolvedConfig = await config;
  }

  resolvedConfig.plugins = resolvedConfig.plugins || [];

  resolvedConfig.plugins.push({
    name: "remove-index-html-from-bundle",
    enforce: "post",
    generateBundle(options: any, bundle: any) {
      if (bundle['index.html']) {
        delete bundle['index.html'];
        console.log('[build-fix] Removed index.html from Vite bundle to prevent static asset bypass.');
      }
    }
  });

  return resolvedConfig;
};
