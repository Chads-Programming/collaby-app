import { userMiddleware } from "../_middlewares/auth.middleware";
import getOrCreateProfileHandler from "./get-or-create-profile.route";

export const POST = userMiddleware(getOrCreateProfileHandler);
