import MainSideBar from "@/components/blocks/aside/MainSideBar";
import MainNav from "@/components/blocks/nav/MainNav";
import React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <MainNav />
      {/* <MainSideBar /> */}
      {/* sm:pr-[21em] */}
      <div className="px-4 py-4 max-w-6xl mx-auto">{children}</div>
    </div>
  );
}
