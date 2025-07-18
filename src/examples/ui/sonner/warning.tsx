"use client"

import { toast } from "sonner"

import { Button } from "@/registry/default/ui/button"

export default function SonnerWarningDemo() {
  return (
    <Button
      onClick={() =>
        toast.warning("Event start time cannot be earlier than 8am")
      }
    >
      Warning
    </Button>
  )
}
