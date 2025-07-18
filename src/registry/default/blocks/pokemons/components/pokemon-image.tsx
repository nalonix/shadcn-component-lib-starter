"use client"

/* eslint-disable @next/next/no-img-element */
import { usePokemonImage } from "@/registry/default/blocks/pokemons/hooks/use-pokemon"

export function PokemonImage({
  name,
  number,
}: {
  name: string
  number: number
}) {
  const imageUrl = usePokemonImage(number)

  if (!imageUrl) {
    return null
  }

  return <img src={imageUrl} alt={name} />
}
