import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Lookup from "@/data/Lookup";

function SignInDialog({ openDialog, closeDialog }) {
  return (
    <Dialog open={openDialog} onOpenChange={closeDialog}>

      <DialogContent>
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription className="flex flex-col items-center justify-center">
            <div>
                <h2 className="font-bold text-2xl text-center text-white">{Lookup.SIGNIN_HEADING}</h2>
                <p className="mt-2 text-center">{Lookup.SIGNIN_SUBHEADING}</p>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>

    </Dialog>
  );
}

export default SignInDialog;
