import React, { useEffect, useState } from 'react';
import { FlatList, RefreshControl, Alert, Text } from 'react-native';
import PropTypes from 'prop-types';
import { withNavigationFocus } from 'react-navigation';
import { Dropdown } from 'react-native-material-dropdown';
import { ScreenOrientation } from 'expo';
import Layout from '~/components/_layouts/Portrait';
import Header from '~/components/Header';

import {
  SosButton,
  Tittle,
  TitleWrapper,
  TextWrapper,
  NotificationWrapper,
} from './styles';
import { View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

function NovaOcorrencia({ navigation, isFocused }) {
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
  let data = [
    {
      value: 'Ocorrência',
    },
    {
      value: 'Mensagem Direta',
    },
  ];

  return (
    <Layout navigation={navigation}>
      <Container>
        <ScrollView>
          <Dropdown label=' Escolha o que deseja enviar:' data={data} />

          <ButtonCadastrar>
            <ButtonGradient
              onPress={() => {
                navigation.navigate('SucessoOcorrenciaEnviada');
              }}
              name='OK'
              upper
            />
          </ButtonCadastrar>
        </ScrollView>
      </Container>
    </Layout>
  );
}

NovaOcorrencia.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(NovaOcorrencia);
