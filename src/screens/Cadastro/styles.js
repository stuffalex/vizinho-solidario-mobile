import styled from 'styled-components/native';
import { font } from '~/utils/scale';
import colors from '~/styles/colors';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const ListWrapper = styled.SafeAreaView`
  flex: 1;
  padding: -10px;
  background-color: ${colors.bgPrimary};
`;

export const HeaderText = styled.Text`
  color: ${colors.black};
  font-family: 'montserrat-regular';
  font-size: ${Platform.OS === 'ios' ? '13px' : '15px'};
  font-weight: 500;
  text-transform: uppercase;
`;
export const HeaderTextWrapper = styled.View`
  width: 100%;
  height: -20px;
  padding: 16px;
`;
export const ButtonCadastrar = styled.View`
  marginTop: 10%;
  height: 11.5%;
  zIndex: 1;
`;

export const StringInput = styled.TextInput`
background-color: #E9ECEB;
height: 40;
`;


