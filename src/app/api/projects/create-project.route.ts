import createProject from "@/server/projects/create-project";
import { CreateProjectDto } from "@/server/projects/dtos/create-project.dto";
import type { NextHandler } from "@/types";
import { type NextRequest, NextResponse } from "next/server";
import type { BodyProject } from "./types";

export const createProjectHandler: NextHandler = async (req: NextRequest) => {
  try {
    const body = (await req.json()) as BodyProject;

    const projectData = CreateProjectDto.parse(body);

    const project = await createProject(projectData);

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
