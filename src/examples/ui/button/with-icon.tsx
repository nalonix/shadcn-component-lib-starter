import { SendIcon } from "lucide-react"

import { Button } from "@/registry/default/ui/button"

export default function ButtonWithIconDemo() {
  return (
    <Button variant={"outline"} size={"sm"}>
      <SendIcon /> Send
    </Button>
  )
}
