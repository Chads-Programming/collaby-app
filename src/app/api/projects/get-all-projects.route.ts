import { type NextRequest, NextResponse } from "next/server";
import type { NextHandler } from "@/types";
import getAllProjects from "@/server/projects/get-all-projects";
import { ProjectFiltersDto } from "./me/dtos/project-filter.dto";

export const getAllProjectHandler: NextHandler = async (req: NextRequest) => {
	try {
		const { searchParams } = new URL(req.url);
    console.log('1')
		const objParams = Object.fromEntries(searchParams.entries());
		const params = ProjectFiltersDto.parse(objParams);
    console.log('2')

		console.log({ params });
		const project = await getAllProjects({ count: 5, page: 0, ...params });
		console.log(project);
		return NextResponse.json({
			message: "Project find by id",
			data: project,
			params,
		});
	} catch (error) {
		console.log({ error });
		return NextResponse.json({
			message: "Error while editing Project",
		});
	}
};
