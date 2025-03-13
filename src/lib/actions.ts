"use server";

import { PokemonApiResponse } from "@/types";

export const getPokemonByName = async (name: string) => {
  if (!name) {
    return;
  }

  const raw = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

  if (!raw) {
    return;
  }

  const data: PokemonApiResponse = await raw.json();

  if (!data) {
    return;
  }

  return data;
};
