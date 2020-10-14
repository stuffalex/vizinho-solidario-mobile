import styled from 'styled-components/native';
import { ms, font } from '~/utils/scale';

import colors from '~/styles/colors';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  padding-left: 100;

`;
export const Tittle = styled.Text`
  color: ${colors.black};
  font-family: 'montserrat-bold';
  font-size: ${Platform.OS === 'ios' ? '13px' : '15px'};
  text-transform: uppercase;
`;

export const TitleWrapper = styled.View`
  margin-left: -50;
  height: 100;
  bottom: 110;
  width: 100%;
  align-items: center;
`;
export const ContatWrapper = styled.View`
  margin-left: -60;
  height: 50;
  bottom: 70;
  width: 100%;
  align-items: center;
`;

export const TextWrapper = styled.Text`
  color: ${colors.black};
  font-family: 'montserrat-regular';
  font-size: ${Platform.OS === 'ios' ? '13px' : '15px'};
  font-weight: 200;
  text-transform: uppercase;
  margin-left: 100;
  margin-right:60;
`;
export const HeaderDropDown = styled.View`
  width: 100%;
  margin-left: -55px;
  bottom: 180px;

`;

export const ContatoDropDown = styled.View`
  width: 100%;
  margin-left: 10px;
  bottom: -10px;
`;
export const DescricaoInput = styled.TextInput`
background-color: #E9ECEB;
height: 130;
width: 100%;
bottom: 90;
margin-left: -55px;
`;