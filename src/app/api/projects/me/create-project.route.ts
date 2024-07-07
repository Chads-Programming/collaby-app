import type { NextHandler } from "@/types";
import type { NextRequest } from "next/server";
import createProject from "@/server/projects/create-project";
import { NextResponse } from "next/server";
import { Infer } from "@/globals";
import { CreateProjectDto } from "@/server/projects/dtos/create-project.dto";

export const createProjectHandler: NextHandler = async (req: NextRequest) => {
  try {
    const body = await req.json() as unknown as Infer<typeof CreateProjectDto>;
    const project = await createProject(body);

    return NextResponse.json({
      message: "Project Created",
      data: project,
    });
  } catch (error) {
    console.log({ error });
    return NextResponse.json({
      message: "Error while creating Project",
    });
  }
};
