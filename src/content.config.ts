import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "src/contents/posts",
  }),
  schema: z.object({
    title: z.string(),
    published: z.date(),
    draft: z.boolean().optional(),
    description: z.string().optional(),
    cover: z.string().optional(),
    tags: z.array(z.string()).optional(),
    category: z.string().optional(),
    author: z.string().optional(),
    sourceLink: z.string().optional(),
    licenseName: z.string().optional(),
    licenseUrl: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "src/contents/projects",
  }),
  schema: z.object({
    title: z.string(),
    published: z.date(),
    draft: z.boolean().optional(),
    description: z.string().optional(),
    // Card / hero image, e.g. "/images/pam.png"
    cover: z.string().optional(),
    // Extra images rendered in a gallery below the body.
    gallery: z.array(z.string()).optional(),
    // Shown as chips on the card and the detail page.
    technologies: z.array(z.string()).optional(),
    // Lower numbers sort first on the projects grid; unset sorts last.
    order: z.number().optional(),
    // Optional outbound links.
    repoLink: z.string().optional(),
    demoLink: z.string().optional(),
  }),
});

const specs = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "src/contents/specs",
  }),
});

export const collections = { posts, projects, specs };
