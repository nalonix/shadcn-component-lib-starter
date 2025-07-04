const BASE_URL = process.env.BASE_URL

const UI = [
  {
    name: "alert",
    title: "Alert",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/default/ui/alert.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "badge",
    title: "Badge",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/default/ui/badge.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "button",
    title: "Button",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-slot"],
    files: [
      {
        path: "src/registry/default/ui/button.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "card",
    title: "Card",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/default/ui/card.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "checkbox",
    title: "Checkbox",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-checkbox"],
    files: [
      {
        path: "src/registry/default/ui/checkbox.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "command",
    title: "Command",
    type: "registry:ui",
    dependencies: ["cmdk"],
    registryDependencies: [`${BASE_URL}/r/dialog.json`],
    files: [
      {
        path: "src/registry/default/ui/command.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "dialog",
    title: "Dialog",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-dialog"],
    files: [
      {
        path: "src/registry/default/ui/dialog.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "dropdown-menu",
    title: "Dropdown menu",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-dropdown-menu"],
    files: [
      {
        path: "src/registry/default/ui/dropdown-menu.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "form",
    title: "Form",
    type: "registry:ui",
    dependencies: [
      "@radix-ui/react-label",
      "@radix-ui/react-slot",
      "@hookform/resolvers",
      "zod",
      "react-hook-form",
    ],
    registryDependencies: ["button", "label"],
    files: [
      {
        path: "src/registry/default/ui/form.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "input",
    title: "Input",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/default/ui/input.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "label",
    title: "Label",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-label"],
    files: [
      {
        path: "src/registry/default/ui/label.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "pagination",
    title: "Pagination",
    type: "registry:ui",
    registryDependencies: [`${BASE_URL}/r/button.json`],
    files: [
      {
        path: "src/registry/default/ui/pagination.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "select",
    title: "Select",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-select"],
    files: [
      {
        path: "src/registry/default/ui/select.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "sonner",
    title: "Sonner",
    type: "registry:ui",
    dependencies: ["sonner", "next-themes"],
    files: [
      {
        path: "src/registry/default/ui/sonner.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "table",
    title: "Table",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/default/ui/table.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "tabs",
    title: "Tabs",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-tabs"],
    files: [
      {
        path: "src/registry/default/ui/tabs.tsx",
        type: "registry:ui",
      },
    ],
  },
]

const BLOCKS = [
  {
    name: "pokemons",
    title: "Pokemons",
    description: "A list of pokemons",
    type: "registry:block",
    registryDependencies: ["button"],
    dependencies: ["zod"],
    files: [
      {
        path: "src/registry/default/blocks/pokemons/page.tsx",
        type: "registry:page",
        target: "app/pokemons/page.tsx",
      },
      {
        path: "src/registry/default/blocks/pokemons/components/pokemon-card.tsx",
        type: "registry:component",
      },
      {
        path: "src/registry/default/blocks/pokemons/components/pokemon-image.tsx",
        type: "registry:component",
      },
      {
        path: "src/registry/default/blocks/pokemons/lib/pokemon.ts",
        type: "registry:lib",
      },
      {
        path: "src/registry/default/blocks/pokemons/hooks/use-pokemon.ts",
        type: "registry:hook",
      },
    ],
    categories: ["dashboard"],
  },
]

const REGISTRY = [...UI, ...BLOCKS]

export default REGISTRY
