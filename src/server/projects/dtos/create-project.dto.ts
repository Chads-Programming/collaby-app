import { Description } from "@radix-ui/react-dialog";
import { z } from "zod";

export const CreateProjectDto = z.object({
  title: z.string().min(4),
  description: z.string().optional(),
  logoUrl: z.string().optional()
})
