import React, { useEffect, useState } from 'react';
import { Alert, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Switch } from 'react-native-gesture-handler';

import { withNavigationFocus } from 'react-navigation';
import { ScreenOrientation } from 'expo';
import LayoutBack from '~/components/_layouts/Portrait';
import Header from '~/components/Header';
import { Dropdown } from 'react-native-material-dropdown';
import InputBotaoPanico from '~/components/InputBotaoPanico';
import InputNumeroPanico from '~/components/InputNumeroPanico';

import ButtonSend from '~/components/ButtonSend/ButtonSend';




import {
Tittle,
TitleWrapper,
Container,
ItemSwitchContainer,
ItemText,
ItemWrapper
} from './styles';

function ConfiguracoesBotaoPanico({ navigation, isFocused }) {
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
  const tipoMensagem = [
    {value: 'Assalto/Violência'},
    {value: 'Pessoa/veículo estranho'},
    {value: 'Problemas de infraestrutura'},
    {value: 'Outros'},


  ];

  return (
    <LayoutBack navigation={navigation}>
      <Header >Configurações do Botão do pânico</Header>
      <Container>
        <TitleWrapper>
          <Tittle>
            Quando você apertar o botão do pânico, a seguinte mensagem será enviada para o número cadastrado:
          </Tittle>
        </TitleWrapper>

        <InputBotaoPanico
          style={{ marginTop: 2 }}
                icon="email-outline"
                required="true"
                placeholder="Descrição"
                returnKeyType="next"
        ></InputBotaoPanico>
        <ItemWrapper>
                    <ItemText>Enviar localização exata </ItemText>
                    <ItemSwitchContainer>
                      <Switch
                        hitSlop={{ left: 20, top: 20, bottom: 20, right: 20 }}
                        disabled={false}
                        value={true}

                      />
                    </ItemSwitchContainer>           
                  </ItemWrapper>
        <Text style={{ fontFamily: 'montserrat-regular', fontSize: 15, right: 55, bottom: 35}}> Número de emergência</Text>
        <InputNumeroPanico
          style={{ marginTop: 0 }}
                icon="email-outline"
                required="true"
                placeholder="Descrição"
                returnKeyType="next"
        ></InputNumeroPanico>
          <ButtonSend
            onPress={() => {
              Alert.alert('Salvado com sucesso');
            }}
            name="Salvar"
            upper
          />        
      </Container> 
    </LayoutBack>
  );
}

ConfiguracoesBotaoPanico.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(ConfiguracoesBotaoPanico);
