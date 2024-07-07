import { createProjectHandler } from "./create-project.route";
import { zodMiddleware } from "../../_middlewares/zod.middleware";
import {
  useValidationMiddleware,
  zodQuery
} from "../../_middlewares/validation-middleware";
import { withMiddleware } from "../../_middlewares/with-middleware";
import { authMiddleware, userMiddleware } from "../../_middlewares/auth.middleware";
import { CreateProjectDto } from "@/server/projects/dtos/create-project.dto";
import { ProjectFiltersDto } from "./dtos/project-filter.dto";
import { getAllProjectHandler } from "./get-projects.route";

export const POST = userMiddleware(
  zodMiddleware(createProjectHandler, {
    body: CreateProjectDto,
  }),
)

//TODO: Replace this to get all the user stuff
export const GET = withMiddleware(
  [
    authMiddleware,
    useValidationMiddleware({
      query: zodQuery(ProjectFiltersDto),
    }),
  ],
  getAllProjectHandler
);

