import { prisma } from "@/lib/prisma";
import { string } from "zod";

interface IGetProjectsArgs {
  userId?: string
}

export default async function getProjects({ userId }: IGetProjectsArgs) {
  const projects = await prisma.projects.findMany({
    where: {
      User: {
        id: userId
      }
    }
  })

  return projects

}
