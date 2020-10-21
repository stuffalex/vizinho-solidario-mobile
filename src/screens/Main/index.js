import React, { useEffect, useState } from 'react';
import { FlatList, RefreshControl, Alert, Text, Linking } from 'react-native';
import PropTypes from 'prop-types';
import { withNavigationFocus } from 'react-navigation';
import { ScreenOrientation } from 'expo';
import LayoutBack from '~/components/_layouts/Portrait';
import Header from '~/components/Header';
import Sos from '~/components/Svg/Sos'
import { Feather as DrawerIcon } from '@expo/vector-icons';
import { MaterialCommunityIcons as SettingsIcon } from '@expo/vector-icons';

import {
  SosButton,
  Tittle,
  TitleWrapper,
  TextWrapper,
  NotificationWrapper,
  TextHelperWrapper,
  HeaderConfiguracoes
} from './styles';
import { View } from 'react-native';

function Main({ navigation, isFocused }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      if (isFocused) {
        await ScreenOrientation.lockAsync(
          ScreenOrientation.Orientation.PORTRAIT_UP
        );
      }
    }
    fetchData();

    // Unmounted
    function cleanup() {
      if (!isFocused) {
        setLoading(true);
      }
    }

    cleanup();
  }, [isFocused]);

  return (
    <LayoutBack navigation={navigation}>
      <View>
        <Header >Botão do Pânico</Header>
        <TitleWrapper>
          <Tittle>Você está em uma emergência?</Tittle>
        </TitleWrapper>
        <TextHelperWrapper>Se precisar de ajuda é só apertar o botão abaixo</TextHelperWrapper>
        <HeaderConfiguracoes
          onPress={() => navigation.navigate('ConfiguracoesBotaoPanico')}
        >
          <Text style={{ fontFamily: 'montserrat-regular', marginLeft: 50 }} >Configurações do Botão do Pânico</Text>
          <SettingsIcon style={{ marginRight: 40 }} name="settings" size={30} color='#FFFF' />
        </HeaderConfiguracoes>
        <SosButton
          onPress={() => { Linking.openURL('tel:119'); }}
        >
          <Sos size={150} />
        </SosButton>
        <TitleWrapper></TitleWrapper>
        <NotificationWrapper>
          <Tittle>Últimas notificações da sua região</Tittle>
        </NotificationWrapper>
        <TextWrapper> Tudo Tranquilo por aqui</TextWrapper>
      </View>
    </LayoutBack>
  );
}

Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(Main);
