"use client"

import { Slider } from "@/registry/default/ui/slider"

export default function VerticalSliderDemo() {
  return (
    <Slider defaultValue={[25]} max={100} step={1} orientation="vertical" />
  )
}
