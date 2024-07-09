import { Heading } from '@/app/components';
import { JobCard } from '@/app/(jobs)/components';
import Image from 'next/image';

interface ProjectPageProps {
	params: {
		slug: string;
	};
}

const getProject = () => ({
	logo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
	platform: 'Notion',
	title: 'Software Engineer',
	location: 'Madrid',
	budget: '50-80',
	description:
		'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex soluta incidunt explicabo fugit assumenda earum aut harum, non eius? Distinctio, sapiente pariatur iure dolorem nam.',
	date: new Date(),
	isNew: true,
});

export default function ProjectPage({ params: { slug } }: ProjectPageProps) {
	const { logo, title, platform, location, budget, description, date, isNew } = getProject();
	return (
		<main className="p-5">
			<header className="flex justify-start items-stretch gap-5 bg-secondary rounded-xl p-5">
				<div className="p-5 bg-primary rounded-xl">
					<Image src={logo} width={100} height={100} alt={platform} />
				</div>
				<div>
					<Heading size="lg">{title}</Heading>
					<div>
						<JobCard.Tags budget={budget} date={date} location={location} />
					</div>
				</div>
			</header>
		</main>
	);
}
