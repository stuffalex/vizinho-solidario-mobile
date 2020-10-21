import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import colors from '~/styles/colors';
export const Container = styled.View`
  flex: 1;
  background-color: ${colors.bgPrimary};
`;

export const ListWrapper = styled.SafeAreaView`
  flex: 1;
  padding: 10px;
  background-color: ${colors.bgPrimary};
`;

export const ContainerButtons = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ContainerText = styled.View`
  width: 100%;
  height: 80%;
  justify-content: center;
  align-items: center;
  background-color: ${colors.bgPrimary};
`;

export const TextNotificationError = styled.Text`
  color: ${colors.greyText};
  font-family: 'montserrat-bold';
  font-size: 15%;
  font-weight: 600;
  line-height: 18px;
  padding: 15px;
`;
