import z from 'zod'


const createProjectSchema = z.object({
  title: z.string()
})
