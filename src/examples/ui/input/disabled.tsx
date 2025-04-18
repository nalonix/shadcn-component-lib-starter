import { Input } from "@/registry/default/ui/input"

export default function InputDisabledDemo() {
  return (
    <Input
      className="max-w-[200px]"
      type="email"
      placeholder="Email"
      disabled
    />
  )
}
