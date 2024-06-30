import { cn } from "@/lib/utils";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingTag;
}

export const Heading = ({
  as: As = "h2",
  className,
  ...props
}: HeadingProps) => {
  return (
    <As
      className={cn("text-2xl font-medium text-black", className)}
      {...props}
    />
  );
};
