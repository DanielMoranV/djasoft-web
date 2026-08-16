// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://djasoft.net.pe',

  // Sitio de una sola lengua a proposito: es la marca vendedora, y habla a
  // empresas peruanas. El perfil de desarrollador —en ingles, para reclutadores—
  // vive en danielmoranv.github.io, con su propio repo.

  vite: {
    plugins: [tailwindcss()],
  },
});
