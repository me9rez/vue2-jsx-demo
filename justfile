vite-dev:
    pnpm --filter lib build && pnpm --filter vite-vue2 dev

rsbuild-dev:
    pnpm --filter lib build && pnpm --filter rsbuild-vue2 dev