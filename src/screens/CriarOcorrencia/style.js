import styled from 'styled-components/native';
import { font } from '~/utils/scale';
import colors from '~/styles/colors';

export const HeaderText = styled.Text`
  color: ${colors.black};
  font-family: 'montserrat-regular';
  font-size: ${Platform.OS === 'ios' ? '13px' : '15px'};
  font-weight: 500;
  text-transform: uppercase;
`;
export const StringInput = styled.TextInput`
  background-color: #e9eceb;
  height: 90;
`;

export const ButtonEnviar = styled.View`
  margintop: 10%;
  height: 11.5%;
  zindex: 1;
`;
