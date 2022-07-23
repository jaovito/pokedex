import { memo } from "react";
import { Pokemon, PokemonTypes } from "../../@types/pokemon";
import {
  Container,
  PokemonImage,
  ImageContainer,
  PokemonNumber,
  Footer,
  PokemonName,
} from "./styles";

type Props = {
  pokemon: Pokemon;
  onClick: () => void;
};

const MemoPokemonCard = ({ pokemon, onClick }: Props) => {
  const pokemonType =
    pokemon.types[0].type.name.toUpperCase() as Uppercase<PokemonTypes>;

  return (
    <Container
      backgroundColor={pokemonType}
      activeOpacity={0.8}
      onPress={onClick}
    >
      <ImageContainer>
        <PokemonNumber>#{pokemon.id}</PokemonNumber>

        <PokemonImage
          source={{
            uri: pokemon.sprites.other["official-artwork"].front_default,
          }}
        />
      </ImageContainer>

      <Footer>
        <PokemonName>{pokemon.name}</PokemonName>
      </Footer>
    </Container>
  );
};

export const PokemonCard = memo(MemoPokemonCard);
