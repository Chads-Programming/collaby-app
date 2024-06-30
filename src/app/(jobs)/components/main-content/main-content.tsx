"use client";
import React from "react";
import { Pagination } from "@/app/(jobs)/components";
import {
  DesktopFilter,
  MobileFilters,
} from "../filters-sidebar/filters-sidebar";
import dynamic from "next/dynamic";
import { Projects } from "@prisma/client";

interface Props {
  projects: Projects[];
}
const JobCard = dynamic(
  () => import("@/app/(jobs)/components").then((m) => m.JobCard),
  {
    ssr: false,
  },
);

export function MainContent(props: Props) {
  return (
    <div className="flex flex-col gap-10  p-10 md:flex-row">
      <aside className="hidden w-60 md:flex">
        <DesktopFilter />
      </aside>
      <header className="flex md:hidden">
        <MobileFilters />
      </header>
      <section className="flex max-w-3xl flex-1 flex-col gap-5 py-10 md:py-0">
        {props.projects?.map((project, i) => (
          <JobCard
            key={i + i}
            logo={project.logoUrl ?? ""}
            platform="Notion"
            title={project.title}
            slug="software-engineer"
            location="Madrid"
            budget={"50-80"}
            date={new Date()}
            isNew={true}
            description={project.description ?? "el pepe"}
          />
        ))}
        <Pagination currentPage={1} />
      </section>
    </div>
  );
}
