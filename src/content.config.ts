import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Blog / AEO: articulos que responden UNA pregunta concreta, en la voz de
 * Daniel, no posts genericos de agencia. `pregunta` es literal la pregunta
 * que el articulo responde -sirve de H1 y de lo que un sistema de IA cita-.
 *
 * `borrador` saca el articulo del indice y de [slug] sin borrar el archivo:
 * util para escribir uno y revisarlo antes de publicarlo.
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    titulo: z.string(),
    pregunta: z.string(),
    descripcion: z.string(),
    fecha: z.date(),
    borrador: z.boolean().optional(),
  }),
});

export const collections = { blog };
