"use client";

import Facebook from "@/app/shared/icons/facebook";
import Github from "@/app/shared/icons/github";
import GitLab from "@/app/shared/icons/gitlab";
import Linkedin from "@/app/shared/icons/linkedin";
import YouTube from "@/app/shared/icons/youtube";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectItem } from "@/components/ui/select";
import { CreateProjectDto } from "@/server/projects/dtos/create-project.dto";
import { LinkType } from "@prisma/client";
import { Globe, Plus, Trash } from "lucide-react";
import { useState } from "react";
import { FieldErrors, useFieldArray, useFormContext } from "react-hook-form";
import type { Infer } from "@/globals";
import Instagram from "@/app/shared/icons/instagram";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { cn } from "@/lib/utils";

type FormData = Infer<typeof CreateProjectDto>;
interface LinkTypeEntry {
  type: LinkType;
}

const ITEMS: SelectItem<LinkTypeEntry>[] = Object.entries(LinkType).map(
  ([_, value]) => ({ data: { type: value }, label: value, value }),
);

const ICONS = {
  [LinkType.FACEBOOK]: <Facebook />,
  [LinkType.GITHUB]: <Github />,
  [LinkType.GITLAB]: <GitLab />,
  [LinkType.YOUTUBE]: <YouTube />,
  [LinkType.LINKEDIN]: <Linkedin />,
  [LinkType.INSTAGRAM]: <Instagram />,
  [LinkType.OTHER]: <Globe />,
} as const;

export const LinkInputList = () => {
  const form = useFormContext<FormData>();
  const entryLinks = form.watch("links") ?? [];

  const { append, remove, update } = useFieldArray({
    control: form.control,
    name: "links",
  });

  const handleAddLink = () => {
    append({ type: LinkType.OTHER, url: "" });
  };

  const handleRemove = (index: number) => {
    remove(index);
  };

  const handleSelectChange = (index: number, type: LinkType) => {
    const link = form.getValues(`links.${index}`);

    const updatedLink = {
      ...link,
      type,
    };

    update(index, updatedLink);
  };

  const renderUrlError = (index: number) => {
    const linksErrors = form.formState.errors?.links || [];

    const urlError = linksErrors[index]?.url?.message;

    if (!urlError) {
      return null;
    }

    return (
      <span className="w-full text-center text-xs text-destructive">
        {urlError}
      </span>
    );
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <div
        className={cn(
          "flex max-h-[300px] w-full flex-col gap-2 overflow-y-auto rounded-md border border-border/50",
          {
            ["visible"]: !!entryLinks.length,
            ["invisible"]: !entryLinks.length,
          },
        )}
      >
        {entryLinks.map((link, index) => (
          <div
            key={`${link.type}-${index}`}
            className="inline-flex items-center justify-start gap-2 rounded-md p-2"
          >
            <div className="relative flex w-full flex-col flex-wrap gap-2">
              <div className="inline-flex w-full justify-start gap-2 items-center">
                <div className="inline-flex basis-1/4 items-center justify-start gap-2">
                  <Select
                    placeholder="Type"
                    items={ITEMS}
                    value={form.getValues(`links.${index}.type`)}
                    onSelect={(item) =>
                      handleSelectChange(index, item.data.type)
                    }
                    renderValue={({ data }) => <LinkValue type={data.type} />}
                  >
                    {({ data }) => <LinkItem type={data.type} />}
                  </Select>
                </div>
                <div className="inline-flex flex-1 items-center justify-start gap-2">
                  <FormField
                    control={form.control}
                    name={`links.${index}.url`}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="https://github.com/repo"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <Trash
                  role="button"
                  className="cursor-pointer"
                  onClick={() => handleRemove(index)}
                />
              </div>
              {renderUrlError(index)}
            </div>
          </div>
        ))}
      </div>

      <Button
        type="button"
        onClick={handleAddLink}
        variant="outline"
        className="inline-flex w-full items-center justify-center"
      >
        <Plus /> Add link
      </Button>
    </div>
  );
};

const LinkItem = ({ type }: LinkTypeEntry) => {
  const icon = ICONS[type as keyof typeof ICONS];

  return (
    <div className="inline-flex items-center justify-between gap-2 p-2">
      {icon}{" "}
      <span className="text-pretty text-sm font-medium">
        {type.toLowerCase()}
      </span>
    </div>
  );
};

const LinkValue = ({ type }: LinkTypeEntry) => {
  const icon = ICONS[type as keyof typeof ICONS];

  return (
    <div className="inline-flex items-center justify-start gap-2 p-2">
      {icon}
    </div>
  );
};
