import Image from "next/image";
import { NavBar } from "@/app/components";
import { Hero, JobCard } from "@/app/(jobs)/components";
import { FiltersSidebar } from "./components/filters-sidebar/filters-sidebar";

export default async function JobsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-muted bg-gradient-to-b text-white">
      <NavBar />
      <Hero />
      <section className="items-start justify-start gap-10 p-10 md:flex">
        <FiltersSidebar />
        <div className="flex max-w-3xl flex-1 flex-col gap-5 py-10 md:py-0">
          {[1, 2, 3].map((_, i) => (
            <JobCard
              key={i + i}
              logo="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"
              platform="Notion"
              title="Software Engineer"
              location="Madrid"
              budget={"50-80"}
              date={new Date()}
              isNew={true}
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex soluta
                incidunt explicabo fugit assumenda earum aut harum, non eius?
                Distinctio, sapiente pariatur iure dolorem nam."
            />
          ))}
        </div>
      </section>

      {/* <Image src="/collaby-logo.svg" width={200} height={200} alt="logo" /> */}
    </main>
  );
}
