import Sidebar from "@/components/app/sidebar"

// TODO: please upate layout function names
export default function MainDocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* <Sidebar /> */}
      {children}
    </>
  )
}
