import { bodyParserMiddleware } from "../_middlewares/body-parser.middleware";
import { zodMiddleware } from "../_middlewares/zod.middleware";
import { getAllProjectHandler } from "./get-all-projects.route";
import { ProjectFiltersDto } from "./me/dtos/project-filter.dto";

export const dynamic = "force-dynamic";
export const GET = bodyParserMiddleware(
	zodMiddleware(getAllProjectHandler, {
		search: ProjectFiltersDto,
	}),
);
