import styled from 'styled-components/native';
import { ms, font } from '~/utils/scale';

import colors from '~/styles/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.bgPrimary};
`;

export const ListWrapper = styled.SafeAreaView`
  margin-top: ${ms(0)};
  margin-right: ${ms(10)};
  margin-left: ${ms(10)};
  flex: 1;
  padding: 0;
  background-color: ${colors.bgPrimary};
`;
export const SosButton = styled.View`
  height: 10;
  margin-left: 120; 
`;

export const Tittle = styled.Text`
  color: ${colors.black};
  font-family: 'montserrat-bold';
  font-size: ${Platform.OS === 'ios' ? '13px' : '15px'};
  font-weight: 500;
  text-transform: uppercase;
`;

export const TitleWrapper = styled.View`
  width: 100%;
  height: -10px;
  padding: 10px;
  margin-left: 30;
`;

export const NotificationWrapper = styled.View`
  width: 100%;
  height: 30px;
  
  margin-left: 60;
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
export const ButtonCadastrar = styled.View`
  marginTop: 20%;
  height: 11.5%;
  zIndex: 1;
`;

