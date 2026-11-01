import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-amber text-ink hover:bg-amber-deep hover:text-cream",
        ink: "bg-ink text-cream hover:bg-ink-soft",
        ghost: "border border-line bg-cream text-ink hover:bg-paper",
      },
    },
    defaultVariants: { variant: "primary" },
  },
);

export function Button({
  className,
  variant,
  ...props
}: ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
  return <button className={cn(buttonVariants({ variant }), className)} {...props} />;
}

export function buttonClass(variant: VariantProps<typeof buttonVariants>["variant"] = "primary") {
  return buttonVariants({ variant });
}
