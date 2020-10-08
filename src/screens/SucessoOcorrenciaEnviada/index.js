import React, { useEffect, useState } from 'react';
import { FlatList, RefreshControl, Alert, Text } from 'react-native';
import PropTypes from 'prop-types';
import { withNavigationFocus } from 'react-navigation';
import { ScreenOrientation } from 'expo';
import Layout from '~/components/_layouts/Portrait';
import Header from '~/components/Header';
import ButtonGradient from '~/components/Buttons/ButtonGradient';

import {
  SosButton,
  Tittle,
  TitleWrapper,
  TextWrapper,
  NotificationWrapper,
  ButtonCadastrar,
} from './styles';
import { View } from 'react-native';

function SucessoOcorrenciaEnviada({ navigation, isFocused }) {
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
        <Header>Ocorrência</Header>
        <TitleWrapper>
          <Tittle>Sua ocorrência foi enviado com sucesso!</Tittle>
        </TitleWrapper>
        <TitleWrapper></TitleWrapper>
        <TitleWrapper></TitleWrapper>
        <TitleWrapper></TitleWrapper>

        <TextWrapper> Deseja enviar uma nova ocorrência?</TextWrapper>
        <TitleWrapper></TitleWrapper>
        <ButtonCadastrar>
          <ButtonGradient
            onPress={() => {
              navigation.navigate('NovaOcorrencia');
            }}
            name='Sim'
            upper
          />
        </ButtonCadastrar>
        <ButtonCadastrar>
          <ButtonGradient
            onPress={() => {
              navigation.navigate('Home');
            }}
            name='Não'
            upper
          />
        </ButtonCadastrar>
      </View>
    </Layout>
  );
}

SucessoOcorrenciaEnviada.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(SucessoOcorrenciaEnviada);
