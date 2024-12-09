import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const pages = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/pages" }),
  schema: () =>
    z.object({
      title: z.string().optional(),
    }),
});

const sections = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/sections" }),
  schema: () =>
    z.object({
      title: z.string().optional(),
      id: z.string(),
      link: z.string().optional(),
      linkLabel: z.string().optional(),
    }),
});

export const collections = {
  pages,
  sections,
};
