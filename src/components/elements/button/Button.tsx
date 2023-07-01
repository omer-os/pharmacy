import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

export const buttonVariants = cva(
  `active:scale-95 items-center gap-2 transition-all flex`,
  {
    variants: {
      variant: {
        primary: `
        
        bg-primary 
        data-[outlined=true]:bg-primary/10
        data-[outlined=true]:text-primary
        data-[outlined=true]:border
        border-primary
        hover:brightness-110 
        text-primary-content

        disabled:bg-primary/30
        disabled:cursor-not-allowed
        `,

        danger: `
        bg-warning 
        data-[outlined=true]:bg-warning/10
        data-[outlined=true]:text-warning
        data-[outlined=true]:border
        border-warning
        hover:brightness-110
        text-warning-content
        `,
        success: `
        bg-success 
        data-[outlined=true]:bg-success/10
        data-[outlined=true]:text-success
        data-[outlined=true]:border
        border-success
        hover:brightness-110
        text-success-content`,
        ghost: `
        bg-transparent
        data-[outlined=true]:bg-transparent
        data-[outlined=true]:text-primary
        data-[outlined=true]:border
        border-primary
        hover:brightness-110
        text-lightGray
        hover:bg-lightGray/10


        `,
      },
      rounded: {
        sm: `rounded-sm`,
        md: `rounded-md`,
        lg: `rounded-lg`,
        xl: `rounded-xl`,
        full: `rounded-full`,
      },
      size: {
        sm: `px-2 py-1 text-sm`,
        md: `px-3 py-2 text-md`,
        lg: `px-4 py-3 text-lg`,
        xl: `px-5 py-4 text-xl`,
        icon: `px-2 py-2 text-md`,
      },
      width: {
        full: `w-full`,
        max: `w-max`,
      },
      justify: {
        center: `justify-center`,
        start: `justify-start`,
        end: `justify-end`,
      },
      font: {
        bold: `font-bold`,
        normal: `font-normal`,
        light: `font-light`,
      },
    },
    defaultVariants: {
      variant: `primary`,
      rounded: `md`,
      size: `md`,
      width: `max`,
      justify: `center`,
      font: `normal`,
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  outlined?: boolean;
}

export default function button({
  className,
  variant,
  size,
  width,
  rounded,
  justify,
  font,
  outlined = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        buttonVariants({
          className,
          variant,
          size,
          width,
          rounded,
          justify,
          font,
        })
      )}
      data-outlined={outlined}
      {...props}
    />
  );
}
