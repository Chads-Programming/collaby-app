import {
  useValidationMiddleware,
  zodBody,
  zodParams,
  zodQuery,
} from "./../_middlewares/validation-middleware";
import { NextRequest, NextResponse } from "next/server";
import { bodyParserMiddleware } from "../_middlewares/body-parser.middleware";
import { withMiddleware } from "../_middlewares/with-middleware";
import { zodMiddleware } from "../_middlewares/zod.middleware";
import { getAllProjectHandler } from "./get-all-projects.route";
import { ProjectFiltersDto } from "./me/dtos/project-filter.dto";
import { authMiddleware } from "../_middlewares/auth.middleware";
import { CreateProjectDto } from "@/server/projects/dtos/create-project.dto";

export const dynamic = "force-dynamic";

export const GET = zodMiddleware(getAllProjectHandler, {
    search: ProjectFiltersDto,
  })

export const POST = withMiddleware(
  [
    authMiddleware,
    useValidationMiddleware({
      body: zodBody(CreateProjectDto),
    }),
  ],
  async (req: NextRequest) => {
	const body = await req.json()

    return NextResponse.json({
      data: req.body,
	  body
    });
  },
);

