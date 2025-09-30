import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// Define button style variants using class-variance-authority (CVA)
// - "variant": controls button color/style theme
// - "size": controls button dimensions
const buttonVariants = cva(
  "inline-flex items-center capitalize w-fit justify-center rounded-md font-medium transition-colors " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 " +
    "disabled:opacity-50 cursor-pointer disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        // Primary button
        default: "bg-main text-base shadow-xs hover:opacity-80 text-white",
        // Secondary / outline button
        secondary:
          "bg-white text-base border border-gray-400 hover:opacity-60 text-gray-900",
        // Smaller button with less padding
        small: "bg-main text-sm shadow-xs hover:opacity-80 text-white",
      },
      size: {
        // Default size: medium padding
        default: "h-10 px-6 py-4 has-[>svg]:px-3 rounded-sm ",
        // Small size: compact button
        sm: "h-10 w-5 w-32 rounded-sm has-[>svg]:px-2",
        // Large size: more padding
        lg: "h-10 px-6 rounded-sm has-[>svg]:px-4",
        // Icon-only button (square)
        icon: "size-9",
      },
    },
    // Default values if no variant/size is passed
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Reusable Button component
function Button({
  className,
  variant,
  size,
  asChild = false, // allows replacing <button> with any element
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  // If "asChild" is true → render <Slot /> (Radix utility for polymorphic components)
  // Otherwise → render a normal <button>
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      // Merge classes: CVA variant classes + extra passed className
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button };
