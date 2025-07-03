import blocks from "@/data/blocks"
// import { STARS_EXAMPLES } from "@/data/stars"

import { transformToSlug } from "@/lib/utils"

import { sharedComponents } from "./mdx-components"
import { ExternalLink } from "lucide-react"
import { Badge } from "@/registry/default/ui/badge"

export default function BlockPreview({
  component,
  children,
  example,
  type = "block",
}: {
  component: string
  children: React.ReactNode
  example?: string
  type?: "star" | "component" | "block"
}) {
  const { Tabs, TabsList, TabsTrigger, TabsContent } = sharedComponents
  
  let ExampleComponent: React.ComponentType | undefined
    
  const componentData = blocks.find(
    (c) => transformToSlug(c.name) === component,
  )

  if (!componentData) return null

  if (type === "block") {
    ExampleComponent = componentData.previewComponent
  }


  if (!ExampleComponent) return null

  return (
    <>
          <div className="flex flex-col justify-center mb-2">
            <a href={`/preview/${component}`} target="_blank" rel="noreferrer">
              <Badge className="gap-2">
                  Live Preview
                <ExternalLink />
              </Badge>
            </a>
          </div>
          <div className="not-prose flex w-full items-center justify-center z-15 relative py-3 mb-5 min-h-[200px] border rounded bg-secondary-background">
            <ExampleComponent />
          </div>
    </>
  )
}
