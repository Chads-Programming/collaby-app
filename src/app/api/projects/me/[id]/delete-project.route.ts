import { type NextRequest, NextResponse } from "next/server";
import type { NextHandler } from "@/types";
import { currentUser } from "@clerk/nextjs/server";
import deleteProject from "@/server/projects/delete-project";

export const deleteProjectHandler: NextHandler = async (
  _: NextRequest,
  { params }: { params: { id: string } },
) => {
  try {

    const projectId = params.id;
    const user = await currentUser()!

    const project = await deleteProject({
      id: projectId,
      userId: user!.id
    })
    return NextResponse.json({
      message: "Project Update",
      data: project,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error while editing Project",
    });
  }
};
