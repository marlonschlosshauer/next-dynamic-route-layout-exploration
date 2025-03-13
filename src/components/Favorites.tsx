import { Pokemon } from "@/components/Pokemon";
import { Suspense } from "react";

export const Favorites = () => (
  <div className="grid grid-cols-3 grid-rows-3 gap-4">
    {["Ditto", "Mewtwo", "Bulbasaur", "Charizard"].map((name, key) => (
      <Suspense key={key} fallback={<i>Loading...</i>}>
        <Pokemon name={name} />
      </Suspense>
    ))}
  </div>
);
