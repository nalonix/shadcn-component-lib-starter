import { Metadata } from "next"

import Introduction from "@/markdown/docs/introduction/page.mdx";

export const metadata: Metadata = {
  title: "Introduction",
  description: "Get started",
}

export default function Page() {
   return (<Introduction />)
}

