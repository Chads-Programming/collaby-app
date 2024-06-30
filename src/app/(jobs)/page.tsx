import Image from "next/image";
import { NavBar } from "@/app/components";
import { Hero, JobCard } from "@/app/(jobs)/components";
import { Filter } from "./components/filters-sidebar/filters-sidebar";

export default async function JobsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b text-white bg-background">
      <NavBar />
      <section>
        <Hero />
        <Filter />
      </section>

      <JobCard
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
      {/* <Image src="/collaby-logo.svg" width={200} height={200} alt="logo" /> */}
    </main>
  );
}
