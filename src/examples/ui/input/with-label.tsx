import { Input } from "@/registry/default/ui/input"
import { Label } from "@/registry/default/ui/label"

export default function InputWithLabelDemo() {
  return (
    <div className="grid max-w-[200px] items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  )
}
