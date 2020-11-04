/* eslint-disable global-require */
import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { AppLoading, SplashScreen, Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import { withNavigationFocus } from 'react-navigation';
import Root from '~/index';
import { Alert, Linking } from 'react-native';
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [notification, setNotification] = useState({});
  useEffect(() => {
    Notifications.addListener((notify) => setNotification(notify.data));
    if (notification.origin === 'selected') {
      withNavigationFocus(Main);
    }
    SplashScreen.hide();
    async function loadPermissions() {
      const { status: existingStatus } = await Permissions.getAsync(
        Permissions.NOTIFICATIONS
      );
      let finalStatus = existingStatus;

      if (existingStatus !== 'granted') {
        const { status } = await Permissions.askAsync(
          Permissions.NOTIFICATIONS
        );
        finalStatus = status;
      }

      if (finalStatus !== 'granted') {
        Alert.alert(
          'Notificações',
          'É necessário habilitar nas configurações do seu celular a permissão para receber notificações'
        );
      }
    }
    loadPermissions();
    return () => {};
  });
  const loadedFonts = () => {
    return Font.loadAsync({
      'officina-serif-bold': require('./assets/fonts/officina-serif-bold.ttf'),
      'montserrat-light': require('./assets/fonts/montserrat-light.ttf'),
      'montserrat-regular': require('./assets/fonts/montserrat-regular.ttf'),
      'montserrat-bold': require('./assets/fonts/montserrat-bold.ttf'),
    });
  };
  return !fontLoaded ? (
    <>
      <AppLoading
        startAsync={loadedFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    </>
  ) : (
    <Root />
  );
}
