import { prisma } from "@/lib/prisma";
import type { ParamsFilters } from "@/app/api/projects/types";

export default async function getAllProjects(params: ParamsFilters) {
  try {
    const projects = await prisma.projects.findMany({
      where: {
        OR: [
          { size: params.size },
          { createdAt: params.date },
          { remuneration: params.remuneration },
          { role: params.role },
        ],
      },
    });

    return projects;
  } catch (error) {
    console.log("testing");
  }
}
