import { Heading, Paragraph } from "@/app/components";
import { JobCard } from "@/app/(jobs)/components";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface ProjectPageProps {
	params: {
		slug: string;
	};
}

const getProject = () => ({
	logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
	platform: "Notion",
	title: "Software Engineer",
	location: "Madrid",
	budget: "50-80",
	description:
		"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex soluta incidunt explicabo fugit assumenda earum aut harum, non eius? Distinctio, sapiente pariatur iure dolorem nam.",
	date: new Date(),
	isNew: true,
});

export default function ProjectPage({ params: { slug } }: ProjectPageProps) {
	const { logo, title, platform, location, budget, description, date, isNew } = getProject();
	return (
		<main className="bg-white rounded-xl m-5 p-5">
			<header className="flex justify-start items-start gap-5 rounded-xl">
				<div className="p-5 bg-primary rounded-xl">
					<Image src={logo} width={100} height={100} alt={platform} />
				</div>
				<div>
					<Heading size="lg">{title}</Heading>
					<JobCard.Tags budget={budget} date={date} location={location} />
					<div className="flex flex-wrap justify-start align-start gap-2">
						<Button asChild variant="link" className="p-0">
							<a href="https://github.com" target="_blank" rel="noreferrer noopener">
								https://github.com/notion/repo
							</a>
						</Button>

						<Button asChild variant="link" className="p-0">
							<a href="https://notion.so" target="_blank" rel="noreferrer noopener">
								https://notion.so
							</a>
						</Button>
					</div>
				</div>
			</header>

			<section>
				<JobCard.Paragraph className="max-w-2xl mt-5">{description}</JobCard.Paragraph>
			</section>
		</main>
	);
}
