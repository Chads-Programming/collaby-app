import { userMiddleware } from "../_middlewares/auth.middleware";
import { createProjectHandler } from "./create-project.route";
import { getAllProjectsHandler } from "./get-all-project.route";

export const POST = userMiddleware(createProjectHandler);

export const GET = userMiddleware(getAllProjectsHandler);
