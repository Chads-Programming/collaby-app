import createProject from "@/server/projects/create-project";
import { CreateProjectDto } from "@/server/projects/dtos/create-project.dto";
import type { NextHandler } from "@/types";
import { type NextRequest, NextResponse } from "next/server";
import { Infer } from "@/globals";

export const createProjectHandler: NextHandler = async (req: NextRequest) => {
  try {
    const body = req.body as unknown as Infer<typeof CreateProjectDto>
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
