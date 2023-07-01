"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AnimateOneDir({
  children,
  className,
  direction = "up",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  direction?: "left" | "right" | "up" | "bottom";
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        translateX:
          direction === "left" ? 100 : direction === "right" ? 100 : 0,
        translateY: direction === "up" ? 100 : direction === "bottom" ? 100 : 0,
      }}
      animate={{
        opacity: 1,
        translateX: 0,
        translateY: 0,
      }}
      transition={{
        delay: delay,
        duration: 0.4,
      }}
    >
      {children}
    </motion.div>
  );
}
