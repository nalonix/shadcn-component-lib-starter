import { Button } from "@/registry/default/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/registry/default/ui/hover-card"

export default function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="noShadow">Hover</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        The React Framework – created and maintained by @vercel.
      </HoverCardContent>
    </HoverCard>
  )
}
