import { getPokemonByName } from "@/lib/actions";
import Image from "next/image";
import React from "react";

export interface PokemonProps {
  name: string;
}

export const Pokemon: React.FC<PokemonProps> = async ({ name }) => {
  const pokemon = await getPokemonByName(name);

  if (!pokemon) {
    return;
  }

  const sprite = pokemon.sprites?.front_default;

  return (
    <div className="flex flex-col gap-2">
      <h2>{name}</h2>
      {sprite && <Image src={sprite} alt={name} width={96} height={96} />}
      <ul>
        {pokemon.types.map((type, key) => (
          <li key={key}>{type.type.name}</li>
        ))}
      </ul>
    </div>
  );
};
