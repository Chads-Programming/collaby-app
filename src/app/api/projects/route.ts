import createProject from "@/server/projects/create-project";
import { userMiddleware } from "../_middlewares/auth.middleware";


export POST = userMiddleware(createProject)
