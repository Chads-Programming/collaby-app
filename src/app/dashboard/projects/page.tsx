"use client";

import { useModalStore } from "@/app/shared/store/modal-store";
import { Button } from "@/components/ui/button";
import { CreateProjectModal } from "./components/create-project";

export default function Projects() {
  const { openModal } = useModalStore();    

  const handleCreateProject = () => {
    openModal({
      component: CreateProjectModal
    });
  };

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Projects</h1>
      </div>
      <div
        className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
      >
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            You have no projects
          </h3>
          <p className="text-sm text-muted-foreground">
            You can start creating your projects right away.
          </p>
          <Button className="mt-4" onClick={handleCreateProject}>
            Add project
          </Button>
        </div>
      </div>
    </main>
  );
}
