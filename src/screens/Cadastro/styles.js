import styled from 'styled-components/native';
import { font } from '~/utils/scale';
import colors from '~/styles/colors';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
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

export const ButtonNotificationSelected = styled.TouchableOpacity`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  margin-top: 10px;
  width: 31%;
  height: 40;
  align-items: center;
  justify-content: center;
  background-color: #d9d9d9;
`;

export const TextButtonNotificationSelected = styled.Text`
  color: #665d6a;
  font-style: normal;
  font-weight: 600;
  font-size: ${font(12)};
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
`;

export const TextNotificationError = styled.Text`
  color: ${colors.greyText};
  font-family: 'montserrat-bold';
  font-size: ${font(15)};
  font-weight: 600;
  line-height: 18px;
  padding: 15px;
`;
