import React, { useEffect, useState } from 'react';
import { FlatList, RefreshControl, Alert, Text } from 'react-native';
import PropTypes from 'prop-types';
import { withNavigationFocus } from 'react-navigation';
import { ScreenOrientation } from 'expo';
import LayoutBack from '~/components/_layouts/Portrait';
import Header from '~/components/Header';
import { Dropdown } from 'react-native-material-dropdown';
import InputDescricao from '~/components/InputDescricao';
import ButtonSend from '~/components/ButtonSend/ButtonSend';




import {
Tittle,
TitleWrapper,
Container,
HeaderDropDown,
ContatWrapper,
ContatoDropDown
} from './styles';

function Ocorrencias({ navigation, isFocused }) {
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
      <Header >Criar ocorrência</Header>
      <Container>
        <TitleWrapper>
          <Tittle>
            Selecione o tipo de ocorrência
          </Tittle>
        </TitleWrapper>
        <HeaderDropDown>
          <Dropdown
                placeholder={"Escolha o tipo de ocorrência"}
                containerStyle={{ justifyContent: 'center', marginBottom: 15 }}
                data={tipoMensagem}
                dropdownPosition={-2.6}
                placeholderTextColor="#fff"
                inputContainerStyle={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 5,
                  backgroundColor: '#01A0A0',
                  height: 40,
                  paddingTop: 0,
                  paddingLeft: 10,
                }}
                baseColor="#fff"
                textColor="#fff"
                pickerStyle={{
                  marginTop: Platform.OS === 'ios' ? 80: 60,
                  backgroundColor: '#01A0A0',
                  opacity: 0.85,
                  borderRadius: 5,
                  bottom: '20%',
                  marginLeft: '4.5%',
                  width: '72%',
                }}
                rippleInsets={{
                  top: 0,
                }}
              />
        </HeaderDropDown>
        <InputDescricao
          style={{ marginTop: 2 }}
                icon="email-outline"
                required="true"
                placeholder="Descrição"
                returnKeyType="next"
        ></InputDescricao>
          <ButtonSend
            onPress={() => {
              Alert.alert('Enviado com sucesso');
            }}
            name="Enviar"
            upper
          />        

      </Container> 
    </LayoutBack>
  );
}

Ocorrencias.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(Ocorrencias);
