import { userMiddleware } from "../_middlewares/auth.middleware";
import { createProjectHandler } from "./create-project.route";


export const POST = userMiddleware(createProjectHandler)
