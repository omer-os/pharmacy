import MainSideBar from "@/components/blocks/aside/MainSideBar";
import React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <MainSideBar />
      {children}
    </div>
  );
}
