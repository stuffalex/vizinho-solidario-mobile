import styled from 'styled-components/native';
import { Platform } from 'react-native';

/**
 * File Style: Screen.js
 */
export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  margin-top: 0;
`;

export const WrapperSafe = styled.SafeAreaView`
  flex: 1;
`;

export const WrapperHeaderHorizontal = styled.View`
  flex-direction: row;
  background-color: #137F88;
  width: 100%;
  height: auto;
  padding: ${props => (props.spacing ? '20px 0px' : '20px')};
  align-items: center;
`;

export const ButtonDrawer = styled.TouchableOpacity`
  align-items: flex-start;
  margin-right: 15px;
`;

export const WrapperSafeVertical = styled.SafeAreaView`
  flex: 1;
  flex-direction: row;
`;

export const WrapperHeaderVertical = styled.View`
  flex-direction: column;
  background-color: #609;
  height: 100%;
  width: 80px;
  padding: 10px 0px 20px 0;
  align-items: center;
`;

export const ButtonDrawerVertical = styled.TouchableOpacity`
  align-items: center;
  width: 100%;
  margin-bottom: 15px;
  /* margin: 45px 20px; */
`;

export const WrapperMenu = styled.View`
  flex: 1;
`;

export const Wrapper = styled.View`
  flex: 1;
`;

export const MenuText = styled.Text`
  color: #000;
  font-size: 20;
  font-weight: 500;
`;

export const ButtonNotify = styled.TouchableOpacity`
  position: absolute;
  left: 89.8%;
  right: 0.6%;
  top: 20.29%;
  bottom: 60.45%;
`;

export const ButtonLogoDrawer = styled.TouchableOpacity`
  position: absolute;
  left: 20%;
  right: 55.6%;
  top: 5%;
  bottom: 40.45%;
`;

