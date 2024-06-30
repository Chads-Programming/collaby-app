import getAllProjects from "@/server/projects/get-all-projects";
import type { ParamsFilters } from "./types";

import { NextResponse } from "next/server";
import { NextHandler } from "@/types";

export const getAllProjectHandler: NextHandler = async (
  _req,
  {
    params,
  }: {
    params: { id: string };
  },
) => {
  try {
    const URLParamsQuery = new URLSearchParams(_req.url);

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
