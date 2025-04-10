import { defineCollection, z } from "astro:content";

const imoveisCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    categoria: z.string(),
    location: z.string(),
    price: z.string(),
    area_total: z.string(),
    area_construida: z.string(),
    bedrooms: z.number(),
    suites: z.number().optional(),
    bathrooms: z.number().optional(),
    parking: z.number().optional(),
    image: z.string(),
    imagens: z.array(z.string()).optional(),
    published: z.boolean().default(true),
    city: z.string(),
    state: z.string(),
  })
});

export const collections = {
  imoveis: imoveisCollection,
};
