import React, { useEffect, useState } from 'react';
import { StatusBar, Platform } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { ScreenOrientation } from 'expo';
import PropTypes from 'prop-types';

import HeaderLogo from '~/components/Svg/HeaderLogo';



import {
  Container,
  WrapperSafe,
  WrapperHeaderHorizontal,
  ButtonDrawer,
  Wrapper,
  ButtonNotify,
  ButtonLogoDrawer,
  NotificationCounter,
} from './styles';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 0 : StatusBar.currentHeight;

export default function Layout({ navigation, children }) {
  const [counterNotification, setCounterNotification] = useState(0);
  useEffect(() => {
    async function layoutPortrait() {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT
      );
    }
    layoutPortrait();
  }, []);

  return (
    <Container
      style={{
        marginTop: STATUSBAR_HEIGHT,
      }}
    >
      <WrapperSafe>
        <WrapperHeaderHorizontal style={{ paddingTop: 10 }}>
          <ButtonDrawer onPress={() => navigation.openDrawer()}>
            <Icon size={32} color="#fff" name="menu" />
          </ButtonDrawer>
          <ButtonLogoDrawer onPress={() => navigation.openDrawer()}>
            <HeaderLogo width="102px" height="100%" />
          </ButtonLogoDrawer>
        </WrapperHeaderHorizontal>
        <Wrapper>{children}</Wrapper>
      </WrapperSafe>
    </Container>
  );
}

Layout.propTypes = {
  navigation: PropTypes.shape({
    openDrawer: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
};