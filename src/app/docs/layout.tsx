import Navbar from "@/components/app/navbar"
import Sidebar from "@/components/app/sidebar"

export default function MainDocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <Sidebar />
      {children}
    </>
  )
}
