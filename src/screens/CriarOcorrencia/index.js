import React, { useEffect, useState } from 'react';
import { FlatList, RefreshControl, Alert, Text } from 'react-native';
import PropTypes from 'prop-types';
import { withNavigationFocus } from 'react-navigation';
import { ScreenOrientation } from 'expo';
import Layout from '~/components/_layouts/Portrait';
import Header from '~/components/Header';
import DropDownPicker from 'react-native-dropdown-picker';

import {
  SosButton,
  Tittle,
  TitleWrapper,
  TextWrapper,
  NotificationWrapper,
} from './styles';
import { View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

function CriarOcorrencia({ navigation, isFocused }) {
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
      <Container>
        <ScrollView>
          <label>
            Escolha o tipo de ocorrência:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value='violencia'>Assalto/Violência</option>
              <option value='pessoaEstranha'>Pessoa/Veiculo Estranho</option>
              <option value='infraestrutura'>Problema de infraestutura</option>
              <option value='outros'>Outros</option>
            </select>
          </label>
          //nao sei se ta certo aqui
          <input type='submit' value='Enviar' />
          <HeaderText>Descrição da ocorrência</HeaderText>
          <StringInput></StringInput>
          <HeaderTextWrapper>
            <ButtonEnviar>
              <ButtonGradient
                onPress={() => {
                  navigation.navigate('SucessoOcorrenciaEnviada');
                }}
                name='Enviar'
                upper
              />
            </ButtonEnviar>
          </HeaderTextWrapper>
        </ScrollView>
      </Container>
    </Layout>
  );
}

CriarOcorrencia.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(Ocorrencia);
