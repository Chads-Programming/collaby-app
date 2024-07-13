import { prisma } from "@/lib/prisma";
import { Infer } from "@/globals";
import { ProjectFiltersDto } from "@/app/api/projects/me/dtos/project-filter.dto";

export default async function getAllProjects({
  size,
  role,
  remuneration,
  page,
  count,
}: Infer<typeof ProjectFiltersDto>) {
  try {
    console.log({
      where: {
        size: size || undefined,
      },
      orderBy: {
        createdAt: "desc"
      },
      take: count,
      skip: (count ?? 10) * (page ?? 0),
    })
    const projects = await prisma.projects.findMany({
      where: {
        size: size || undefined,
      },
      orderBy: {
        createdAt: "desc"
      },
      take: count,
      skip: (count ?? 10) * (page ?? 0),
    });

    console.log("executed", projects);
    return projects;
  } catch (error) {
    console.log(error)
  }
  console.log("testing");
}
