"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  MAIN_SIDEBAR,
  COMPONENTS_SIDEBAR,
  BLOCKS_SIDEBAR,
} from "@/data/sidebar-links"

import { cn } from "@/lib/utils"

export default function Sidebar() {
  const pathname = usePathname()

  const getSidebarLinks = () => {
    if (pathname.includes("/components")) return COMPONENTS_SIDEBAR
    if (pathname.includes("/blocks")) return BLOCKS_SIDEBAR
    return MAIN_SIDEBAR
  }

  const sidebarLinks = getSidebarLinks()

  return (
    <aside className="scrollbar hidden-scrollbar fixed top-[70px] bg-secondary-background p-4 h-[calc(100svh-70px)] max-h-[calc(100svh-70px)] w-[250px] overflow-y-auto border-r-1 lg:block hidden border-border/50">
      {sidebarLinks.map((item, id) => {
        return typeof item === "string" ? (
          <div
            key={id}
            className="block px-3 py-2 text-xl font-heading"
          >
            {item}
          </div>
        ) : (
          <Link
            key={id}
            href={item.href}
            className={cn(
              "capitalize block px-3 py-1 my-1 text-zinc-600 font-semibold hover:translate-x-[1px] duration-100",
              item.href === pathname &&
                "bg-background text-main-foreground rounded-md"
            )}
          >
            {item.text}
          </Link>
        )
      })}
    </aside>
  )
}
