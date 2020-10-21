import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import colors from '~/styles/colors';
export const Container = styled.View`
  flex: 1;
  background-color: ${colors.bgPrimary};
`;

export const Wrapper = styled.View`
  flex: 1;
  padding: 0 20px;
`;

export const WrapperSafe = styled.SafeAreaView``;

export const TitleContainer = styled.View`
  margin: 20px 0 0 0;
`;

export const TitleText = styled.Text`
  color: ${colors.primary60};
  font-size: 16px;
  font-family: 'montserrat-bold';
  text-transform: uppercase;
`;

export const ItemWrapper = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 0;
`;

export const ItemText = styled.Text`
  font-family: 'montserrat-regular';
  font-size: 14px;
  color: ${colors.primary75};
  flex: 0.85;
  flex-wrap: wrap;
`;

export const ItemSwitchContainer = styled.View`
  padding: 10px 0;
`;
export const SalvarButton = styled(RectButton)`
  margin-left: 25%;
  width: 50%;
  height: 12%;
  bottom: -17%;
  border-radius: 20;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.bgNotLinear};
`;
export const BtnText = styled.Text`
  color: ${colors.white};
  margin-left: 30%;
  font-size: 20px;
  font-family: 'montserrat-bold';
`;

