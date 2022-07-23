import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { getBottomSpace, isIphoneX } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: ${RFValue(32)}px;
`;

export const Image = styled.Image`
  width: 24px;
  height: 24px;
  margin: ${RFValue(8)}px ${RFValue(16)}px ${RFValue(8)}px;
`;

export const LogoText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  color: ${({ theme }) => theme.COLORS.DARK_GREY.SHAPE};
  font-size: ${RFValue(24)}px;
`;
