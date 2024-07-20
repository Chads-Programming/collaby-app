import type { CreateProjectDto } from "./dtos/create-project.dto";
import type { Infer } from "@/globals";
import { prisma } from "@/lib/prisma";

export default async function createProject(
  data: Infer<typeof CreateProjectDto>,
) {
  try {
    const project = await prisma.projects.create({
      data: {
        ...data,
        links: undefined
      },
    });
    return project;
  } catch (error) {
    console.log(error);
  }
}
