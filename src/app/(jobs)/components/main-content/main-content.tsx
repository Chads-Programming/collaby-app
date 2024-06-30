"use client";
import React from "react";
import { Pagination } from "@/app/(jobs)/components";
import {
  DesktopFilter,
  MobileFilters,
} from "../filters-sidebar/filters-sidebar";
import dynamic from "next/dynamic";

const JobCard = dynamic(
  () => import("@/app/(jobs)/components").then((m) => m.JobCard),
  {
    ssr: false,
  },
);

export function MainContent() {
  return (
    <div className="flex flex-col gap-10  p-10 md:flex-row">
      <aside className="hidden w-60 md:flex">
        <DesktopFilter />
      </aside>
      <header className="flex md:hidden">
        <MobileFilters />
      </header>
      <section className="flex max-w-3xl flex-1 flex-col gap-5 py-10 md:py-0">
        {[1, 2, 3].map((_, i) => (
          <JobCard
            key={i + i}
            logo="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"
            platform="Notion"
            title="Software Engineer"
            slug="software-engineer"
            location="Madrid"
            budget={"50-80"}
            date={new Date()}
            isNew={true}
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex soluta
                incidunt explicabo fugit assumenda earum aut harum, non eius?
                Distinctio, sapiente pariatur iure dolorem nam."
          />
        ))}
        <Pagination currentPage={1} />
      </section>
    </div>
  );
}
