import React, { useMemo, useState } from "react";
import { CheckCircle2Icon, ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "./button";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

export interface SelectItem<T> {
  value: number | string;
  label: string;
  data: T;
}

interface Props<T> {
  items: SelectItem<T>[];
  placeholder?: string;
  value?: number | string;
  renderValue?: (item: SelectItem<T>, selected: boolean) => React.ReactNode;
  onSelect: (item: SelectItem<T>) => void;
  children: (item: SelectItem<T>, selected: boolean) => React.ReactNode;
}

export const Select = <T,>({
  items,
  value,
  placeholder = "Select an option",
  onSelect,
  children: renderItem,
  renderValue = renderItem,
}: Props<T>) => {
  const [currentValue, setSelectedValue] = useState(value?.toString());
  const [isOpen, setOpen] = useState(false);

  const valueContent = useMemo(() => {
    const option = items.find((item) => item.value.toString() === currentValue);

    if (!option) {
      return placeholder;
    }

    return renderValue(option, true);
  }, [currentValue, items, placeholder, renderItem]);

  return (
    <Popover open={isOpen} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={isOpen}
          className="min-w-14 justify-between px-1"
        >
          {valueContent}
          {
            <ChevronDown
              className={cn(
                "ml-2 h-4 w-4 shrink-0 rotate-0 opacity-50 transition-all ease-in",
                {
                  ["rotate-180"]: isOpen,
                },
              )}
            />
          }
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[180px] p-0">
        <>
          <ul className="px-2 py-1">
            {items?.map((item) => (
              <li
                key={item.value}
                className="my-1 cursor-pointer rounded-md transition ease-in hover:bg-primary/50"
                onClick={() => {
                  setSelectedValue(item.value.toString());
                  setOpen(false);
                  onSelect(item);
                }}
              >
                <div className="inline-flex w-full items-center justify-start gap-2">
                  {renderItem(item, currentValue === item.value.toString())}
                  {currentValue === item.value.toString() && (
                    <CheckCircle2Icon className="h-5 w-5 text-primary/50" />
                  )}
                </div>
              </li>
            ))}
          </ul>
        </>
      </PopoverContent>
    </Popover>
  );
};