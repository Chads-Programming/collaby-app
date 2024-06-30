import { cn } from "@/lib/utils";

interface TagProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const Tag = ({ className, ...props }: TagProps) => {
  return (
    <span
      className={cn(
        "rounded bg-indigo-500/20 px-2 py-1 text-sm font-medium text-indigo-500",
        className,
      )}
      {...props}
    />
  );
};
