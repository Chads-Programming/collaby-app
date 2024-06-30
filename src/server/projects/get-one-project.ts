import { prisma } from "@/lib/prisma";

export default async function getOneProject(id: string) {
  try {
    const project = await prisma.projects.findUnique({
      where: { id },
    });

    return project;
  } catch (error) {
    console.log("testing");
  }
}
