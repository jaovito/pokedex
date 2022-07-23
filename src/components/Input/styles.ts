import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import Feather from "@expo/vector-icons/Feather";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;

  background: ${({ theme }) => theme.COLORS.WHITE.SHAPE};
  color: ${({ theme }) => theme.COLORS.WHITE.TEXT};

  border: ${RFValue(1)}px solid ${({ theme }) => theme.COLORS.LIGHT_GREY.SHAPE};
  border-radius: ${RFValue(8)}px;
  height: ${RFValue(28)}px;

  margin: ${RFValue(8)}px 0;

  padding-left: ${RFValue(8)}px;
`;

export const Icon = styled(Feather)`
  margin-right: ${RFValue(8)}px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.PURPLE};
  padding: ${RFValue(5.8)}px;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE.SHAPE};
  font-size: 15px;
`;
