"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Infer } from "@/globals";
import React from "react";
import { useForm } from "react-hook-form";
import useSWRMutation from "swr/mutation"
import { CreateProjectDto } from '@/server/projects/dtos/create-project.dto'
import { zodResolver } from '@hookform/resolvers/zod'
async function createProject(url: string, { arg }: { arg: Infer<typeof CreateProjectDto> }) {
  return await fetch(url, {
    method: 'POST',
    body: JSON.stringify(arg),
    credentials: 'include',
    headers: {
      "Content-Type": "application/json"
    }
  })
}

export const CreateProjectModal = () => {
  const {
    register,
    handleSubmit
  } = useForm({
    defaultValues: {
      title: '',
      description: '',
      logoUrl: '',
      size: "ANY",
      remuneration: "VOLUNTEER",
      role: "BACKEND",
    },
    resolver: zodResolver(CreateProjectDto)
  })
  const { trigger } = useSWRMutation('/api/projects', createProject)
  async function onSubmit(data: Infer<typeof CreateProjectDto>) {
    try {
      const res = await trigger(data)
      console.log({ res })
    } catch (error) {
      console.error({ error })
    }
  }
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Create project</SheetTitle>
        <SheetDescription>
          Make changes to your profile here. Click save when you're done.
        </SheetDescription>
      </SheetHeader>
      <form id="project-create" onSubmit={handleSubmit(onSubmit as any)}>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input {...register('title')} id="title" placeholder="Project Title" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input {...register('description')} id="description" placeholder="Project Description" className="col-span-3" />
          </div>
        </div>
      </form>
      <SheetFooter>
        <Button form="project-create" type="submit">Create</Button>
      </SheetFooter>
    </SheetContent >
  );
};
