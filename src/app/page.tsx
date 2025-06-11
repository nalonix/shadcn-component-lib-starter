import Navbar from "@/components/app/navbar"
import { ArrowUpRight } from "lucide-react"

import Link from "next/link"

export default function Home() {

  return (
    <div className="text-foreground font-base prose-headings:font-heading prose-h1:2xl:text-6xl prose-h1:xl:text-5xl prose-h1:md:text-5xl prose-h1:sm:text-[33px] prose-h1:text-2xl prose-h2:2xl:text-4xl prose-h2:lg:text-4xl prose-h2:md:text-3xl prose-h2:text-2xl prose-h3:2xl:text-4xl prose-h3:xl:text-3xl prose-h3:lg:text-3xl prose-h3:md:text-2xl prose-h3:sm:text-xl">
      <main className="relative flex min-h-[100dvh] flex-col overflow-hidden items-center justify-center bg-background px-5 md:py-[200px] py-[100px] bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px]">
        <div className="mx-auto w-container max-w-full">
          <div className="flex flex-col items-center text-center">
            <h1 className="leading-normal max-w-2xl">
              Get started with creating your component liabrary.
            </h1>

            <p className="leading-snug w-full md:mt-[50px] md:mb-[60px] sm:mt-12 my-9 sm:mb-10 2xl:text-3xl xl:text-2xl lg:text-2xl xl:w-full lg:w-2/3 md:w-full md:text-2xl sm:text-xl text-xl">
              Create a collection of pre-styled components based on shadcn/ui.
            </p>

            <Link
              className="flex items-center gap-2.5 w-max text-main-foreground rounded-base border-2 border-border bg-main md:px-10 px-4 md:py-3 py-2 md:text-[22px] text-base shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
              href={"/docs"}
            >
              Read the docs
              <ArrowUpRight className="md:size-[30px] size-5" />
            </Link>
          </div>
        </div>
      </main>
      <div>
        <section className="flex flex-col items-center justify-center py-8 border-y-4 border-border bg-background">
          <h2 className="mb-5 px-5 text-center">
            Customizable set of components.
          </h2>
          <p>You can have a demo for setting custom styling</p>
        </section>
        <section className="inset-0 flex relative overflow-hidden w-full py-5 flex-col items-center justify-center bg-secondary-background bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] z-0">
          <h2 className="my-5 px-5 text-center">
            Loved by the community
          </h2>
          <p>community reviews</p>
        </section>
        <section className="flex flex-col items-center justify-center py-8 border-t-4 z-0 border-t-border border-b-4 border-b-border bg-background">
          <h2 className="my-5 px-5 text-center">
            Frequently asked questions
          </h2>
          <p>show answers to frequently asked questions</p>
        </section>
      </div>
      <footer className="z-30 border-t-4 border-border bg-secondary-background px-5 py-5 text-center sm:text-base text-sm">
        Released under MIT License. The source code is available on{" "}
        {/* TODO:update the repo link */}
        <a
          target="_blank"
          href="https://github.com/ekmas/neobrutalism-components"
          className="underline font-heading"
        >
          Github
        </a>
        .
      </footer>
    </div>
  )
}


