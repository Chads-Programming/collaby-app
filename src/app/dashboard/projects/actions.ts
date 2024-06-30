
"use server";

import { CreateProjectDto } from "@/server/projects/dtos/create-project.dto";


export async function createProjectAction(data: unknown): Promise<boolean> {
  try {
    const projectData = CreateProjectDto.parse(data)


    projectData.title
    return true
  } catch (error) {
    return false
  }
}

