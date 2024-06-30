import { Heading } from "@/app/components";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params: { slug } }: ProjectPageProps) {
  return (
    <header>
      <Heading>Project page. Slug: {slug}</Heading>
    </header>
  );
}
