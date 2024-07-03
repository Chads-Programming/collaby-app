import { getAllProjectHandler } from "./get-projects.route";
import { createProjectHandler } from "./create-project.route";
import { userMiddleware } from "../../_middlewares/auth.middleware";
import { zodMiddleware } from "../../_middlewares/zod.middleware";
import { bodyParserMiddleware } from "../../_middlewares/body-parser.middleware";
import { CreateProjectDto } from "@/server/projects/dtos/create-project.dto";
import { ProjectFiltersDto } from "./dtos/project-filter.dto";

export const POST = bodyParserMiddleware(
	userMiddleware(
		zodMiddleware(createProjectHandler, {
			body: CreateProjectDto,
		}),
	),
);

//TODO: Replace this to get all the user stuff
export const GET = bodyParserMiddleware(
	zodMiddleware(getAllProjectHandler, {
		search: ProjectFiltersDto,
	}),
);
