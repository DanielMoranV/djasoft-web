# djasoft.net.pe

Portafolio y escaparate de **Djasoft** — Daniel Morán Vílchez, Piura, Perú.

Sitio estático en **Astro**, bilingüe (español por defecto, inglés en `/en`), desplegado en
**Cloudflare Pages**.

## Desarrollo

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # genera dist/
npm run preview  # sirve dist/ tal como se publicara
```

## Estructura

```
src/
├── data/          # FUENTE UNICA DE VERDAD: productos y piezas open source
├── i18n/ui.ts     # las cadenas de ambos idiomas
├── layouts/       # Base.astro: <head>, SEO, hreflang, navegacion y pie
├── components/    # Portada y sus piezas
├── pages/
│   ├── index.astro     # espanol
│   └── en/index.astro  # ingles
└── styles/global.css   # Tailwind v4 y la paleta
```

**Para anadir o cambiar un producto se edita `src/data/productos.ts` y nada mas.** Ambos
idiomas y cualquier pagina futura leen de ahi. Ese es el motivo de que los datos esten
separados de las plantillas: la v2 con case studies no deberia obligar a reescribir la v1.

## Al tocar los enlaces, leer esto

`productos.ts` apunta a productos reales. **Antes de publicar un cambio de enlace hay que
abrirlo y mirar que sirve, no solo que responda 200.**

Ya ocurrio: `almazen.djasoft.net.pe` responde 200 perfectamente, pero sirve la **version
anterior** del ERP; el producto actual esta en `almazenapp.djasoft.net.pe`. Un enlace vivo
que ensena software viejo no lo detecta ningun comprobador automatico.

## Despliegue

Cloudflare Pages, conectado a este repositorio:

| Ajuste | Valor |
|---|---|
| Build command | `npm run build` |
| Build output directory | `dist` |
| Production branch | `main` |

Dominios personalizados: `djasoft.net.pe` y `www.djasoft.net.pe`.

Los subdominios de producto (`almazenapp`, `mozaicopro`, `easypay`) son registros DNS
independientes y **no se ven afectados** por apuntar la raiz a Pages.
