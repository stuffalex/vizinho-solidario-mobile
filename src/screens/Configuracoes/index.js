import React, { useEffect, useState } from 'react';
import { FlatList, RefreshControl, Alert, Text } from 'react-native';
import PropTypes from 'prop-types';
import { withNavigationFocus } from 'react-navigation';
import { ScreenOrientation } from 'expo';
import Layout from '~/components/_layouts/Portrait';
import Header from '~/components/Header';
import Sos from '~/components/Svg/Sos'
import ButtonSave from '~/components/ButtonSave/ButtonSave';




import {
SosButton,
Tittle,
TitleWrapper,
TextWrapper,
NotificationWrapper,
ButtonCadastrar,
} from './styles';
import { View } from 'react-native';

function Configuracoes({ navigation, isFocused }) {
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

      <Header >Configurações</Header>
      <TitleWrapper>
        <Tittle>teste</Tittle>
      </TitleWrapper>
      <TitleWrapper></TitleWrapper>
      <TitleWrapper></TitleWrapper>
      <TitleWrapper></TitleWrapper>

        <TextWrapper> Aguarde sua aprovação no bairro para que possa acessar ao sistema</TextWrapper>
      <TitleWrapper></TitleWrapper>
      <ButtonCadastrar>
            <ButtonSave
              onPress={() => {
                navigation.navigate('SignIn');
              }}
                name="Ok"
                upper
              />
          </ButtonCadastrar>
      </View>
    </Layout>
  );
}

Configuracoes.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(Configuracoes);
