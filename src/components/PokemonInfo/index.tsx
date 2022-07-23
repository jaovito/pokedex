import { RFValue } from "react-native-responsive-fontsize";
import { useMemo } from "react";
import {
  Container,
  Section,
  InfoContainer,
  InfoText,
  InfoType,
} from "./styles";

import WeightIcon from "../../assets/weight.svg";
import HeightIcon from "../../assets/height.svg";
import theme from "../../theme";
import { Pokemon } from "../../@types/pokemon";

type Props = {
  pokemon: Pokemon;
};

export const PokemonInfo = ({ pokemon }: Props) => {
  const infos = useMemo(() => {
    const weight = pokemon.weight.toString().padStart(2, "0");
    const weightLn = weight.length;
    const formatedWeight = `${weight.substring(
      0,
      weightLn - 1
    )},${weight.substring(weightLn - 1)}`;

    const height = pokemon.height.toString().padStart(2, "0");
    const heightLn = height.length;
    const formatedHeight = `${height.substring(
      0,
      heightLn - 1
    )},${height.substring(heightLn - 1)}`;

    return { weight: formatedWeight, height: formatedHeight };
  }, [pokemon.weight, pokemon.height]);

  return (
    <Container>
      <Section>
        <InfoContainer>
          <WeightIcon
            width={RFValue(20)}
            height={RFValue(20)}
            color={theme.COLORS.DARK_GREY.SHAPE}
          />

          <InfoText>{infos.weight} kg</InfoText>
        </InfoContainer>

        <InfoType>Weight</InfoType>
      </Section>

      <Section middle>
        <InfoContainer>
          <HeightIcon
            width={RFValue(20)}
            height={RFValue(20)}
            color={theme.COLORS.DARK_GREY.SHAPE}
          />

          <InfoText>{infos.height} m</InfoText>
        </InfoContainer>

        <InfoType>Height</InfoType>
      </Section>

      <Section>
        <InfoContainer list>
          {pokemon.moves.map((move, index) => {
            if (index < 3) {
              return (
                <InfoText key={`${move.move.name}-${index.toString()}`} noSpace>
                  {move.move.name.replace(/-/gi, " ")}
                </InfoText>
              );
            }

            return null;
          })}
        </InfoContainer>

        <InfoType>Moves</InfoType>
      </Section>
    </Container>
  );
};
