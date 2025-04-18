"use client"

import { toast } from "sonner"

import { Button } from "@/registry/default/ui/button"

export default function SonnerSuccessDemo() {
  return (
    <Button onClick={() => toast.success("Event has been created")}>
      Success
    </Button>
  )
}
