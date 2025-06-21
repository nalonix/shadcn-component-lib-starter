// TODO: remove this component 
import { ChevronsUpDown, Terminal } from "lucide-react"

import * as React from "react"


import { Alert, AlertDescription, AlertTitle } from "@/registry/default/ui/alert"

import { Button } from "@/registry/default/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card"

import { Checkbox } from "@/registry/default/ui/checkbox"

import { Input } from "@/registry/default/ui/input"

import { Label } from "@/registry/default/ui/label"
import { RadioGroup, RadioGroupItem } from "@/registry/default/ui/radio-group"


import { cn } from "@/lib/utils"

export default function HeroComponents({
  className,
  reverse,
}: {
  className?: string
  reverse?: boolean
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "h-full w-[340px] absolute top-[70px] pointer-events-none overflow-y-hidden",
        className,
      )}
    >
    </div>
  )
}


const AlertExample = () => (
  <Alert>
    <Terminal />
    <AlertTitle>Alert</AlertTitle>
    <AlertDescription>
      You can add components and dependencies to your app using the cli.
    </AlertDescription>
  </Alert>
)


const RadioGroupExample = () => (
  <div className="bg-main w-full border-2 border-border shadow-shadow p-4 flex items-center justify-center rounded-base">
    <RadioGroup defaultValue="comfortable" inert>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          tabIndex={-1}
          className="dark:text-main-foreground"
          value="default"
          id="r1"
        />
        <Label className="text-main-foreground" htmlFor="r1">
          Default
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          tabIndex={-1}
          className="dark:text-main-foreground"
          value="comfortable"
          id="r2"
        />
        <Label className="text-main-foreground" htmlFor="r2">
          Comfortable
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          tabIndex={-1}
          className="dark:text-main-foreground"
          value="compact"
          id="r3"
        />
        <Label className="text-main-foreground" htmlFor="r3">
          Compact
        </Label>
      </div>
    </RadioGroup>
  </div>
)

const CheckboxExample = () => (
  <div className="bg-main w-full border-2 border-border shadow-shadow p-4 flex text-main-foreground items-center justify-center rounded-base">
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" tabIndex={-1} />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  </div>
)

