import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogHeader,
} from "@/components/elements/dialog/Dialog";
import Button from "@/components/elements/button/Button";
import { useState } from "react";
import { ClientWrapper } from "@/components/templates/layout/ClientWrapper";

export default {
  title: "Elements/Dialog",
  component: Dialog,
};

export const Primary = () => {
  const [open, setOpen] = useState(true);
  return (
    <ClientWrapper>
      <button onClick={() => setOpen(true)}>Open Dialog</button>
      <Dialog open={open} setOpen={setOpen}>
        <DialogHeader title="Dialog Title" onClose={() => setOpen(false)} />
        <DialogContent>Here is some content inside the dialog.</DialogContent>
        <DialogActions>
          <Button width={"full"}>Save This</Button>
          <Button width={"full"} variant={"danger"}>
            Delete This
          </Button>
        </DialogActions>
      </Dialog>
    </ClientWrapper>
  );
};
