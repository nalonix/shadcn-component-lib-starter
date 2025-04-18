import "@/styling/globals.css"

import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"

import Navbar from "@/components/app/navbar"
import ScrollToTop from "@/components/app/scroll-to-top"
import SetStylingPref from "@/components/app/set-styling-pref"
import { ThemeProvider } from "@/components/app/theme-provider"
import { Toaster } from "@/registry/default/ui/sonner"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  title: {
    default:
      "Component Liabrary Starter - A starter pack for creating a component liabrary using shadcn/ui",
    template: `%s - Cmponent Liabrary Starter`,
  }, 
  description:
    "A starter pack for creating a component liabrary using shadcn/ui",
  keywords: [
    "component lib starter",
    "component liabrary starter",
    "shadcn tailwind",
    "react nextjs",
    "react tailwind components",
    "shadcn components",
  ],
  authors: [{ name: "Naol Fekadu", url: "https://github.com/nalonix" },{ name: "Samuel Breznjak", url: "https://github.com/ekmas" }],
  openGraph: {
    type: "website",
    description:
      "starter pack for creating a component liabrary using shadcn/ui.",
    images: ["https://www.neobrutalism.dev/preview.png"],
    url: "https://www.neobrutalism.dev/",
    title: "Component Libarary Starter",
  },
  metadataBase: new URL("https://www.neobrutalism.dev/"),
  twitter: {
    card: "summary_large_image",
    title: "Component Liabrary Starter - Starter pack for shadcn ui based component liabrary",
    description:
      "A starter pack for creating a component liabrary using shadcn/ui",
    images: ["https://www.neobrutalism.dev/preview.png"],
    creator: "@nalonix_",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="scroll-smooth" suppressHydrationWarning lang="en">
      <body className={dmSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          {children}
          <SetStylingPref />
          <ScrollToTop />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
