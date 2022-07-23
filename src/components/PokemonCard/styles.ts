import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { PokemonTypes } from "../../@types/pokemon";

type ContainerProps = {
  backgroundColor: Uppercase<PokemonTypes>;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  position: relative;
  align-items: center;

  border-radius: ${RFValue(8)}px;
  background-color: ${({ theme, backgroundColor }) =>
    theme.POKEMON.COLORS[backgroundColor] || theme.POKEMON.COLORS.NORMAL};

  width: ${RFValue(100)}px;
  height: ${RFValue(112)}px;
  padding-top: ${RFValue(1)}px;

  margin-bottom: ${RFValue(8)}px;
`;

export const ImageContainer = styled.View`
  align-items: flex-end;
  background-color: ${({ theme }) => theme.COLORS.WHITE.SHAPE};
  border-radius: ${RFValue(8)}px;
`;

export const PokemonNumber = styled.Text`
  margin-right: ${RFValue(5)}px;
  margin-top: ${RFValue(1)}px;
  color: ${({ theme }) => theme.POKEMON.COLORS.GRASS};
  line-height: ${RFValue(12)}px;
  font-size: ${RFValue(10)}px;
`;

export const PokemonImage = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: ${RFValue(98)}px;
  height: ${RFValue(72)}px;

  border-radius: ${RFValue(8)}px;
`;

export const Footer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const PokemonName = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  color: ${({ theme }) => theme.COLORS.WHITE.SHAPE};
  line-height: ${RFValue(16)}px;
  font-size: ${RFValue(11)}px;
  text-transform: capitalize;
`;
