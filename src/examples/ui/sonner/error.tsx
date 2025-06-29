"use client"

import { toast } from "sonner"

import { Button } from "@/registry/default/ui/button"

export default function SonnerErrorDemo() {
  return (
    <Button onClick={() => toast.error("Event has not been created")}>
      Error
    </Button>
  )
}
