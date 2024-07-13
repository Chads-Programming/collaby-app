"use client";

import { useModalStore } from "@/app/shared/store/modal-store";
import { Button } from "@/components/ui/button";
import { CreateProjectModal } from "./components/create-project";
import useSwr from 'swr'
import { CardWithImage } from "@/app/components/common/card/card-with-image";
import { Projects as IProject, Projects } from "@prisma/client";
import { Loader2 as Loader } from "lucide-react";
import Link from "next/link";
import { CreateProjectDto } from "@/server/projects/dtos/create-project.dto";

const fetcher = (url: string) => fetch(url, { credentials: 'include' }).then(r => r.json()).then(({ data }) => data || [])

export default function Projects() {
  const { openModal } = useModalStore();

  const handleCreateProject = () => {
    openModal({
      component: CreateProjectModal
    });
  };
  const { data: projects = [], isLoading } = useSwr<IProject[]>('/api/projects/me', fetcher);
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl">Projects</h1>
        <Button className="mt-4" onClick={handleCreateProject}>
          Add project
        </Button>

      </div>
      <div
        className="flex flex-1 w-full rounded-lg border border-dashed shadow-sm flex-wrap gap-4 p-4  "
      >
        <ProjectList data={projects} handleCreateProject={handleCreateProject} isLoading={isLoading} />
      </div>
    </main>
  );
}

interface IProjectListProps {
  data: IProject[];
  handleCreateProject: () => void;
  isLoading: boolean
}
function ProjectList({ data, handleCreateProject, isLoading }: IProjectListProps) {

  if (isLoading) return <Loader className="mx-auto self-center animate-spin size-10" />
  if (!data.length) return <EmptyListContent openModal={handleCreateProject} />
  return <>
    {data.map((data) => <CardWithImage footer={<ProjectFooter project={data} />} className="min-w-[250px] max-w-[450px] lg:max-w-[320px] flex-1" key={data.id} title={data.title} description={data.description || undefined} imageUrl={data.logoUrl || undefined} />)}
  </>
}

interface IProjectFooterProps {
  project: Projects
}

function ProjectFooter({ project }: IProjectFooterProps) {
  const { openModal } = useModalStore();

  function editProjectModal() {
    try {
      const data = CreateProjectDto.parse({ ...project, size: project.size || undefined, remuneration: project.remuneration || undefined, role: project.role || undefined }, {})
      openModal({
        component: CreateProjectModal,
        props: { data: { ...data, id: project.id } }
      })

    } catch (error) {
      console.log(error)
    }
  }

  return (<div className="px-2">
    <Button onClick={editProjectModal} className="w-full rounded-lg">Edit</Button>
  </div>
  )
}

interface IEmptyListProps {
  openModal: () => void;
}
function EmptyListContent({ openModal }: IEmptyListProps) {
  return (
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
        <Button className="mt-4" onClick={openModal}>
          Add project
        </Button>
      </div>
    </div>
  )
}


