import { NextResponse } from "next/server";
import getOneProject from "@/server/projects/get-one-project";
<<<<<<< HEAD
import type { NextHandler } from "@/types";
=======
import { NextHandler } from "@/types";
>>>>>>> 68ad7d1deb5808f7d8f933858d13cbd61df5bf03

export const getOneProjectHandler: NextHandler = async (
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
