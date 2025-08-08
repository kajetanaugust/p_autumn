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
})
