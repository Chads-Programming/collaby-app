import React from "react";
import SearchProjectForm from "./search-project-form/search-project-form";
import AnimatedBgGrid from "@/components/ui/animated-bg-grid";
import { Heading, Paragraph } from "@/app/components";

export function Hero() {
  return (
    <section className="relative z-10 shadow bg-white">
      <AnimatedBgGrid className="z-0" />
      <div className="flex flex-col gap-10 px-10 pt-4 md:px-20 md:pb-4 md:pt-10">
        <div className="space-y-2 text-black md:space-y-6">
          <Heading as="h1" size="lg">
            Find a <span className="text-primary"> project </span>today.
          </Heading>
          <Paragraph>
            Thousands of open source projects are looking for developers who
            wants to create a strong portfolio and improve their skills.
          </Paragraph>
        </div>
        <SearchProjectForm />
      </div>
    </section>
  );
}
