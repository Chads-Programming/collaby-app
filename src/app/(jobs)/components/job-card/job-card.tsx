import { Heading, Paragraph, Tag } from "@/app/components";
import { cn } from "@/lib/utils";
import { Calendar, CircleDollarSign, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface JobCardProps extends React.HTMLAttributes<HTMLDivElement> {
  logo: string;
  platform: string;
  title: string;
  slug: string;
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
  slug,
  location,
  budget,
  description,
  date,
  isNew,
  className,
  ...props
}: JobCardProps) => {
  return (
    <article
      className={cn(
        "items-start justify-start gap-5 bg-white p-5 shadow md:flex",
        className,
      )}
      {...props}
    >
      <div className="mb-5 flex items-center justify-start gap-2 md:mb-0 md:block">
        <Image
          src={logo}
          width={100}
          height={100}
          className="w-10 md:w-24"
          alt={"Logo"}
        />
        <Paragraph className="text-lg font-medium md:hidden">
          {platform}
        </Paragraph>
      </div>
      <div>
        <Paragraph className="mb-2 hidden font-medium md:block">
          {platform}
        </Paragraph>
        <div className="flex flex-col flex-wrap items-start justify-center gap-3 md:flex-row md:items-center md:justify-start">
          <Link href={`/project/${slug}`} className="md:order-0 order-1">
            <Heading>{title}</Heading>
          </Link>
          {isNew && <Tag className="order-0 md:order-1">New post</Tag>}
        </div>
        <div className="mt-2 flex flex-wrap items-start gap-5 md:gap-10">
          <Paragraph className="font-medium text-neutral-600">
            <MapPin
              className="-mt-1 mr-1 inline-block align-middle"
              size={15}
            />
            {location}
          </Paragraph>
          <Paragraph className="font-medium text-neutral-600">
            <CircleDollarSign
              className="-mt-1 mr-1 inline-block align-middle"
              size={15}
            />
            {budget}k
          </Paragraph>
          <Paragraph className="font-medium text-neutral-600">
            <Calendar
              className="-mt-1 mr-1 inline-block align-middle"
              size={15}
            />
            {date.toLocaleDateString()}
          </Paragraph>
        </div>

        <Paragraph className="mt-2 text-neutral-600">{description}</Paragraph>
      </div>
    </article>
  );
};
