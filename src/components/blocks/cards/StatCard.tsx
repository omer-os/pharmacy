import Avatar from "@/components/elements/avatar/Avatar";
import React from "react";
import { AiFillFlag } from "react-icons/ai";

export default function StatCard({
  title,
  value,
  icon,
  variant,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
  variant: "primary" | "secondary" | "info" | null | undefined;
}) {
  return (
    <div className="p-5 rounded-lg bg-background-foreground border flex items-center gap-3 flex-1 justify-center">
      <Avatar variant={variant}>{icon}</Avatar>

      <div className="flex flex-col">
        <span className="text-2xl font-bold">{value}</span>
        <span className="text-sm text-zinc-400 leading-3 capitalize">
          {title}
        </span>
      </div>
    </div>
  );
}
