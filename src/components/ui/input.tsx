import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md px-3 py-2 text-base",
          "bg-gradient-to-b from-[hsl(var(--input))] to-[hsl(var(--muted))]",
          "border-t border-t-[var(--surface-border-dark)] border-l border-l-[var(--surface-border-dark)]",
          "border-r border-r-[var(--surface-border-light)] border-b border-b-[var(--surface-border-light)]",
          "shadow-[inset_0_2px_4px_hsl(220_15%_75%/0.3),inset_0_1px_2px_hsl(220_15%_70%/0.2)]",
          "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
          "placeholder:text-muted-foreground",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:shadow-[inset_0_2px_4px_hsl(220_15%_75%/0.2),0_0_0_3px_hsl(217_91%_60%/0.15)]",
          "disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "transition-all duration-200",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
