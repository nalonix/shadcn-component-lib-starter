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
]

export default BLOCKS
