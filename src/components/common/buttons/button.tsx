import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/shad-utils";
import { Loader2, ArrowRight } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400/80 focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: " bg-green-400 text-gray-0 hover:bg-green-400/80", 
        destructive: "bg-red-400 text-gray-0 hover:bg-red-400/90",
        outline:
          "border border-green-400 bg-green-400/0 text-green-400 hover:bg-transparent hover:border-green-",
        secondary:
          "bg-secondary text-green-400 hover:bg-secondary/80",
        ghost:
          "bg-green-400/10 hover:bg-green-400/20 text-green-400 hover:text-accent-foreground",
        link: "text-green-400 underline-offset-4 hover:underline",
        white: "bg-gray-0 text-green-400 hover:bg-green-100",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-11 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  arrow?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      arrow = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
        disabled={loading}
      >
        {loading ? (
          <>
            {children}
            <Loader2 className="ml-2 h-4 w-4 animate-spin" />
          </>
        ) : (
          <>
            {children}
            {arrow && <ArrowRight className="ml-2 h-4 w-4" />}
          </>
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
