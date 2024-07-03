type Size = ["ANY", "SMALL", "MEDIUM", "BIG"];
type Remuneration = ["PAID", "VOLUNTEER", "STOCK"];
type Role = ["BACKEND", "FRONTEND", "FULLSTACK"];

export interface BodyProject {
	id: string;
	title: string;
	logoUrl: string | null;
	description: string | null;
	size: ["ANY", "SMALL", "MEDIUM", "BIG"];
	remuneration: ["PAID", "VOLUNTEER", "STOCK"];
	role: ["BACKEND", "FRONTEND", "FULLSTACK"];
}
