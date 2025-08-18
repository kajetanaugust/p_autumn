// @ts-check
import { defineConfig } from 'astro/config'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://jesien.com.pl',
  integrations: [sitemap()],
  vite: {
    plugins: [vanillaExtractPlugin()],
    build: {
      cssCodeSplit: true,
      cssMinify: 'esbuild',
      rollupOptions: {
        output: {
          assetFileNames: assetInfo => {
            if (assetInfo.name && assetInfo.name.endsWith('.css')) {
              return 'assets/[name]-[hash][extname]'
            }
            return 'assets/[name]-[hash][extname]'
          },
        },
      },
    },
    resolve: {
      alias: {
        '@': '/src',
        '@components': '/src/components',
        '@sections': '/src/sections',
        '@layouts': '/src/layouts',
        '@styles': '/src/styles',
        '@tokens': '/src/tokens',
        '@utils': '/src/utils',
        '@types': '/src/types',
        '@assets': '/src/assets',
        '@scripts': '/src/scripts',
      },
    },
  },
  build: {
    inlineStylesheets: 'auto',
  },
})
