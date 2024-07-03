import { z } from "zod";
import { CreateProjectDto } from "./create-project.dto";

export const UpdateProjectDto = CreateProjectDto.extend({
  title: z.string().min(4).optional(),
  size: z.enum(["ANY", "SMALL", "MEDIUM", "BIG"]).optional(),
  remuneration: z.enum(["PAID", "VOLUNTEER", "STOCK"]).optional(),
  role: z.enum(["BACKEND", "FRONTEND", "FULLSTACK"]).optional(),
});
