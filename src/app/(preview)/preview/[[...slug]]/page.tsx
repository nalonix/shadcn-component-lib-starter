import React from 'react'

import { notFound } from "next/navigation"

import BLOCKS from '@/data/blocks'
import { transformToSlug } from '@/lib/utils'



interface PreviewPageProps {
  params: Promise<{
    slug: string[]
  }>
}

export async function generateMetadata(props: PreviewPageProps) {
  const block = await getPreviewFromParams(props)
  if (block == null) return {}
  return { title: block?.name, description: block?.description }
}

// export async function generateStaticParams(): Promise<
//   {
//     slug: string[]
//   }[]
// > {
//   return docs.map((doc) => ({
//     slug: doc.slugAsParams.split("/"),
//   }))
// }

async function getPreviewFromParams({ params }: PreviewPageProps) {
  const slug = (await params).slug?.join("/") || ""
  const block = BLOCKS.find((block) => transformToSlug(block.name) === slug)
  // const doc = BLOCKS.find((block) => doc.slugAsParams === slug)

  if (!block) {
    return null
  }

  return block
}


export default async function PreviewPage(props: PreviewPageProps) {
  const block = await getPreviewFromParams(props)
  if (block == null) notFound()
  
  const { status, previewComponent } = block
  
  let ExampleComponent: React.ComponentType | undefined

  ExampleComponent = previewComponent

  // TODO: please ahandle redirection based on status or show flags for deprecation or smth
  
  if (!ExampleComponent || status == "unpublished") return null

  return (
    <ExampleComponent />
  )
}











// export default async function DocPage(props: DocPageProps) {
//   const doc = await getDocFromParams(props)
//   if (doc == null) notFound()
