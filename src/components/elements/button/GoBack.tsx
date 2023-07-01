"use client";
import React from "react";
import Button from "./Button";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useRouter } from "next/navigation";

export default function GoBack() {
  const router = useRouter();

  return (
    <Button onClick={() => router.back()} variant={"ghost"}>
      الرجوع
      <AiOutlineArrowLeft />
    </Button>
  );
}
