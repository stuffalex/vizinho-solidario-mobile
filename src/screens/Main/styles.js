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
export const BoxCardScroll = styled.ScrollView`
  flex: 0 0 auto;
`;
export const ViewBoxCardScroll = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding-top: 10px;
`;
export const BoxCard = styled.TouchableOpacity`
  margin: 30px;
  width: 245px;
  height: 90px;
  padding: 14px;
  border-radius: 5px;
  background-color: #fff;
`;
export const Text1BoxCard = styled.Text`
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
  color: #665d6a;
`;
export const Text2BoxCard = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  line-height: 12px;
  text-transform: uppercase;
  color: #938998;
`;
export const Text3BoxCard = styled.Text`
  margin-top: 5px;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  text-transform: uppercase;
  color: #2ecc50;
`;

export const ContainerText = styled.View`
  width: 100%;
  height: 80%;
  padding-top: 30%;
  justify-content: flex-start;
  align-items: center;
`;
export const TextNotificationError = styled.Text`
  color: ${colors.greyText};
  font-family: 'montserrat-bold';
  font-size: ${font(16)};
  font-weight: 600;
  line-height: 18px;
  padding: 15px;
`;
