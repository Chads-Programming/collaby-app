import {
  useValidationMiddleware,
  zodQuery
} from "./../_middlewares/validation-middleware";
import { withMiddleware } from "../_middlewares/with-middleware";
import { getAllProjectHandler } from "./get-all-projects.route";
import { ProjectFiltersDto } from "./me/dtos/project-filter.dto";

export const dynamic = "force-dynamic";

export const GET = withMiddleware([useValidationMiddleware({
  query: zodQuery(ProjectFiltersDto as any)
})], getAllProjectHandler)

