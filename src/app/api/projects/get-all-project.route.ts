import type { ParamsFilters } from "./types";
import { type NextRequest, NextResponse } from "next/server";
import type { NextHandler } from "@/types";
import getAllProjects from "@/server/projects/get-all-projects";

export const getAllProjectHandler: NextHandler = async (req: NextRequest) => {
  try {
    const URLParamsQuery = new URLSearchParams(req.url);

    const extractParams: ["size", "date", "remuneration", "role"] = [
      "size",
      "date",
      "remuneration",
      "role",
    ];

    // const params = extractParams.map((param) => {
    //   return {
    //     [param]: URLParamsQuery.get(param),
    //   };
    // }) as ParamsFilters[];

    const project = await getAllProjects();

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
