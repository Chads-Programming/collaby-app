import type { CreateProjectDto } from "./dtos/create-project.dto";
import type { Infer } from "@/globals";
import { prisma } from "@/lib/prisma";

export default async function createProject(
  data: Infer<typeof CreateProjectDto>,
) {
  try {
    const project = await prisma.projects.create({
      data: {
        title: data.title,
        logoUrl: data.logoUrl,
        description: data.description,
      },
    });
    console.log(JSON.stringify({ newProject: project }, null, 2))
    return project;
  } catch (error) {
    console.log(error);
  }
}
