import type { ParamsFilters } from "./types";
import { type NextRequest, NextResponse } from "next/server";
import type { NextHandler } from "@/types";
import getAllProjects from "@/server/projects/get-all-projects";

<<<<<<< HEAD
export const getAllProjectHandler: NextHandler = async (req: NextRequest) => {
=======
import { NextResponse } from "next/server";
import { NextHandler } from "@/types";

export const getAllProjectsHandler: NextHandler = async (
  _req,
  {
    params,
  }: {
    params: { id: string };
  },
) => {
>>>>>>> 68ad7d1deb5808f7d8f933858d13cbd61df5bf03
  try {
    const URLParamsQuery = new URLSearchParams(req.url);

    const extractParams: ["size", "date", "remuneration", "role"] = [
      "size",
      "date",
      "remuneration",
      "role",
    ];

    const params = extractParams.map((param) => {
      return {
        [param]: URLParamsQuery.get(param),
      };
    }) as ParamsFilters;

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
