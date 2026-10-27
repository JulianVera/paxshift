// @ts-check
import { defineConfig } from 'astro/config';

// Sitio 100 % estático: `output: 'static'` es el valor por defecto.
//
// Deploy de prototipo en GitHub Pages (project page):
//   https://julianvera.github.io/paxshift/
// `site` y `base` solo se aplican en CI para no afectar el desarrollo local.
// Cuando exista dominio propio, reemplazar `site` y quitar `base`.
const isCI = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: isCI ? 'https://julianvera.github.io' : undefined,
  base: isCI ? '/paxshift' : undefined,
  build: {
    inlineStylesheets: 'auto',
  },
});
