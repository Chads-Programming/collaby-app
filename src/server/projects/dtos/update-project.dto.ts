import { z } from "zod";
import { CreateProjectDto } from "./create-project.dto";

export const UpdateProjectDto = CreateProjectDto.extend({
  title: z.string().min(4).optional(),
});
