/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { userMiddleware } from "@/app/api/_middlewares/auth.middleware"
import { editProjectHandler } from "./edit-project.route";
import { getProjectByIdHandler } from "./get-project-by-id.route";
import { deleteProjectHandler } from "./delete-project.route";

export const GET = getProjectByIdHandler;
export const PATCH = userMiddleware(editProjectHandler);
export const DELETE = userMiddleware(deleteProjectHandler);
