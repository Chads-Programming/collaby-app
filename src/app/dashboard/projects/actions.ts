
"use server";

import { createProjectSchema } from "@/app/api/projects/dtos/create-project.dto";

export async function createProjectAction(data: unknown): Promise<boolean> {
  try {
    const projectData = createProjectSchema.parse(data)

    projectData.title
    return true
  } catch (error) {
    return false
  }
}

