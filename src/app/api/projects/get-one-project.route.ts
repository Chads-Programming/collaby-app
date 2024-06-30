import { NextApiHandler } from "next";
import { NextResponse } from "next/server";
import getOneProject from "@/server/projects/get-one-project";

export const getOneProjectHandler: NextApiHandler = async (req) => {
  try {
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
