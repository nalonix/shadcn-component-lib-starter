//  Array of all components and their markdown files.
// Since we are not going to use a database, we will just use this file to store all the data 
import ButtonMarkdown from "@/markdown/components/button.mdx"


import ButtonDemo from "@/components/examples/ui/button";


type Component = {
    name: string
    markdown: React.ComponentType
    exampleComponent: React.ComponentType
    prevComponent?: string
    nextComponent?: string
    notShadcn?: boolean
  }

  const COMPONENTS: Component[] = [
    {
        name: "Button",
        markdown: ButtonMarkdown,
        exampleComponent: ButtonDemo,
        prevComponent: "breadcrumb",
        nextComponent: "calendar",
      },
]


export default COMPONENTS