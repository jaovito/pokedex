import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

type SectionProps = {
  middle?: boolean;
};

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
`;

export const Section = styled.View<SectionProps>`
  align-items: center;
  justify-content: center;

  padding: 0 ${RFValue(16)}px;
  border-left-color: ${(props) => props.theme.COLORS.LIGHT_GREY.SHAPE};
  border-right-color: ${(props) => props.theme.COLORS.LIGHT_GREY.SHAPE};

  border-left-width: ${(props) => (props.middle ? RFValue(1) : 0)}px;
  border-right-width: ${(props) => (props.middle ? RFValue(1) : 0)}px;
`;

export const InfoContainer = styled.View<{ list?: boolean }>`
  flex-direction: ${(props) => (props.list ? "column" : "row")};
  align-items: center;
  justify-content: center;

  max-width: ${RFValue(100)}px;
`;

export const InfoText = styled.Text<{ noSpace?: boolean }>`
  color: ${(props) => props.theme.COLORS.DARK_GREY.SHAPE};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  line-height: ${RFValue(16)}px;

  margin-left: ${(props) => (!props.noSpace ? RFValue(8) : 0)}px;

  text-transform: ${(props) => (props.noSpace ? "capitalize" : "lowercase")}; ;
`;

export const InfoType = styled.Text`
  margin-top: ${RFValue(10)}px;
  color: ${(props) => props.theme.COLORS.MEDIUM_GREY.SHAPE};
  font-size: ${RFValue(10)}px;
  line-height: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.FONTS.TEXT};
`;
