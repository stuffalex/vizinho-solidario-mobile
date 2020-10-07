import styled from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import colors from '~/styles/colors';

export const Container = styled.ScrollView`
  padding-top: ${hp('5%')};
  flex: 1;
`;

export const WrapperMenu = styled.View`
  flex: 1;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  height: ${hp('100%')};
`;

export const MenuContainer = styled.View`
  flex: 1;
`;

export const IconLogo = styled.View`
  width: 100%;
  height: auto;
  margin-top: ${hp('2%')};
  margin-bottom: ${hp('2%')};
`;

export const LogoutContainer = styled.View`
  flex-direction: row;
  margin-top: 30px;
  margin-bottom: ${hp('3%')};
  padding-right: ${wp('4%')};
  padding-left: 20px;
  justify-content: space-between;
  align-items: flex-end;
`;

export const LogoutButton = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  flex-direction: row;
  padding: 0px 0px 10px 0;
  align-items: center;
`;

export const LogoutText = styled.Text`
  color: #6b5974;
  font-size: 16px;
  font-family: 'montserrat-bold';
  margin-left: 35px;
`;

export const VersionContainer = styled.View`
  position: absolute;
  bottom: ${hp('6%')};
  right: 10px;
`;

export const VersionText = styled.Text`
  color: ${colors.primary75};
  font-size: 11px;
  font-family: 'montserrat-bold';
`;
