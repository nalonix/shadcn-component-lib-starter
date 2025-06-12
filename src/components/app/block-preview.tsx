import blocks from "@/data/blocks"
// import { STARS_EXAMPLES } from "@/data/stars"

import { transformToSlug } from "@/lib/utils"

import { sharedComponents } from "./mdx-components"

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
    {/* Naturally */}
      {/* <Tabs defaultValue="preview" className="w-full"> */}
        {/* <TabsList className="grid w-full border-b-0 grid-cols-2"> */}
          {/* <TabsTrigger value="preview">Preview</TabsTrigger> */}
          {/* <TabsTrigger value="code">Code</TabsTrigger> */}
        {/* </TabsList> */}
        {/* <TabsContent value="preview"> */}
          <div className="flex flex-col justify-cente mb-0.5">
            <a href={`/preview/${component}`} target="_blank" rel="noreferrer">
              Live Preview
            </a>
          </div>
          <div className="not-prose flex w-full items-center justify-center z-15 relative border-2 mb-5 min-h-[200px] border-border bg-secondary-background bg-[15px_20px] bg-[linear-gradient(to_right,#8080804D_1px,transparent_1px),linear-gradient(to_bottom,#80808090_1px,transparent_1px)] sm:px-10 px-5 sm:py-20 py-10 [background-size:40px_40px]">
            <ExampleComponent />
          </div>
        {/* </TabsContent> */}
        {/* <TabsContent value="code">{children}</TabsContent> */}
      {/* </Tabs> */}
    </>
  )
}
