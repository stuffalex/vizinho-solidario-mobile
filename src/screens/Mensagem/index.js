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

function Mensagem({ navigation, isFocused }) {
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
    {value: 'Viagem'},
    {value: 'Outros'}
  ];

  const Vizinho = [
    {value: 'Todos'},
    {value: 'Fernando'},
    {value: 'Hanna'},
    {value: 'Edini'},
    {value: 'Alexya'},
    {value: 'Mimura'}
  ];

  return (
    <LayoutBack navigation={navigation}>
      <Header >Enviar Mensagem</Header>
      <Container>
        <TitleWrapper>
          <Tittle>
            Selecione o tipo de mensagem
          </Tittle>
        </TitleWrapper>
        <HeaderDropDown>
          <Dropdown
                placeholder={"Escolha o tipo de mensagem"}
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
                  marginBottom: Platform.OS === 'ios' ? 10: 20,
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
         <ContatWrapper>
          <Tittle>
            Selecione para quem irá enviar a mensagem
          </Tittle>
          <ContatoDropDown>
          <Dropdown
                placeholder={"Escolha o vizinho"}
                containerStyle={{ justifyContent: 'center', marginBottom: 10 }}
                data={Vizinho}
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
                  marginTop: Platform.OS === 'ios' ? 75: 40,
                  backgroundColor: '#01A0A0',
                  opacity: 0.85,
                  borderRadius: 5,
                  bottom: '30%',
                  marginLeft: '4.5%',
                  width: '72%',
                }}
                rippleInsets={{
                  top: 0,
                }}
              />
          </ContatoDropDown>
        </ContatWrapper>
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

Mensagem.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(Mensagem);
