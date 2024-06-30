import createProject from "@/server/projects/create-project";
import { CreateProjectDto } from "@/server/projects/dtos/create-project.dto";
import { NextHandler } from "@/types";
import { NextResponse } from "next/server";

export const createProjectHandler: NextHandler = async (req) => {
  try {
    const body = await req.json();

    const projectData = CreateProjectDto.parse(body);

    const project = await createProject(projectData);

    return NextResponse.json({
      message: "Project Created",
      data: project,
    });
  } catch (error) {
    console.log({ error })
    return NextResponse.json({
      message: "Error while creating Project",
    });
  }
};
