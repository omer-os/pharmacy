import AnimateOneDir from "@/components/animations/simple/AnimateOneDir";
import Link from "next/link";
import React from "react";

export default function ProductCard({
  title,
  description,
  img,
  link,
  delay,
  type,
}: {
  title: string;
  description: string;
  img: string;
  link: string;
  delay?: number;
  type?: string;
}) {
  return (
    <AnimateOneDir delay={delay}>
      <Link href={link || "/"} className="flex flex-col relative">
        <div className="img rounded-lg h-[12em]">
          <img
            src={img}
            alt={"product " + title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="flex flex-col px-4 mt-2">
          <div className="font-bold text-lg line-clamp-1">{title}</div>
          <div className="text-zinc-400 line-clamp-2 text-sm">
            {description}
          </div>
        </div>
      </Link>
    </AnimateOneDir>
  );
}
