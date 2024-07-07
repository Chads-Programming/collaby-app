import { type NextRequest, NextResponse } from "next/server";
import type { NextHandler } from "@/types";
import getAllProjects from "@/server/projects/get-all-projects";
import { ProjectFiltersDto } from "./dtos/project-filter.dto";

export const getAllProjectHandler: NextHandler = async (req: NextRequest) => {
	try {
		const { searchParams } = new URL(req.url);
		const objParams = Object.fromEntries(searchParams.entries());

		const params = ProjectFiltersDto.parse(objParams);
		const project = await getAllProjects(params)

		return NextResponse.json({
			message: "Project find by id",
			data: project,
			params,
		});
	} catch (error) {
		return NextResponse.json({
			message: "Error while editing Project",
		});
	}
};
