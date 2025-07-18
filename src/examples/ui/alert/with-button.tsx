import { CheckCircle2Icon } from "lucide-react"

import { Alert, AlertTitle } from "@/registry/default/ui/alert"
import { Button } from "@/registry/default/ui/button"

export default function AlertLongDescriptionDemo() {
  return (
    <Alert className="sm:min-w-[500px]">
      <CheckCircle2Icon />
      <AlertTitle className="max-w-[calc(100%-4rem)] overflow-ellipsis">
        The selected emails have been marked as spam.
      </AlertTitle>
      <Button
        size="sm"
        className="absolute top-2.5 right-3 h-6 bg-secondary-background text-foreground"
      >
        Undo
      </Button>
    </Alert>
  )
}
