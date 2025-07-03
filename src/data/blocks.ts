import ActionSearchDemo from "@/examples/blocks/action-search"
import PokemonsDemo from "@/examples/blocks/pokemons"

type Block = {
  name: string
  description?: string
  previewComponent?: React.ComponentType
  notShadcn?: boolean
  status: "stable" | "experimental" | "deprecated" | "unpublished"
  createdAt: string
  updatedAt: string
}

const BLOCKS: Block[] = [
  {
    name: "pokemons",
    description: "A list of pokemons",
    previewComponent: PokemonsDemo,
    createdAt: "4-14-2024",
    updatedAt: "4-14-2025",
    status: "experimental",
    notShadcn: true,
  },
  {
    name: "action search",
    description: "Action Bar with shortcuts, and smooth dropdown animation.",
    previewComponent: ActionSearchDemo,
    createdAt: "7-2-2025",
    updatedAt: "7-3-2025",
    status: "stable",
    notShadcn: true,
  },
]

export default BLOCKS
