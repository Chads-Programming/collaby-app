import createProject from "./create-project";
import { userMiddleware } from "../_middlewares/auth.middleware";


export const POST = userMiddleware(createProject)

export const GET = () => {
  console.log('nashep :v')
}
