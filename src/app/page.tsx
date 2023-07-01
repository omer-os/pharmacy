"use client";
import { Dialog } from "@/components/elements/dialog/Dialog";
import React, { useState } from "react";

export default function page() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(true)}>Open Dialog</button>
      <Dialog open={open} setOpen={setOpen}>
        <div>Here is some content inside the dialog.</div>
      </Dialog>
    </div>
  );
}
