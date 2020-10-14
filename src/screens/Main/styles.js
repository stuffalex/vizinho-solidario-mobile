import styled, { css } from 'styled-components/native';
import { ms, font } from '~/utils/scale';
import { RectButton } from 'react-native-gesture-handler';


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
export const SosButton = styled(RectButton)`
  height: 28%;
  bottom: -10%;
  margin-left: 28%; 
  margin-right: 30%;

`;

export const ButtonOpen = styled(RectButton)`
  margin: 5px;
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
  padding: 30px;
  margin-left: 40;
`;

export const NotificationWrapper = styled.View`
  width: 100%;
  height: 80px;
  bottom: -20px;
  margin-right: 10%;
  margin-left: 15%;
`;

export const HeaderConfiguracoes = styled(RectButton)`
  margin-left: -0%;
  width: 100%;
  height: 8%;
  bottom: -17%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.secundary};
`;

export const TextWrapper = styled.Text`
  color: ${colors.black};
  font-family: 'montserrat-regular';
  font-size: ${Platform.OS === 'ios' ? '13px' : '15px'};
  font-weight: 200;
  text-transform: uppercase;
  margin-left: 80;
  margin-right:10;
`;

export const TextHelperWrapper = styled.Text`
  color: ${colors.black};
  font-family: 'montserrat-regular';
  font-size: ${Platform.OS === 'ios' ? '13px' : '15px'};
  font-weight: 200;
  text-transform: uppercase;
  margin-left: 80;
  margin-right:70;
`;

