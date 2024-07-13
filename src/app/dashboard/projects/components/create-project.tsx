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
import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import useSWRMutation from "swr/mutation";
import { CreateProjectDto } from "@/server/projects/dtos/create-project.dto";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Uploader } from "@/app/components/common/uploader";
import { LinkInputList } from "./link-input-list";
import { useSWRConfig } from "swr";
import { Projects } from "@prisma/client";

async function createProject(
  url: string,
  { arg }: { arg: Infer<typeof CreateProjectDto> },
) {
  console.log('ain')
  console.log({ arg })
  return await fetch(url, {
    method: "POST",
    body: JSON.stringify(arg),
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
interface ICreateProjectModal {
  data?: Infer<typeof CreateProjectDto> & { id: string }
}
export const CreateProjectModal = ({ data }: ICreateProjectModal) => {
  const form = useForm<Infer<typeof CreateProjectDto>>({
    defaultValues: data || {
      description: "Chad buenardop",
      title: "Chad god",
      role: "FULLSTACK",
      size: "ANY",
      logoUrl: "https://placehold.co/300x300.png?text=No+Image",
      remuneration: "VOLUNTEER",
    },
    resolver: zodResolver(CreateProjectDto, {}),
  });
  const { handleSubmit, watch, setValue, control } = form;
  const isEdit = useMemo(() => !!data?.id, [data])
  const all = watch()
  console.log({ all })
  const { mutate } = useSWRConfig();
  const projectImage = watch("logoUrl");
  console.log({ data })
  const { trigger } = useSWRMutation("/api/projects/me", createProject);
  async function onSubmit(data: Infer<typeof CreateProjectDto>) {
    try {
      console.log('calli')
      const res = await trigger(data, {

      });
      console.log('callin2')
      mutate(key => typeof key === 'string' && key.startsWith('/api/projects/me'))
      toast.success("New project created successfully")
    } catch (error) {
      console.error({ error });
      toast.error("Error while creating new project")
    }
  }
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle>{isEdit ? "Create" : "Edit"} project</SheetTitle>
        <SheetDescription>
          Make changes to your project here. Click save when you re done.
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
                  <FormControl>
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
                      <Avatar className="flex h-24 w-24 cursor-pointer items-center justify-center">
                        <AvatarImage
                          src={projectImage}
                          alt={"Project Image"}
                          width={20}
                          height={20}
                          className="h-24 w-24 object-cover object-center"
                        />
                      </Avatar>
                    </Uploader>
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="title"
              render={({ field }) => (
                <FormItem className="w-full">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <FormLabel className="text-right">Title</FormLabel>
                    <FormControl className="col-span-3">
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="description"
              render={({ field }) => (
                <FormItem className="w-full">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <FormLabel className="text-right">Description</FormLabel>
                    <FormControl className="col-span-3">
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
          </div>
          <div className="flex w-full flex-col items-start gap-2">
            <span className="mb-2 text-right text-sm font-medium">
              Project links:
            </span>
            <LinkInputList />
          </div>
        </form>
      </Form>
      <SheetFooter>
        <Button form="project-create" type="submit" className="mt-2">
          {isEdit ? "Edit" : "Create"}
        </Button>
      </SheetFooter>
    </SheetContent>
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
