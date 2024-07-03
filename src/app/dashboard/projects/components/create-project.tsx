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
import type { Infer } from "@/globals";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import useSWRMutation from "swr/mutation";
import { CreateProjectDto } from "@/server/projects/dtos/create-project.dto";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { toast } from "sonner";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Uploader } from "@/app/components/common/uploader";
import { MultiSelect } from "@/components/ui/multi-select";
import { TECHNOLOGIES } from "@/lib/constants";

async function createProject(
  url: string,
  { arg }: { arg: Infer<typeof CreateProjectDto> },
) {
  return await fetch(url, {
    method: "POST",
    body: JSON.stringify(arg),
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export const CreateProjectModal = () => {
  const form = useForm<Infer<typeof CreateProjectDto>>({
    defaultValues: {
      description: "",
      title: '',
      role: 'FULLSTACK',
      size: 'ANY',
      logoUrl: 'https://placehold.co/200x200',
      remuneration: 'VOLUNTEER'
    },
    resolver: zodResolver(CreateProjectDto),
  });
  const { register, handleSubmit, watch, setValue, control } = form
  const projectImage = watch("logoUrl");

  const { trigger } = useSWRMutation("/api/projects", createProject);
  async function onSubmit(data: Infer<typeof CreateProjectDto>) {
    try {
      console.log({ data })
      // const res = await trigger(data);
      // console.log({ res });
    } catch (error) {
      console.error({ error });
    }
  }
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Create project</SheetTitle>
        <SheetDescription>
          Make changes to your profile here. Click save when you re done.
        </SheetDescription>
      </SheetHeader>
      <Form {...form}>
        <form id="project-create" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 py-4">
            <FormField
              name="logoUrl"
              control={control}
              render={() => (
                <FormItem className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="description" className="text-right">
                    Logo
                  </Label>
                  <FormControl >
                    <Uploader
                      className="col-span-3"
                      onClientUploadComplete={(res: { url: string }[]) => {
                        // Do something with the response
                        if (res.length === 0) return;
                        setValue("logoUrl", res[0]!.url!);
                      }}
                      onUploadError={(error: Error) => {
                        // Do something with the error.
                        toast.error("Something went wrong!", {
                          description: error?.message,
                        });
                      }}
                    >
                      <Avatar className="flex justify-center items-center cursor-pointer w-24 h-24">
                        <AvatarImage
                          src={projectImage}
                          alt={'Project Image'}
                          width={20}
                          height={20}
                          className="w-24 h-24 object-cover object-center"
                        />
                      </Avatar>
                    </Uploader>
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                {...register("title")}
                id="title"
                placeholder="Project Title"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                {...register("description")}
                id="description"
                placeholder="Project Description"
                className="col-span-3"
              />
            </div>

          </div>
        </form>

      </Form>
      <SheetFooter>
        <Button form="project-create" type="submit">
          Create
        </Button>
      </SheetFooter>
    </SheetContent >
  );
};



/* tags multiselect
// {
//    <div className="grid grid-cols-4 items-center gap-4">
//     <Controller
//        name="tags"
//               control={control}
//               render={({ field: { onChange, onBlur, value } }) => (
//                 <MultiSelect
//                   placeholder="Technologies"
//                   options={TECHNOLOGIES.map((tech) => ({
//                     value: tech,
//                     label: tech,
//                   }))}
//                   onChange={(val) => {
//                     console.log(val, value);
//                     onChange([...value, val]);
//                   }}
//                   onBlur={onBlur}
//                   value={value}
//                 />
//               )}
//             />
//           </div>
// }
*/
