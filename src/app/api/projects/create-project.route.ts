import createProject from "@/server/projects/create-project";
import { CreateProjectDto } from "@/server/projects/dtos/create-project.dto";
import { NextApiHandler } from "next";
import { NextResponse } from "next/server";

export const createProjectHandler: NextApiHandler = async (req) => {
  try {
    const projectData = CreateProjectDto.parse(req.body);
    const project = await createProject(projectData)
    return NextResponse.json({
      message: 'Project Created',
      data: project
    })

  } catch (error) {

    return NextResponse.json({
      message: 'Error while creating Project'
    })
  }
}
