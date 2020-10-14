import styled from 'styled-components/native';
import colors from '~/styles/colors';

export const Container = styled.View`
  margin-left: -55px;
  height: 140px;
  width: 100%;
  background: rgba(0, 0, 0, 0.01);
  background: rgba(0, 0, 0, 0.01);
  border-bottom-width: 1px;
  border-bottom-color: rgba(255, 255, 255, 0.6);
  border-radius: 8px;
  flex-direction: row;
  bottom: 100px;
  background-color: #E9ECEB;

`;
export const TextInput = styled.TextInput.attrs(props => ({
  placeholderTextColor: '#929494',
}))`
  flex: 1;
  font-size: 15px;
  font-family: 'montserrat-regular';
  font-weight: bold;
  margin-left: 10px;
  bottom: 50px;
  color: #929494;
`;
