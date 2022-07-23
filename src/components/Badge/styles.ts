import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { PokemonTypes } from "../../@types/pokemon";

type ContainerProps = {
  backgroundColor: Uppercase<PokemonTypes>;
};

export const Container = styled.View<ContainerProps>`
  padding: ${RFValue(4)}px ${RFValue(15)}px;
  border-radius: ${RFValue(15)}px;

  background-color: ${({ theme, backgroundColor }) =>
    theme.POKEMON.COLORS[backgroundColor] || theme.POKEMON.COLORS.NORMAL};

  margin: 0 ${RFValue(8)}px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE.SHAPE};
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  text-transform: capitalize;
  font-size: ${RFValue(12)}px;
`;
