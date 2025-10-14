import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "glass-button-primary text-foreground",
        blue: "glass-button-blue",
        destructive: "bg-gradient-to-br from-[hsl(0_84%_60%/0.5)] to-[hsl(0_84%_50%/0.3)] backdrop-blur-[40px] border border-white/12 text-destructive-foreground shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.08)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)] hover:-translate-y-0.5",
        outline: "border border-white/12 bg-gradient-to-br from-[hsl(0_0%_12%/0.4)] to-[hsl(0_0%_8%/0.3)] backdrop-blur-[40px] text-foreground shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.08)] hover:bg-gradient-to-br hover:from-[hsl(0_0%_15%/0.5)] hover:to-[hsl(0_0%_10%/0.4)] hover:border-white/18 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)] hover:-translate-y-0.5",
        secondary: "bg-gradient-to-br from-[hsl(0_0%_12%/0.5)] to-[hsl(0_0%_8%/0.3)] backdrop-blur-[40px] text-foreground border border-white/12 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.08)] hover:bg-gradient-to-br hover:from-[hsl(0_0%_15%/0.6)] hover:to-[hsl(0_0%_10%/0.4)] hover:border-white/18 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)] hover:-translate-y-0.5",
        ghost: "hover:bg-gradient-to-br hover:from-[hsl(0_0%_12%/0.4)] hover:to-[hsl(0_0%_8%/0.3)] hover:backdrop-blur-[40px] hover:text-accent-foreground hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]",
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
