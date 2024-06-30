import { NextApiHandler } from "next";
import { NextResponse } from "next/server";
import { UpdateProjectDto } from "../../../server/projects/dtos/update-project.dto";
import updateProject from "@/server/projects/edit-project";
import getOneProject from "@/server/projects/get-one-project";

export const getOneProjectHandler: NextApiHandler = async (
  _req,
  {
    params,
  }: {
    params: { id: string };
  },
) => {
  try {
    const id = params.id;

    const update = await getOneProject(id);

    return NextResponse.json({
      message: "Project find by id",
      data: update,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error while editing Project",
    });
  }
};
