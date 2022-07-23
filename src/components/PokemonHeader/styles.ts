import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import Feather from "@expo/vector-icons/Feather";

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  padding: ${RFValue(19)}px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.COLORS.WHITE.SHAPE};
  font-size: ${RFValue(17)}px;
  margin-right: ${RFValue(16)}px;
`;

export const PokemonName = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE.SHAPE};
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  font-size: ${RFValue(24)}px;

  text-transform: capitalize;
`;

export const PokemonId = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE.SHAPE};
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  font-size: ${RFValue(12)}px;
`;
