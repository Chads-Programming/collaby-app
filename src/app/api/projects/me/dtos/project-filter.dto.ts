import { Remuneration, Role as ProjectRole, Size } from "@prisma/client";
import { z } from "zod";

export type ParamsFilters = {
	size?: Size;
	date?: string;
	remuneration?: string;
	role?: string;
};

export const ProjectFiltersDto = z
	.object({
		size: z.nativeEnum(Size),
		remuneration: z.nativeEnum(Remuneration),
		role: z.nativeEnum(ProjectRole),
		date: z.date(),
		page: z.string().transform((x) => parseInt(x)),
		count: z.string().transform((x) => parseInt(x)),
	})
	.partial();
