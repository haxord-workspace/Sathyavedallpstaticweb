/**
 * SSG Entry Point for vite-react-ssg
 * Used by `npm run build:ssg` to pre-render all routes to static HTML.
 * The standard `npm run dev` continues to use src/main.tsx.
 */
import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { Experimental_ViteReactSSG as ViteReactSSG } from "vite-react-ssg/tanstack";
import { routeTree } from "./routeTree.gen";
import "./styles.css";

const queryClient = new QueryClient();

const router = createRouter({
  routeTree,
  context: { queryClient },
  scrollRestoration: true,
  defaultPreloadStaleTime: 0,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export const createRoot = ViteReactSSG({ router });
