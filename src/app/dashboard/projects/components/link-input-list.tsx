"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Plus, Trash } from "lucide-react";
import { useState } from "react";

interface Link {
  logoUrl: string;
  name: string;
  value: string;
}

interface Props {
  links?: Link[];
}

export const LinkInputList = ({ links = [] }: Props) => {
  const [entryLinks, setLinks] = useState(links);

  const handleAddLink = () => {
    setLinks((old) => [
      ...old,
      {
        logoUrl: "",
        name: "",
        value: "",
      },
    ]);
  };

  const handleRemove = (index: number) => {
    entryLinks.splice(index, 1);

    setLinks([...entryLinks])
  }

  return (
    <div className="flex flex-col gap-2">
      {entryLinks.map((link, index) => (
        <div key={`${link.name}-${index}`} className="inline-flex gap-2 items-center justify-start rounded-md border border-border/55 p-2">
          <div
            className="relative flex flex-col gap-2 w-full"
          >
            <div className="inline-flex items-center justify-start gap-2">
              <Label
                htmlFor={`links.${index}.logoUrl`}
                className="basis-1/3 text-pretty text-sm"
              >
                Logo url
              </Label>
              <Input
                className="w-full"
                id={`links.${index}.logoUrl`}
                name={`links.${index}.logoUrl`}
                placeholder="Enter a logo url"
              />
            </div>

            <div className="inline-flex items-center justify-start gap-2">
              <Label
                htmlFor={`links.${index}.logoUrl`}
                className="basis-1/3 text-pretty text-sm"
              >
                Name *
              </Label>
              <Input
                id={`links.${index}.name`}
                name={`links.${index}.name`}
                placeholder="Enter a link name"
              />
            </div>
            <div className="inline-flex items-center justify-start gap-2">
              <Label
                htmlFor={`links.${index}.value`}
                className="basis-1/3 text-pretty text-sm"
              >
                Url
              </Label>
              <Input
                id={`links.${index}.value`}
                name={`links.${index}.value`}
                placeholder="Enter the full url"
              />
            </div>
          </div>

          <Trash role="button" className="cursor-pointer" onClick={() => handleRemove(index)} />
        </div>
      ))}
      <Button
        type="button"
        onClick={handleAddLink}
        variant="outline"
        className="inline-flex items-center justify-center"
      >
        <Plus /> Add link
      </Button>
    </div>
  );
};
