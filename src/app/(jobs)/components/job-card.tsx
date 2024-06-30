import { Heading, Paragraph } from "@/app/components";
import { cn } from "@/lib/utils";
import { Calendar, CircleDollarSign, MapPin, Timer } from "lucide-react";
import Image from "next/image";
interface JobCardProps extends React.HTMLAttributes<HTMLDivElement> {
  logo: string;
  platform: string;
  title: string;
  location: string;
  budget: string;
  description: string;
  date: Date;
  isNew?: boolean;
}

export const JobCard = ({
  logo,
  platform,
  title,
  location,
  budget,
  description,
  date,
  isNew,
  className = "",
  ...props
}: JobCardProps) => {
  return (
    <div
      className={cn(
        "flex max-w-3xl items-start justify-start gap-5 bg-white p-5 shadow",
        className,
      )}
      {...props}
    >
      <Image
        src={logo}
        width={100}
        height={100}
        className="w-16"
        alt={"Logo"}
      />
      <div>
        <Paragraph className="mb-2">{platform}</Paragraph>
        <div className="flex items-center justify-start gap-3">
          <Heading>{title}</Heading>
          {isNew && (
            <span className="rounded bg-indigo-500/20 px-2 py-1 text-sm font-medium text-indigo-500">
              New post
            </span>
          )}
        </div>
        <div className="mt-2 flex  items-start gap-10">
          <span className="text-base font-medium text-neutral-600">
            <MapPin
              className="-mt-1 mr-1 inline-block align-middle"
              size={15}
            />
            {location}
          </span>
          <span className="text-base font-medium text-neutral-600">
            <CircleDollarSign
              className="-mt-1 mr-1 inline-block align-middle"
              size={15}
            />
            {budget}k
          </span>
          <span className="text-base font-medium text-neutral-600">
            <Calendar
              className="-mt-1 mr-1 inline-block align-middle"
              size={15}
            />
            {date.toLocaleDateString()}
          </span>
        </div>

        <p className="mt-2 text-base text-neutral-600">{description}</p>
      </div>
    </div>
  );
};
