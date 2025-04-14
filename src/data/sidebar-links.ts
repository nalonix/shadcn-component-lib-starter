import { transformToSlug } from "@/lib/utils"

import BLOCKS from "./blocks"
import COMPONENTS from "./components"

const COMPONENTS_LINKS = COMPONENTS.map((component) => {
  return {
    href: `/docs/components/${transformToSlug(component.name)}`,
    text: component.name,
  }
})

const BLOCKS_LINKS = BLOCKS.map((block) => {
  return {
    href: `/docs/blocks/${transformToSlug(block.name)}`,
    text: block.name,
  }
})

const GETTING_STARTED_LINKS = [
  {
    href: "/docs/migrating-from-v3",
    text: "Migrating from V3",
  },
  {
    href: "/docs",
    text: "Introduction",
  },
  {
    href: "/docs/installation",
    text: "Installation",
  },
  {
    href: "/docs/resources",
    text: "Resources",
  },
  {
    href: "/docs/figma",
    text: "Figma",
  },
  {
    href: "/docs/changelog",
    text: "Changelog",
  },
  {
    href: "/showcase",
    text: "Showcase",
  },
]

const MAIN_SIDEBAR = [
  "Getting started",
  ...GETTING_STARTED_LINKS,
  "Components",
  ...COMPONENTS_LINKS,
  "Blocks",
  ...BLOCKS_LINKS,
]

const COMPONENTS_SIDEBAR = [
  "Getting started",
  ...GETTING_STARTED_LINKS,
  "Components",
  ...COMPONENTS_LINKS,
]

const BLOCKS_SIDEBAR = [
  "Getting started",
  ...GETTING_STARTED_LINKS,
  "Blocks",
  ...BLOCKS_LINKS,
]

const MOBILE_MAIN_SIDEBAR = [
  "Getting started",
  ...GETTING_STARTED_LINKS,
  "Components",
  ...COMPONENTS_LINKS,
  "Blocks",
  ...BLOCKS_LINKS,
]

const MOBILE_COMPONENTS_SIDEBAR = [
  "Getting started",
  ...GETTING_STARTED_LINKS,
  "Components",
  ...COMPONENTS_LINKS,
]

const MOBILE_BLOCKS_SIDEBAR = [
  "Getting started",
  ...GETTING_STARTED_LINKS,
  "Blocks",
  ...BLOCKS_LINKS,
]

export {
  MAIN_SIDEBAR,
  MOBILE_MAIN_SIDEBAR,
  COMPONENTS_LINKS,
  GETTING_STARTED_LINKS,
  COMPONENTS_SIDEBAR,
  BLOCKS_SIDEBAR,
  MOBILE_COMPONENTS_SIDEBAR,
  MOBILE_BLOCKS_SIDEBAR,
}
