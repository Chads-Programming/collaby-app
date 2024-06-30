import { cn } from "@/lib/utils";

type ParagraphTag = "p" | "span" | "i";
interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: ParagraphTag;
}

export const Paragraph = ({
  as: As = "p",
  className = "",
  ...props
}: ParagraphProps) => {
  return (
    <As
      className={cn("text-base text-neutral-600", className)}
      {...props}
    />
  );
};
