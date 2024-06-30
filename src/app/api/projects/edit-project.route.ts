import { NextApiHandler } from "next";
import { NextResponse } from "next/server";
import { UpdateProjectDto } from "../../../server/projects/dtos/update-project.dto";
import updateProject from "@/server/projects/edit-project";

export const updateProjectHandler: NextApiHandler = async (
  req,
  { params }: { params: { id: string } },
) => {
  try {
    const id = params.id;
    const body = await req.json();

    const updateProjectData = UpdateProjectDto.parse(body);
    console.log(id);

    const update = await updateProject(updateProjectData, id);

    return NextResponse.json({
      message: "Project Update",
      data: update,
    });
  } catch (error) {
    console.log({ error });
    return NextResponse.json({
      message: "Error while editing Project",
    });
  }
};
