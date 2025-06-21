"use client"

import { useLayoutEffect } from "react"

export default function SetStylingPref() {
  useLayoutEffect(() => {
    const colorObj = JSON.parse(localStorage.getItem("color") as string)
    const borderRadius = localStorage.getItem("borderRadius")

    const r = window.document.querySelector(":root") as HTMLElement
    const isDarkMode = document.documentElement.classList.contains("dark")

    if (colorObj) {
      if (isDarkMode) {
        r.style.setProperty("--background", colorObj.darkBg)
        r.style.setProperty("--main", colorObj.darkMain)
      } else {
        r.style.setProperty("--background", colorObj.bg)
        r.style.setProperty("--main", colorObj.main)
      }

      r.style.setProperty("--dark-background", colorObj.darkBg)
      r.style.setProperty("--dark-main", colorObj.darkMain)
      r.style.setProperty("--light-background", colorObj.bg)
      r.style.setProperty("--light-main", colorObj.main)
    }

    if (borderRadius) {
      r.style.setProperty("--radius", borderRadius + "px")
    }



  }, [])

  return <></>
}
