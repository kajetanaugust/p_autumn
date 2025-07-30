// @ts-check
import {defineConfig} from 'astro/config';
import {vanillaExtractPlugin} from '@vanilla-extract/vite-plugin';
import sitemap from '@astrojs/sitemap';


// https://astro.build/config
export default defineConfig({
    site: 'https://jesien.com.pl',
    integrations: [
        sitemap(),
    ],
    vite: {
        plugins: [vanillaExtractPlugin()]
    }
});
