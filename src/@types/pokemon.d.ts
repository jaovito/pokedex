import { DefaultTheme } from "styled-components/native";

interface PokemonInfo {
  name: string;
  url: string;
}

interface Moves {
  move: {
    name: string;
    url: string;
  };
}

interface Ability {
  name: string;
  url: string;
}

interface Status {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

type PokemonTypes = Lowercase<keyof DefaultTheme["POKEMON"]["COLORS"]>;

interface Types {
  type: {
    name: string;
    url: string;
  };
}

type Pokemon = {
  id: number;
  name: string;
  moves: Moves[];
  abilities: Ability[];
  stats: Status[];
  weight: number;
  height: number;
  types: Types[];
  sprites: {
    other: {
      home: {
        front_default: string;
      };
      "official-artwork": {
        front_default: string;
      };
    };
  };
};
