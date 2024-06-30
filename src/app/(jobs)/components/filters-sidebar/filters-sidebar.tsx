"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown, FilterIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";

export function Filter() {
  return <MobileFilters />;
}

export function MobileFilters() {
  return (
    <div className="flex md:flex-col w-full gap-2 md:max-w-[200px]">
      <Sheet>
        <SheetTrigger className="w-full flex items-center" asChild>
          <Button className="bg-white text-black hover:bg-background border-input border-2">
            <FilterIcon />
            Filter settings
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom">
          <GeneralFilter />
        </SheetContent>
      </Sheet>
      <Sheet>
        <SheetTrigger className="w-full flex items-center" asChild>
          <Button
            className="bg-white text-black hover:bg-background border-input border-2"
            variant="ghost"
          >
            Filter by
            <ChevronDown />
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom">
          <ul className="flex flex-col text-start items-start">
            <Button asChild variant="link">
              <li>
                <Link href="#">Most Relevant</Link>
              </li>
            </Button>
            <Button asChild variant="link">
              <li>
                <Link href="#">Newest</Link>
              </li>
            </Button>
            <Button asChild variant="link">
              <li>
                <Link href="#">Oldest</Link>
              </li>
            </Button>
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export function DesktopFilter() {
  return <GeneralFilter />;
}

const GeneralFilter = () => {
  const { register, watch, setValue, control } = useForm({
    defaultValues: {
      projectSize: "any",
      dateOfPosting: "all-time",
      remuneration: "volunteer",
      typeOfRole: {
        backend: false,
        frontend: false,
        "full-stack": false,
      },
    },
  });

  return (
    <Card className="w-full max-w-xs border-none md:shadow-md">
      <CardHeader className="px-4 pt-4 pb-2">
        <CardTitle>Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 px-4">
        <div className="space-y-2">
          <Label htmlFor="any" className="text-base">
            Project size
          </Label>
          <RadioGroup
            defaultValue="any"
            onValueChange={(e) => {
              setValue("projectSize", e);
            }}
            {...register("projectSize")}
          >
            <ul className="space-y-1">
              <li className="flex items-center space-x-2">
                <RadioGroupItem value="any" id="any" defaultChecked />
                <Label htmlFor="any">Any</Label>
              </li>
              <li className="flex items-center space-x-2">
                <RadioGroupItem value="small" id="small" />
                <Label htmlFor="small"> Small </Label>
              </li>
              <li className="flex items-center space-x-2">
                <RadioGroupItem value="medium" id="medium" />
                <Label htmlFor="medium"> Medium </Label>
              </li>
              <li className="flex items-center space-x-2">
                <RadioGroupItem value="big" id="big" />
                <Label htmlFor="big"> Big </Label>
              </li>
            </ul>
          </RadioGroup>
        </div>
        <div className="space-y-2">
          <Label className="text-base">Date of posting</Label>
          <RadioGroup
            defaultValue="all-time"
            onValueChange={(e) => {
              setValue("dateOfPosting", e);
            }}
            {...register("dateOfPosting")}
          >
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all-time" id="all-time" defaultChecked />
                <Label htmlFor="all-time">All time</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="last-24-hours" id="last-24-hours" />
                <Label htmlFor="last-24-hours">Last 24 hours</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="last-3-days" id="last-3-days" />
                <Label htmlFor="last-3-days">Last 3 days</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="last-7-days" id="last-7-days" />
                <Label htmlFor="last-7-days">Last 7 days</Label>
              </div>
            </div>
          </RadioGroup>
        </div>
        <div className="space-y-2">
          <Label className="text-base">Remuneration</Label>
          <RadioGroup
            defaultValue="any-remuneration"
            onValueChange={(e) => {
              setValue("remuneration", e);
            }}
            {...register("remuneration")}
          >
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="any-remuneration"
                  id="any-remuneration"
                  defaultChecked
                />
                <Label htmlFor="any-remuneration">Paid</Label>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem value="paid" id="paid" />
                <Label htmlFor="paid">Paid</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="internship" id="internship" />
                <Label htmlFor="internship">Volunteer</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="work-remotely" id="work-remotely" />
                <Label htmlFor="work-remotely">Stock</Label>
              </div>
            </div>
          </RadioGroup>
        </div>
        <div className="space-y-2">
          <Label className="text-base">Type of role</Label>
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <Controller
                control={control}
                name="typeOfRole.backend"
                render={({ field: { onBlur, onChange, value } }) => (
                  <Checkbox
                    id="backend"
                    defaultChecked
                    checked={!!value}
                    onBlur={onBlur}
                    onCheckedChange={onChange}
                  />
                )}
              />
              <Label htmlFor="backend">Backend</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Controller
                control={control}
                name="typeOfRole.frontend"
                render={({ field: { onChange, onBlur, value } }) => (
                  <Checkbox
                    id="frontend"
                    onBlur={onBlur}
                    checked={!!value}
                    onCheckedChange={onChange}
                  />
                )}
              />
              <Label htmlFor="frontend">Frontend</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Controller
                control={control}
                name="typeOfRole.full-stack"
                render={({ field: { onChange, onBlur, value } }) => (
                  <Checkbox
                    id="full-stack"
                    onCheckedChange={onChange}
                    onBlur={onBlur}
                    checked={!!value}
                  />
                )}
              />
              <Label htmlFor="full-stack">Full-stack</Label>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
