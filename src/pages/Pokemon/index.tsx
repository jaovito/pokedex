import { useRoute } from "@react-navigation/native";

import {
  Container,
  TransparentPokeball,
  PokemonImage,
  Main,
  BadgeContainer,
  AboutText,
} from "./styles";

import transparentPokeballImg from "../../assets/transparent-pokeball.png";
import { Pokemon as PokemonType, PokemonTypes } from "../../@types/pokemon";
import { PokemonHeader } from "../../components/PokemonHeader";
import { Badge } from "../../components/Badge";
import { PokemonInfo } from "../../components/PokemonInfo";
import { PokemonStats } from "../../components/PokemonStats";

type Route = PokemonType;

export const Pokemon = () => {
  const route = useRoute();
  const params = route.params as Route;
  const pokemonType =
    params.types[0].type.name.toUpperCase() as Uppercase<PokemonTypes>;

  console.log(params.abilities[0]);

  return (
    <Container backgroundColor={pokemonType}>
      <TransparentPokeball source={transparentPokeballImg} />

      <PokemonHeader params={params} />

      <PokemonImage
        source={{
          uri: params.sprites.other["official-artwork"].front_default,
        }}
      />

      <Main>
        <BadgeContainer>
          {params.types.map((type) => (
            <Badge
              key={type.type.name}
              pokemonType={
                type.type.name.toUpperCase() as Uppercase<PokemonTypes>
              }
              name={type.type.name}
            />
          ))}
        </BadgeContainer>

        <AboutText
          color={
            params.types[0].type.name.toUpperCase() as Uppercase<PokemonTypes>
          }
        >
          About
        </AboutText>

        <PokemonInfo pokemon={params} />

        <PokemonStats pokemon={params} />
      </Main>
    </Container>
  );
};
