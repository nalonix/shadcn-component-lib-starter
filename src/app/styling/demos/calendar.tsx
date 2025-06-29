"use client"

import { useState } from "react"

import { Calendar } from "@/registry/default/ui/calendar"

export default function CalendarDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Calendar
      className="w-max"
      mode="single"
      selected={date}
      onSelect={setDate}
    />
  )
}
