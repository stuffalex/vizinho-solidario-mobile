import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Text } from 'react-native';
import PropTypes from 'prop-types';
import { withNavigationFocus } from 'react-navigation';
import { ScreenOrientation } from 'expo';
import Layout from '~/components/_layouts/Portrait';
import Header from '~/components/Header';
import { Switch } from 'react-native-gesture-handler';
import ButtonSend from '~/components/ButtonSend/ButtonSend'





import {
  Container,
  Wrapper,
  WrapperSafe,
  ItemWrapper,
  ItemText,
  ItemSwitchContainer,
  SalvarButton,
  BtnText
} from './styles';

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
      <Header >Configurações de notificações</Header>
      <Container>
        <Wrapper>
          <WrapperSafe>
            <ItemWrapper>
              <ItemText>Assalto/violência</ItemText>
              <ItemSwitchContainer>
                <Switch
                  hitSlop={{ left: 20, top: 20, bottom: 20, right: 20 }}
                  value={true}
                />
              </ItemSwitchContainer>
            </ItemWrapper>
            <ItemWrapper>
              <ItemText>Pessoa/veículo estranho</ItemText>
              <ItemSwitchContainer>
                <Switch
                  hitSlop={{ left: 20, top: 20, bottom: 20, right: 20 }}
                  value={true}
                />
              </ItemSwitchContainer>
            </ItemWrapper>
            <ItemWrapper>
              <ItemText>Pessoa/veículo estranho</ItemText>
              <ItemSwitchContainer>
                <Switch
                  hitSlop={{ left: 20, top: 20, bottom: 20, right: 20 }}
                  value={true}
                />
              </ItemSwitchContainer>
            </ItemWrapper>
            <ItemWrapper>
              <ItemText>Problemas de infraestrutura</ItemText>
              <ItemSwitchContainer>
                <Switch
                  hitSlop={{ left: 20, top: 20, bottom: 20, right: 20 }}
                  value={true}
                />
              </ItemSwitchContainer>
            </ItemWrapper>
            <ItemWrapper>
              <ItemText>Viagem</ItemText>
              <ItemSwitchContainer>
                <Switch
                  hitSlop={{ left: 20, top: 20, bottom: 20, right: 20 }}
                  value={true}
                />
              </ItemSwitchContainer>
            </ItemWrapper>
            <SalvarButton
            onPress={() => {
              Alert.alert('Salvado com sucesso');
            }}
            name="Salvar"
            upper
            >
              <BtnText>Salvar</BtnText>
            </SalvarButton>
          </WrapperSafe>
        </Wrapper>
      </Container>
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
