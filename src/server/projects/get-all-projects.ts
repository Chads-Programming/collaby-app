import { prisma } from "@/lib/prisma";
import type { ParamsFilters } from "@/app/api/projects/types";

export default async function getAllProjects(params: ParamsFilters) {
  try {
    const projects = await prisma.projects.findMany();

    return projects;
  } catch (error) {
    console.log("testing");
  }
}
