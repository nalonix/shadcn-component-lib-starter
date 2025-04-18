import { Alert, AlertDescription } from "@/registry/default/ui/alert"

export default function AlertDescriptionOnlyDemo() {
  return (
    <Alert>
      <AlertDescription>
        This one has a description only. No title. No icon.
      </AlertDescription>
    </Alert>
  )
}
