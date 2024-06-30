import getProjects from "@/server/projects/get-projects"
import { NextHandler } from "@/types"
import { currentUser } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

const getProjectsHandler: NextHandler = async (req) => {
  const user = await currentUser()
  const projects = await getProjects({
    userId: user?.id
  })
  return NextResponse.json({
    message: 'Found Projects',
    data: projects
  })
}

export default getProjectsHandler
