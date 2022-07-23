import { getStatusBarHeight, isIphoneX } from "react-native-iphone-x-helper";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

import { PokemonTypes } from "../../@types/pokemon";

type ContainerProps = {
  backgroundColor: Uppercase<PokemonTypes>;
};

type AboutProps = {
  color: Uppercase<PokemonTypes>;
};

export const Container = styled.View<ContainerProps>`
  flex: 1;
  align-items: center;
  position: relative;

  background-color: ${({ theme, backgroundColor }) =>
    theme.POKEMON.COLORS[backgroundColor] || theme.POKEMON.COLORS.NORMAL};
  padding: ${isIphoneX() ? getStatusBarHeight() : RFValue(24)}px ${RFValue(4)}px
    0;
`;

export const TransparentPokeball = styled.Image`
  position: absolute;
  top: 0;
  right: 0;

  width: ${RFValue(208)}px;
  height: ${RFValue(208)}px;

  margin: ${RFValue(8)}px;
  margin-top: ${isIphoneX() ? getStatusBarHeight() + RFValue(8) : 0}px;
`;

export const PokemonImage = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: ${RFValue(200)}px;
  height: ${RFValue(200)}px;
  margin-top: ${RFValue(10)}px;

  position: relative;
  z-index: 1;
`;

export const Main = styled.View`
  flex: 1;

  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.WHITE.SHAPE};

  position: relative;
  top: ${RFPercentage(-7)}px;
  z-index: 0;

  border-radius: ${RFValue(8)}px;
`;

export const BadgeContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: ${RFPercentage(7)}px;
`;

export const AboutText = styled.Text<AboutProps>`
  text-align: center;
  margin: ${RFValue(20)}px auto;
  font-size: ${RFValue(17)}px;
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  line-height: ${RFValue(18)}px;

  color: ${({ theme, color }) =>
    theme.POKEMON.COLORS[color] || theme.POKEMON.COLORS.NORMAL};
`;
