"use client"

import * as React from "react"

import { Label } from "@/registry/default/ui/label"
import { Slider } from "@/registry/default/ui/slider"

export default function SliderControlled() {
  const [value, setValue] = React.useState([0.3, 0.7])

  return (
    <div className="grid w-full gap-3">
      <div className="flex items-center justify-between gap-2">
        <Label htmlFor="slider-demo-temperature">Temperature</Label>
        <span className="text-foreground font-base text-sm">
          {value.join(", ")}
        </span>
      </div>
      <Slider
        id="slider-demo-temperature"
        value={value}
        onValueChange={setValue}
        min={0}
        max={1}
        step={0.1}
      />
    </div>
  )
}
