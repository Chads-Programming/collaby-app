import { prisma } from "@/lib/prisma";

interface IDeleteProps {
  userId: string;
  id: string
}


export default async function deleteProject(
  { userId, id }: IDeleteProps) {
  try {
    return await prisma.projects.delete({
      where: {
        id,
        User: {
          id: userId
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
}
