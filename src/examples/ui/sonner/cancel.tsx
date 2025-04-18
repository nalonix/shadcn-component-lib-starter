"use client"

import { toast } from "sonner"

import { Button } from "@/registry/default/ui/button"

export default function SonnerCancelDemo() {
  return (
    <Button
      onClick={() =>
        toast("Event has been created", {
          cancel: {
            label: "Cancel",
            onClick: () => console.log("Cancel"),
          },
        })
      }
    >
      Cancel
    </Button>
  )
}
