import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "glass-button-primary text-foreground",
        destructive: "bg-gradient-to-b from-[hsl(0_84%_62%)] to-[hsl(0_84%_48%)] text-destructive-foreground border-t border-t-[hsl(0_84%_70%)] border-b-2 border-b-[hsl(0_84%_38%)] border-l border-l-[hsl(0_84%_65%)] border-r border-r-[hsl(0_84%_42%)] shadow-[0_2px_6px_hsl(0_84%_40%/0.4),inset_0_1px_0_hsl(0_0%_100%/0.2)] hover:shadow-[0_4px_12px_hsl(0_84%_40%/0.5)] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[inset_0_2px_4px_hsl(0_84%_30%/0.5)]",
        outline: "bg-gradient-to-b from-card to-secondary border-t border-t-[var(--surface-border-light)] border-b-2 border-b-[var(--surface-border-dark)] border-l border-l-[var(--surface-border-light)] border-r border-r-[var(--surface-border-dark)] text-foreground shadow-[var(--shadow-raised)] hover:shadow-[var(--shadow-raised-hover)] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[var(--shadow-pressed)]",
        secondary: "bg-gradient-to-b from-card to-secondary border-t border-t-[var(--surface-border-light)] border-b-2 border-b-[var(--surface-border-dark)] border-l border-l-[var(--surface-border-light)] border-r border-r-[var(--surface-border-dark)] text-foreground shadow-[var(--shadow-raised)] hover:shadow-[var(--shadow-raised-hover)] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[var(--shadow-pressed)]",
        ghost: "hover:bg-accent/50 hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
