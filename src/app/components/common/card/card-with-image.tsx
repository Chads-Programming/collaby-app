import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

interface ICardBody {
  bodyClassName?: string;
  title: string;
  description?: string;
  imageUrl?: string;
}

const CardBody = ({ bodyClassName, title, description }: ICardBody) => (
  <div
    className={cn(
      "px-2 text-gray-100 sm:px-4 py-0 sm:pb-3 text-left",
      bodyClassName
    )}
  >
    <h3 className="text-lg font-bold tracking-tighter mt-3 mb-1">
      {title}
    </h3>
    <p className="text-sm leading-5 line-clamp-1">{description}</p>
  </div>
)
interface CardProps extends ICardBody {
  children?: React.ReactNode
  className?: string
}

export const CardWithImage = ({ children, imageUrl = "https://placehold.co/800x1000.png", className, ...card }: CardProps) => {
  return (
    <div className={cn("rounded-xl dark:bg-zinc-950 bg-zinc-50 overflow-hidden p-2 border pb-3 h-fit", className)}>
      <div className="relative aspect-video">
        <Image
          fill
          className="rounded-xl object-cover object-ceenter shadow-[0px_0px_10px_#A1A1AA] dark:shadow-[0px_0px_12px_rgb(39,39,42,0.7)]"
          src={imageUrl}
          alt="image"
        />
      </div>
      <CardBody bodyClassName="text-gray-800 dark:text-gray-200 mb-2 relative" {...card} />
      <div className="px-2">
        <Button className="w-full rounded-lg" asChild>
          <Link href="/docs/cards-with-image-bg">Edit</Link>
        </Button>
      </div>
    </div>
  )
}
