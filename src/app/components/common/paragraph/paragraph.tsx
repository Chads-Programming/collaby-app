import { cn } from "@/lib/utils";

type ParagraphTag = "p" | "span" | "i";
interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: ParagraphTag;
}

export const Paragraph = ({
  as: As = "p",
  className,
  ...props
}: ParagraphProps) => {
  return <As className={cn("text-sm md:text-base text-black", className)} {...props} />;
};
