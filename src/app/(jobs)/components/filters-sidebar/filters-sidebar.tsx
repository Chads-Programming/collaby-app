import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FiltersSidebar() {
  return (
    <div className="flex md:flex-col w-full gap-2 md:max-w-[200px]">
      <Sheet>
        <SheetTrigger className="w-full flex items-center" asChild>
          <Button variant="outline">
            <Filter />
            Filter settings
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom">
          <ElPepeFilter />
        </SheetContent>
      </Sheet>
      <Sheet>
        <SheetTrigger className="w-full flex items-center" asChild>
          <Button variant="outline">
            <Filter />
            Filter by
          </Button>
        </SheetTrigger>
      </Sheet>
    </div>
  );
}

const ElPepeFilter = () => {
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
          <RadioGroup defaultValue="any">
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
                <RadioGroupItem value="80000k" id="80000k" />
                <Label htmlFor="80000k"> Big </Label>
              </li>
            </ul>
          </RadioGroup>
        </div>
        <div className="space-y-2">
          <Label className="text-base">Date of posting</Label>
          <RadioGroup defaultValue="all-time">
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
          <RadioGroup defaultValue="any-remuneration">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="any-remuneration"
                  id="any-remuneration"
                  defaultChecked
                />
                <Label htmlFor="any-remuneration">Payed</Label>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem value="payed" id="payed" />
                <Label htmlFor="payed">Payed</Label>
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
              <Checkbox id="full-time" defaultChecked />
              <Label htmlFor="full-time">Backend</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="temporary" />
              <Label htmlFor="temporary">Frontend</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="part-time" />
              <Label htmlFor="part-time">Full-stack</Label>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
