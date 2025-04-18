"use client"

import { Slider } from "@/registry/default/ui/slider"

export default function TwoThumbsSliderDemo() {
  return <Slider defaultValue={[25, 50]} max={100} step={1} />
}
