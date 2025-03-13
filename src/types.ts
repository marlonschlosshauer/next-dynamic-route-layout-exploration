export interface PokemonApiResponse {
  abilities: {
    ability: { name: string; url: string };
    is_hidden: boolean;
    slot: number;
  }[];
  base_experience: number;
  cries: { latest: string; legacy: string };
  forms: { name: string; url: string }[];
  height: number;
  id: number;
  is_default: boolean;
  moves: {
    move: { name: string; url: string };
    version_group_details: {
      level_learned_at: number;
      move_learn_method: { name: string; url: string };
      version_group: { name: string; url: string };
    }[];
  }[];
  name: string;
  order: number;
  species: { name: string; url: string };
  sprites: {
    back_default: string | null;
    front_default: string | null;
    other: {
      dream_world: { front_default: string | null };
      home: { front_default: string | null };
      "official-artwork": { front_default: string | null };
    };
  };
  stats: {
    base_stat: number;
    effort: number;
    stat: { name: string; url: string };
  }[];
  types: {
    slot: number;
    type: { name: string; url: string };
  }[];
  weight: number;
}
