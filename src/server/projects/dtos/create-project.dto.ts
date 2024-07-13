import { LinkType } from '@prisma/client';
import { z } from "zod";

const types = [
  LinkType.FACEBOOK,
  LinkType.GITHUB,
  LinkType.GITLAB,
  LinkType.INSTAGRAM,
  LinkType.LINKEDIN,
  LinkType.OTHER,
  LinkType.YOUTUBE,
] as const

export const ProjectLinksDto = z.object({
  type: z.enum(types),
  url: z.string().url()
})


export const CreateProjectDto = z.object({
  title: z.string().min(4),
  description: z.string().optional(),
  logoUrl: z.string().optional(),
  size: z.enum(["ANY", "SMALL", "MEDIUM", "BIG"]).default("ANY"),
  remuneration: z.enum(["PAID", "VOLUNTEER", "STOCK"]).default("VOLUNTEER"),
  role: z.enum(["BACKEND", "FRONTEND", "FULLSTACK"]).default("FULLSTACK"),
  links: z.array(ProjectLinksDto).optional()
});
