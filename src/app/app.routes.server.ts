/**
 * Module: app.routes.server.ts
 * Purpose: Server-side route configuration used by Angular Universal (SSR).
 *
 * This file exports `serverRoutes`, an array of `ServerRoute` entries that
 * tell the server which route patterns should be rendered on the server and
 * which can use prerendered content. Keep entries concise and use wildcard
 * patterns to include nested application routes.
 */
import { RenderMode, ServerRoute } from '@angular/ssr';

/**
 * `serverRoutes` - list of server routing rules.
 * @type {ServerRoute[]}
 *
 * Each object contains:
 * - `path`: a route pattern string (supports wildcards)
 * - `renderMode`: `RenderMode.Server` to always server-render, or
 *   `RenderMode.Prerender` to serve pre-rendered assets when available.
 */
export const serverRoutes: ServerRoute[] = [
  {
    path: 'application/**',
    renderMode: RenderMode.Server,
  },
  {
    path: 'auth/**',
    renderMode: RenderMode.Server,
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
