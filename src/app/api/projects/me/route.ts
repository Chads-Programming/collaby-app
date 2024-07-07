import { getAllProjectHandler } from "./get-projects.route";
import { createProjectHandler } from "./create-project.route";
import { userMiddleware } from "../../_middlewares/auth.middleware";
import { zodMiddleware } from "../../_middlewares/zod.middleware";
import { CreateProjectDto } from "@/server/projects/dtos/create-project.dto";
import { ProjectFiltersDto } from "./dtos/project-filter.dto";

export const POST = userMiddleware(
  zodMiddleware(createProjectHandler, {
    body: CreateProjectDto,
  }),
)

//TODO: Replace this to get all the user stuff
export const GET = zodMiddleware(getAllProjectHandler, {
  search: ProjectFiltersDto,
})
