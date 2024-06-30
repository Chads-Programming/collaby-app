import { userMiddleware } from "../../_middlewares/auth.middleware";
import { updateProjectHandler } from "../edit-project.route";

export const PATCH = userMiddleware(updateProjectHandler);
