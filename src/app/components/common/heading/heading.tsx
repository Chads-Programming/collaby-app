import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";

export const headingVariants = cva("font-semibold text-black", {
	variants: {
		variant: {
			featured: "text-primary",
			default: "text-black",
		},
		size: {
			sm: "text-xl md:text-2xl",
			md: "text-2xl md:text-3xl",
			lg: "text-3xl md:text-5xl",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "md",
	},
});

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> {
	as?: HeadingTag;
}

export const Heading = ({ as: As = "h2", size, variant, className, ...props }: HeadingProps) => {
	return <As className={cn(headingVariants({ size, variant, className }))} {...props} />;
};
