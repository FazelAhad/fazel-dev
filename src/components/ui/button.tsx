import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, children, ...props }, ref) => {
    const buttonClasses = cn(
      "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
      {
        "bg-primary text-primary-foreground hover:bg-primary/90": variant === "default",
        "border border-input bg-background hover:bg-accent hover:text-accent-foreground": variant === "outline",
        "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
        "underline-offset-4 hover:underline text-primary": variant === "link",
      },
      {
        "h-10 py-2 px-4": size === "default",
        "h-9 px-3 rounded-md": size === "sm",
        "h-11 px-8 rounded-md": size === "lg",
        "h-10 w-10": size === "icon",
      },
      className
    );

    if (asChild && React.isValidElement(children)) {
      const { className: childClassName, ...childProps } = (children as React.ReactElement).props || {};
      return React.cloneElement(
        children as React.ReactElement,
        {
          className: cn(buttonClasses, childClassName),
          ref,
          ...childProps,
          ...props,
        }
      );
    }

    return (
      <button
        className={buttonClasses}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };

