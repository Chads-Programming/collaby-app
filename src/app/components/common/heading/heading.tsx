import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

export const headingVariants = cva("font-semibold text-black", {
  variants: {
    size: {
      sm: "text-xl md:text-2xl",
      md: "text-2xl md:text-3xl",
      lg: "text-3xl md:text-5xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: HeadingTag;
}

export const Heading = ({
  as: As = "h2",
  size,
  className,
  ...props
}: HeadingProps) => {
  return <As className={cn(headingVariants({ size, className }))} {...props} />;
};
