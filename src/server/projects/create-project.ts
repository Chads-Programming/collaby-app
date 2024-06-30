import { z } from 'zod';
import { CreateProjectDto } from './dtos/create-project.dto'
import type { Infer } from '@/globals';
import { prisma } from '@/lib/prisma';


export default async function createProject(data: Infer<typeof CreateProjectDto>) {
  try {
    const project = await prisma.post.create({
      data: {
        name: data.title
      }
    })
    console.log({ project })
    return project
  } catch (error) {
    console.log('testing')
  }
}
