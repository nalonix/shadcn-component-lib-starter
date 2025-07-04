// @ts-nocheck
"use client"


// TODO: add contribution, report but and more link for every page
import * as React from "react"

import { cn } from "@/lib/utils"

interface TocProps {
  items: Array<{
    depth: number
    value: string
    id: string
  }>
}

export function TableOfContents({ items }: TocProps) {
  const itemIds = React.useMemo(() => items.map((item) => item.id), [items])
  const activeHeading = useActiveItem(itemIds)
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted || !items?.length) {
    return null
  }

  return (
    <div className="overflow-y-auto toc-scrollbar">
      <h3 className="text-lg p-2 font-bold">On this page</h3>
      <div>
        {items.map(({ depth, id, value }) => (
          <a
            key={id}
            href={`#${id}`}
            className={cn(
              "block font-semibold text-zinc-600 dark:text-white hover:text-main-foreground py-1 pr-3",
              depth === 2 ? "pl-3" : depth === 3 ? "pl-6" : "pl-9",
              id === activeHeading &&
                "font-semibold text-main-foreground",
            )}
          >
            {value}
          </a>
        ))}
      </div>
    </div>
  )
}

function useActiveItem(itemIds: string[]) {
  const [activeId, setActiveId] = React.useState(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "-100px 0% -66%" },
    )

    itemIds?.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      itemIds?.forEach((id) => {
        const element = document.getElementById(id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [itemIds])

  return activeId
}

interface TreeProps {
  tree: TableOfContents
  depth?: number
  activeItem?: string
}
