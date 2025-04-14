type Block = {
  name: string
  exampleComponent?: React.ComponentType
  notShadcn?: boolean
  status: "stable" | "experimental" | "deprecated" | "unpublished"
  createdAt: string
  updatedAt: string
}

const BLOCKS: Block[] = [
  {
    name: "Pokemons",
    createdAt: "4-14-2024",
    updatedAt: "4-14-2025",
    status: "experimental",
  },
]

export default BLOCKS
