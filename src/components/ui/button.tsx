import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "glass-button-primary text-foreground before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-500",
        destructive: "bg-gradient-to-br from-destructive/90 to-destructive/70 backdrop-blur-xl border border-white/20 text-destructive-foreground shadow-[0_4px_16px_rgba(0,0,0,0.2),inset_0_1px_2px_rgba(255,255,255,0.15)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.3),inset_0_1px_2px_rgba(255,255,255,0.2)] hover:-translate-y-0.5",
        outline: "border border-white/18 bg-gradient-to-br from-card-glass/60 to-card-glass/40 backdrop-blur-[30px] text-foreground shadow-[0_4px_16px_rgba(0,0,0,0.15),inset_0_1px_1px_rgba(255,255,255,0.1)] hover:bg-gradient-to-br hover:from-card-glass/70 hover:to-card-glass/50 hover:border-white/25 hover:shadow-[0_8px_24px_rgba(0,0,0,0.25),inset_0_1px_2px_rgba(255,255,255,0.15)] hover:-translate-y-0.5",
        secondary: "bg-gradient-to-br from-card-glass/70 to-card-glass/50 backdrop-blur-[20px] text-foreground border border-white/15 shadow-[0_4px_16px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.1)] hover:bg-gradient-to-br hover:from-card-glass/80 hover:to-card-glass/60 hover:border-white/22 hover:shadow-[0_8px_24px_rgba(0,0,0,0.3),inset_0_1px_2px_rgba(255,255,255,0.15)] hover:-translate-y-0.5",
        ghost: "hover:bg-gradient-to-br hover:from-accent/60 hover:to-accent/40 hover:backdrop-blur-[20px] hover:text-accent-foreground hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]",
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
