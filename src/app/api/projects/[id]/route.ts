import { userMiddleware } from "../../_middlewares/auth.middleware";
import { updateProjectHandler } from "../edit-project.route";
import { getOneProjectHandler } from "../get-one-project.route";

export const GET = userMiddleware(getOneProjectHandler);

export const PATCH = userMiddleware(updateProjectHandler);
