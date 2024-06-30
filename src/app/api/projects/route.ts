import { getAllProjectHandler } from "./get-projects.route";
import { zodMiddleware } from "../_middlewares/zod.middleware";
import { bodyParserMiddleware } from "../_middlewares/body-parser.middleware";
import { ProjectFiltersDto } from "./dtos/project-filter.dto";
import { CreateProjectDto } from "@/server/projects/dtos/create-project.dto";
import { userMiddleware } from "../_middlewares/auth.middleware";
import { createProjectHandler } from "./create-project.route";

export const POST = bodyParserMiddleware(userMiddleware(zodMiddleware(createProjectHandler, {
  body: CreateProjectDto
})));

export const GET = bodyParserMiddleware(zodMiddleware(getAllProjectHandler, {
  search: ProjectFiltersDto
}));
