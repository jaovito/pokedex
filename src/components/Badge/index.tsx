import { PokemonTypes } from "../../@types/pokemon";
import { Container, Text } from "./styles";

type Props = {
  pokemonType: Uppercase<PokemonTypes>;
  name: string;
};

export const Badge = ({ pokemonType, name }: Props) => {
  return (
    <Container backgroundColor={pokemonType}>
      <Text>{name}</Text>
    </Container>
  );
};
