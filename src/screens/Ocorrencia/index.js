import React, { useEffect, useState } from 'react';
import { FlatList, RefreshControl, Alert, Text } from 'react-native';
import PropTypes from 'prop-types';
import { withNavigationFocus } from 'react-navigation';
import { ScreenOrientation } from 'expo';
import Layout from '~/components/_layouts/Portrait';
import Header from '~/components/Header';
import Sos from '~/components/Svg/Sos'



import {
SosButton,
Tittle,
TitleWrapper,
TextWrapper,
NotificationWrapper,
} from './styles';
import { View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

function Ocorrencia({ navigation, isFocused }) {
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
    <Layout navigation={navigation}>
      <View>

      <Header>Botão do Pânico</Header>
      <TitleWrapper>
        <Tittle>Botão do pânico</Tittle>
      </TitleWrapper>
        <TextWrapper> Se precisar de ajuda é só apertar o botão abaixo</TextWrapper>
      <TitleWrapper></TitleWrapper>
      <SosButton
       onPress={() => {
        navigation.navigate('ConfiguracaoBotaoPanico');
      }}
      > 
        <Sos size={150}/>
      </SosButton>
      <TitleWrapper></TitleWrapper>
      <TitleWrapper></TitleWrapper>
      <TitleWrapper></TitleWrapper>

      <NotificationWrapper>
        <Tittle>Últimas notificações da sua região</Tittle>
      </NotificationWrapper>
      <TextWrapper> Tudo Tranquilo por aqui</TextWrapper>
      </View>
    </Layout>
  );
}

Ocorrencia.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(Ocorrencia);
