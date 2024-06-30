import type { Infer } from "@/globals";
import { prisma } from "@/lib/prisma";
import type { UpdateProjectDto } from "./dtos/update-project.dto";

export default async function updateProject(
  data: Infer<typeof UpdateProjectDto>,
  id: string,
) {
  try {
    const project = await prisma.projects.update({
      where: {
        id,
      },
      data: {
        title: data.title,
        logoUrl: data.logoUrl,
        description: data.description,
      },
    });

    return project;
  } catch (error) {
    console.log({ error });
    console.log("testing");
  }
}