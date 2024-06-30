import { z } from "zod";

export const CreateProjectDto = z.object({
  title: z.string(),
})
