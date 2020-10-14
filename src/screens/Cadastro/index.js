import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import { withNavigationFocus } from 'react-navigation';
import { ScreenOrientation } from 'expo';

import LayoutBack from '~/components/_layouts/PortraitBack'
import Header from '~/components/Header';
import ButtonGradient from '~/components/Buttons/ButtonGradient';



import {
  Container,
  ListWrapper,
  HeaderText,
  HeaderTextWrapper,
  ButtonCadastrar,
  StringInput
} from './styles';

export function Cadastro({ navigation, isFocused }) {
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
      <Container>
        <ScrollView>
          
        <ListWrapper>
        <HeaderTextWrapper>
        <Header>Dados Iniciais</Header>
        </HeaderTextWrapper>
          <HeaderTextWrapper>
          <HeaderText>Nome</HeaderText>
          <StringInput></StringInput>

          <HeaderText>Sobrenome</HeaderText>
          <StringInput></StringInput>

          <HeaderText>CPF</HeaderText>
          <StringInput></StringInput>

          <HeaderText>E-mail</HeaderText>
          <StringInput></StringInput>

          <HeaderText>Senha</HeaderText>
          <StringInput></StringInput>

          <HeaderText>Confirmar Senha</HeaderText>
          <StringInput></StringInput>

          </HeaderTextWrapper>
          <HeaderTextWrapper>
        <Header>Endereço</Header>
        </HeaderTextWrapper>
        <HeaderTextWrapper>
          <HeaderText>CEP</HeaderText>
          <StringInput></StringInput>

          <HeaderText>Logradouro</HeaderText>
          <StringInput></StringInput>

          <HeaderText>Número</HeaderText>
          <StringInput></StringInput>


          <HeaderText>Bairro</HeaderText>
          <StringInput></StringInput>

          <HeaderText>UF</HeaderText>
                    <StringInput></StringInput>


          <HeaderText>Complemento</HeaderText>
          <StringInput></StringInput>
          <ButtonCadastrar>
            <ButtonGradient
              onPress={() => {
                navigation.navigate('SucessoCadastro');
              }}
                name="Cadastrar"
                upper
              />
          </ButtonCadastrar>
          </HeaderTextWrapper>
         
             
        </ListWrapper>
        </ScrollView>
      </Container>
    </LayoutBack>
  );
}

Cadastro.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(Cadastro);
