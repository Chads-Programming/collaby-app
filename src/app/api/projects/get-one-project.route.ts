// @ts-nocheck
import { NextResponse } from "next/server";
import getOneProject from "@/server/projects/get-one-project";
import type { NextHandler } from "@/types";

export const getOneProjectHandler: NextHandler = async (
  _req,
  {
    params
  }: any,
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
