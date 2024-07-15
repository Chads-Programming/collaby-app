import { Heading, Paragraph, Tag } from "@/app/components";
import { JobCard, type JobCardProps } from "@/app/(jobs)/components";
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
	const { logo, platform, title, budget, date, location, description } = getProject();
	const headerProps = { logo, platform, title, budget, date, location };

	return (
		<main className="m-5">
			<div className="max-w-3xl mx-auto flex flex-col gap-5 [&>*]:p-5 [&>*]:rounded-xl">
				<ProjectHeader {...headerProps} />
				<ProjectContent description={description} />
			</div>
		</main>
	);
}

interface ProjectHeaderProps
	extends Pick<JobCardProps, "logo" | "platform" | "title" | "budget" | "date" | "location"> {}

const ProjectHeader = ({ logo, platform, title, budget, date, location }: ProjectHeaderProps) => {
	return (
		<header className="flex justify-start items-start gap-5 bg-white">
			<div className="p-5 bg-primary rounded-xl">
				<Image src={logo} width={100} height={100} alt={platform} />
			</div>
			<div>
				<JobCard.NewPostTag className="mb-2" />
				<Heading size="md" variant="featured">
					{title}
				</Heading>
				<JobCard.Tags budget={budget} date={date} location={location} />
				<div className="flex flex-col items-start justify-start mt-2 gap-1">
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
	);
};

interface ProjectContentProps extends React.PropsWithChildren, Pick<JobCardProps, "description"> {}

const ProjectContent = ({ description, ...props }: ProjectContentProps) => {
	return (
		<section className="bg-white" {...props}>
			<JobCard.Paragraph className="max-w-2xl">{description}</JobCard.Paragraph>
		</section>
	);
};
