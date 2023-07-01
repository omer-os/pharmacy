"use client";
import { cn } from "@/lib/utils";
import React from "react";
import Button from "@components/elements/button/Button";
import { AiFillHome } from "react-icons/ai";
import { RiArrowDownCircleFill } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
import { useClient } from "@/components/templates/layout/ClientWrapper";

interface MainSideBarProps {
  className?: string;
}

export default function MainSideBar({ className }: MainSideBarProps) {
  const { isSidebarOpen, setSidebarOpen } = useClient();
  return (
    <div
      data-open={isSidebarOpen}
      dir="rtl"
      className={cn(
        `fixed max-h-screen h-full top-0 bg-background-foreground  min-w-[20em]  sm:w-2/12 w-full 
        
        rtl:data-[open=true]:right-0
        rtl:data-[open=false]:-right-[100vw]
        rtl:sm:!right-0

        ltr:data-[open=true]:left-0
        ltr:data-[open=false]:-left-[100vw]
        ltr:sm:!left-0
        
        
        transition-all
        `,
        className
      )}
    >
      <nav className="p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="rounded-full w-10 h-10 bg-zinc-400"></span>
          <div className="text-md font-bold">مرحبا</div>
        </div>

        <Button
          onClick={() => setSidebarOpen((prev) => !prev)}
          className="sm:hidden"
          size={"icon"}
          variant={"ghost"}
        >
          <MdOutlineClose size={22} />
        </Button>
      </nav>

      <div className="p-4 flex flex-col gap-4">
        <Button className="py-4" width={"full"} justify={"start"}>
          <AiFillHome />
          الصفحة الرئيسية
        </Button>

        <Button
          className="py-4"
          width={"full"}
          justify={"start"}
          variant={"ghost"}
        >
          <RiArrowDownCircleFill />
          الطلبيات
        </Button>

        <Button
          className="py-4 mt-auto"
          variant={"ghost"}
          width={"full"}
          justify={"start"}
        >
          <RiArrowDownCircleFill />
          تسجيل الخروج
        </Button>
      </div>
    </div>
  );
}
