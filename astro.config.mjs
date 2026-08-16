// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://djasoft.net.pe',

  // Sitio de una sola lengua a proposito: es la marca vendedora, y habla a
  // empresas peruanas. El perfil de desarrollador —en ingles, para reclutadores—
  // vive en danielmoranv.github.io, con su propio repo.

  // El sitemap se genera; no se escribe a mano. Cuando lleguen las paginas de
  // caso de estudio entraran solas, que es justo el fallo que un sitemap
  // estatico comete en silencio.
  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});
