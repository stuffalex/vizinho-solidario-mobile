import React, { useEffect, useState } from 'react';
import { StatusBar, Platform } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { ScreenOrientation } from 'expo';
import PropTypes from 'prop-types';

import HeaderLogo from '~/components/Svg/HeaderLogo';
import NotifyIcon from '~/components/Svg/NotifyBell';
import api from '~/services/api';
import apiRoutes from '~/services/apiRoutes';

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

  useEffect(() => {
    async function numberNotification() {
      try {
        const { API_NOTIFY_HISTORY_COUNTER } = await apiRoutes();
        const response = await api.get(API_NOTIFY_HISTORY_COUNTER);
        setCounterNotification(response.data);
        // eslint-disable-next-line no-empty
      } catch (e) {}
    }
    numberNotification();
  }, [counterNotification]);

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
          <ButtonNotify
            onPress={() => {
              // eslint-disable-next-line react/prop-types
              if (navigation.state.routeName == 'Notification') {
                navigation.navigate(`Main`);
              } else {
                navigation.navigate(`Notification`);
              }
            }}
          >
            <NotifyIcon />
            <NotificationCounter
              style={{
                left:
                  // eslint-disable-next-line no-nested-ternary
                  counterNotification < 10
                    ? '40%'
                    : counterNotification <= 99
                    ? '36%'
                    : '34%',
              }}
            >
              {counterNotification <= 99 ? counterNotification : '99+'}
            </NotificationCounter>
          </ButtonNotify>
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
