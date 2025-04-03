import Changelog from "@/markdown/docs/changelog/page.mdx";
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Changelog",
  description: "Logging the changes in the project",
}

export default function Page() {
  return <Changelog />
}