import React from "react";
import SearchProjectForm from "./search-project-form/search-project-form";
import AnimatedBgGrid from "@/components/ui/animated-bg-grid";

export function Hero() {
  return (
    <section className="relative z-10 shadow">
      <AnimatedBgGrid className="z-0" />
      <div className="flex flex-col gap-10 px-10 pt-4 md:px-20 md:pt-10 md:pb-4">
        <div className="space-y-2 md:space-y-6 text-black">
          <h1 className="text-3xl md:text-5xl font-semibold">
            Find a <span className="text-primary"> project </span>today.
          </h1>
          <p className="text-sm md:text-base">
            Thousands of open source projects are looking for developers who
            wants to create a strong portfolio and improve their skills.
          </p>
        </div>
        <SearchProjectForm />
      </div>
    </section>
  );
}
