import { defineCollection, z } from "astro:content";

const imoveisCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    categoria: z.string(),
    cidade: z.string(),
    estado: z.string().length(2),
    valor: z.string(),
    tamanho: z.string(),
    image: z.string(),
    imagens: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false)
  })
});

export const collections = {
  imoveis: imoveisCollection,
};