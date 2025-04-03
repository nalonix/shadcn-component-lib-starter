"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { MAIN_SIDEBAR } from "@/data/sidebar-links"

import { cn } from "@/lib/utils"

export default function Sidebar() {
  const pathname = usePathname()

  return (
    // <aside className="scrollbar fixed top-[88px] bg-white dark:bg-secondaryBlack h-[calc(100svh-88px)] max-h-[calc(100svh-88px)] w-[250px] overflow-y-auto border-r-4 border-border dark:border-darkNavBorder m900:hidden">
    <aside className="scrollbar fixed">
      {MAIN_SIDEBAR.map((item, id) => {
        return typeof item === "string" ? (
          <div
            key={id}
          >
            {item}
          </div>
        ) : (
          <Link
            key={id}
            href={`${item.href}`}
            className={cn(
              "hover:underline",
              item.href === pathname && "underline",
            )}
          >
            {item.text}
          </Link>
        )
      })}
    </aside>
  )
}