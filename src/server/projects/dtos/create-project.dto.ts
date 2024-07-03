import { z } from "zod";

export const CreateProjectDto = z.object({
  title: z.string().min(4),
  description: z.string().optional(),
  logoUrl: z.string().optional(),
  size: z.enum(["ANY", "SMALL", "MEDIUM", "BIG"]),
  remuneration: z.enum(["PAID", "VOLUNTEER", "STOCK"]),
  role: z.enum(["BACKEND", "FRONTEND", "FULLSTACK"]),
});
