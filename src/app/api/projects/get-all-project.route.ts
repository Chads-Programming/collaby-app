import { NextApiHandler } from "next";
import { NextResponse } from "next/server";

export const getAllProjectsHandler: NextApiHandler = async (req) => {
  try {
    const URLParamsQuery = new URLSearchParams(req.url);

    const extractParams = ["size", "date", "remuneration", "role"];

    const params = extractParams.map((param) => {
      return {
        [param]: URLParamsQuery.get(param),
      };
    });

    const project = await getAllProjects(params);

    return NextResponse.json({
      message: "Project find by id",
      data: project,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error while editing Project",
    });
  }
};
