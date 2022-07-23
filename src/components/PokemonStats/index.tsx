import { useCallback } from "react";
import { Pokemon, PokemonTypes } from "../../@types/pokemon";
import { formatMoves } from "../../utils/formatStats";
import {
  Container,
  StatsList,
  StatsTitle,
  Stat,
  StatName,
  StatValue,
  StatProgress,
  StatProgressBar,
  StatProgressFakeBar,
  Divider,
} from "./styles";

type Props = {
  pokemon: Pokemon;
};

export const PokemonStats = ({ pokemon }: Props) => {
  const percentage = useCallback((value: number) => {
    const y = value * 100;
    const x = y / 255;
    return x;
  }, []);

  return (
    <Container>
      <StatsTitle
        color={
          pokemon.types[0].type.name.toUpperCase() as Uppercase<PokemonTypes>
        }
      >
        Base Stats
      </StatsTitle>

      <StatsList>
        {pokemon.stats.map((stat) => (
          <Stat key={stat.stat.name}>
            <StatName
              color={
                pokemon.types[0].type.name.toUpperCase() as Uppercase<PokemonTypes>
              }
            >
              {formatMoves(stat)}
            </StatName>

            <Divider />

            <StatValue>{stat.base_stat.toString().padStart(3, "0")}</StatValue>

            <StatProgress>
              <StatProgressBar
                color={
                  pokemon.types[0].type.name.toUpperCase() as Uppercase<PokemonTypes>
                }
                percentage={percentage(stat.base_stat)}
              />
              <StatProgressFakeBar
                color={
                  pokemon.types[0].type.name.toUpperCase() as Uppercase<PokemonTypes>
                }
              />
            </StatProgress>
          </Stat>
        ))}
      </StatsList>
    </Container>
  );
};
