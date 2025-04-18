import Navbar from "@/components/app/navbar"

export default function MainDocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
