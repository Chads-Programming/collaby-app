import { Hero } from "@/app/(jobs)/components";
import { MainContent } from "./components/main-content/main-content";
import { Size } from "@prisma/client";
import { projectsFetcher } from "@/lib/fetchers/projects/projectsFetcher";

export default async function JobsPage({
  searchParams: { page = "0", count = "5", size },
}: {
  searchParams: {
    page?: string;
    count?: string;
    size?: Size;
  };
}) {
  const projects = await projectsFetcher(`http://localhost:3000/api/projects`, {
    page,
    count,
    size
  });
  return (
    <main className="flex min-h-screen flex-col bg-muted bg-gradient-to-b text-white">
      <Hero />
      <MainContent projects={projects} />
    </main>
  );
}
