import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { PokemonTypes } from "../../@types/pokemon";

type StatsTitleProps = {
  color: Uppercase<PokemonTypes>;
};

type StatsBarProps = {
  color: Uppercase<PokemonTypes>;
  percentage: number;
};

export const Container = styled.View`
  flex: 1;
  padding: 0 ${RFValue(18)}px;
`;

export const StatsList = styled.View``;

export const StatsTitle = styled.Text<StatsTitleProps>`
  text-align: center;
  margin: ${RFValue(20)}px auto;
  font-size: ${RFValue(17)}px;
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  line-height: ${RFValue(18)}px;

  color: ${({ theme, color }) =>
    theme.POKEMON.COLORS[color] || theme.POKEMON.COLORS.NORMAL};
`;

export const Stat = styled.View`
  flex-direction: row;
  align-items: center;
  position: relative;
`;

export const StatName = styled.Text<StatsTitleProps>`
  margin-right: ${RFValue(6)}px;
  text-align: right;
  font-family: ${({ theme }) => theme.FONTS.TITLE};

  color: ${({ theme, color }) =>
    theme.POKEMON.COLORS[color] || theme.POKEMON.COLORS.NORMAL};
`;

export const Divider = styled.View`
  height: 100%;
  width: 2px;

  margin-right: ${RFValue(6)}px;
  background-color: ${({ theme }) => theme.COLORS.LIGHT_GREY.SHAPE};

  position: absolute;
  left: 13%;
`;

export const StatValue = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  width: 15%;
  position: absolute;
  left: 18%;
`;

export const StatProgress = styled.View`
  margin-left: ${RFValue(4)}px;
  position: absolute;
  right: 0;
  width: 70%;
`;

export const StatProgressBar = styled.View<StatsBarProps>`
  position: absolute;
  width: ${({ percentage }) => percentage}%;
  height: ${RFValue(4)}px;
  border-radius: 4px;
  background-color: ${({ theme, color }) =>
    theme.POKEMON.COLORS[color] || theme.POKEMON.COLORS.NORMAL};
`;

export const StatProgressFakeBar = styled.View<StatsTitleProps>`
  position: absolute;
  width: 100%;
  height: ${RFValue(4)}px;
  border-radius: 4px;
  opacity: 0.5;
  background-color: ${({ theme, color }) =>
    theme.POKEMON.COLORS[color] || theme.POKEMON.COLORS.NORMAL};
`;
