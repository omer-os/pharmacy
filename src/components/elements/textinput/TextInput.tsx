import React from "react";
import { cn } from "@/lib/utils";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export default function TextInput({
  className,
  startIcon,
  endIcon,
  ...props
}: TextInputProps) {
  return (
    <div
      className={cn(
        "flex items-center relative border bg-white rounded-md",
        className
      )}
    >
      {startIcon && (
        <div className="px-2 absolute top-3 left-2 fill-current ">
          {startIcon}
        </div>
      )}
      <input
        type="text"
        className={"py-2 pl-10 flex-grow outline-none rounded-md"}
        {...props}
      />
      {endIcon && (
        <div className="px-2 absolute top-3 left-2 fill-current">{endIcon}</div>
      )}
    </div>
  );
}
