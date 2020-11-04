import styled from 'styled-components/native';
import { font } from '~/utils/scale';
import colors from '~/styles/colors';

export const TextInput = styled.Text`
  color: ${colors.black};
  font-family: 'montserrat-regular';
  font-size: ${Platform.OS === 'ios' ? '13px' : '15px'};
  font-weight: 500;
  text-transform: uppercase;
`;

export const View = styled.View`
  flex: 1;
  background-color: #fff;
`;
