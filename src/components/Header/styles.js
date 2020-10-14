import styled from 'styled-components/native';
import { Platform } from 'react-native';
import colors from '~/styles/colors';

export const HeaderWrapper = styled.View`
  width: 100%;
  height: -30px;
  padding: 16px;
`;

export const HeaderText = styled.Text`
  color: #137F88;
  font-family: 'montserrat-bold';
  font-size: ${Platform.OS === 'ios' ? '13px' : '15px'};
  font-weight: 500;
  text-transform: uppercase;
`;
