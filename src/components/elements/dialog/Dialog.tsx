"use client";
import { useClient } from "@/components/templates/layout/ClientWrapper";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { IoClose } from "react-icons/io5";

interface DialogProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

interface DialogHeaderProps {
  title: string;
  onClose: () => void;
}

interface DialogContentProps {
  children: React.ReactNode;
}

interface DialogActionsProps {
  children: React.ReactNode;
}

export function Dialog({ open, setOpen, children }: DialogProps) {
  const {
    disableBodyScroll,
    enableBodyScroll,
    disableBrowserBack,
    enableBrowserBack,
  } = useClient();

  open ? disableBodyScroll() : enableBodyScroll();
  open
    ? disableBrowserBack(() => {
        setOpen(false);
      })
    : enableBrowserBack();

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <motion.div
            className="fixed inset-0 backdrop-blur z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
          <motion.div
            className="p-4 z-50 w-max h-max"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <div className="bg-white px-3 py-2 rounded shadow-lg">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export function DialogHeader({ title, onClose }: DialogHeaderProps) {
  return (
    <div className="flex justify-between items-center p-2 border-b">
      <h2 className="text-xl font-bold">{title}</h2>
      <button onClick={onClose}>
        <IoClose size={24} />
      </button>
    </div>
  );
}

export function DialogContent({ children }: DialogContentProps) {
  return <div className="p-4">{children}</div>;
}

export function DialogActions({ children }: DialogActionsProps) {
  return <div className="px-4 pt-2 pb-4 flex gap-3">{children}</div>;
}
