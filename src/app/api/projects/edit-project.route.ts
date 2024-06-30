import { type NextRequest, NextResponse } from "next/server";
import { UpdateProjectDto } from "../../../server/projects/dtos/update-project.dto";
import updateProject from "@/server/projects/edit-project";
import type { NextHandler } from "@/types";
import type { BodyProject } from "./types";

export const updateProjectHandler: NextHandler = async (
  req: NextRequest,
  { params }: { params: { id: string } },
) => {
  try {
    const id = params.id;
    const body = (await req.json()) as BodyProject;

    const updateProjectData = UpdateProjectDto.parse(body);

    const update = await updateProject(updateProjectData, id);

    return NextResponse.json({
      message: "Project Update",
      data: update,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error while editing Project",
    });
  }
};
