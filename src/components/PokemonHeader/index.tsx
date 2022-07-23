import { Pokemon } from "../../@types/pokemon";
import { useNavigate } from "../../hooks/useNavigate";
import { Header, Icon, PokemonId, PokemonName, Wrapper } from "./styles";

type Props = {
  params: Pokemon;
};

export const PokemonHeader = ({ params }: Props) => {
  const { goBack } = useNavigate();

  return (
    <Header>
      <Wrapper>
        <Icon name="arrow-left" onPress={goBack} />

        <PokemonName>{params.name}</PokemonName>
      </Wrapper>

      <PokemonId>#{params.id}</PokemonId>
    </Header>
  );
};
