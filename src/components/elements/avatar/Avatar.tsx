import React from "react";
import { cva, VariantProps } from "class-variance-authority";

const AvatarVariants = cva(
  "flex items-center w-max justify-center rounded-full",
  {
    variants: {
      size: {
        sm: "h-8 w-8 text-xs",
        md: "h-12 w-12 text-base",
        lg: "h-16 w-16 text-lg",
        xl: "h-24 w-24 text-2xl",
      },
      variant: {
        primary: "bg-primary/20 text-primary",
        secondary: "bg-warning/20 text-warning",
        info: "bg-info/20 text-info",
      },
    },

    defaultVariants: {
      size: "md",
      variant: "primary",
    },
  }
);

interface AvatarProps extends VariantProps<typeof AvatarVariants> {
  src?: string;
  alt?: string;
  text?: string;
  children?: React.ReactNode;
}

export default function Avatar({
  src,
  alt,
  size,
  variant,
  children,
}: AvatarProps) {
  return (
    <div
      className={AvatarVariants({
        size,
        variant,
      })}
    >
      {src ? (
        <img className="rounded-full" src={src} alt={alt} />
      ) : (
        <span>{children}</span>
      )}
    </div>
  );
}
