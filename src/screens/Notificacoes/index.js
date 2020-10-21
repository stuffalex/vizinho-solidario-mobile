import React, { useEffect, useState } from 'react';
import {FlatList, RefreshControl } from 'react-native';
import PropTypes from 'prop-types';
import { withNavigationFocus } from 'react-navigation';
import { ScreenOrientation } from 'expo';
import Layout from '~/components/_layouts/Portrait';
import Header from '~/components/Header';
const [errorMessage, setErrorMessage] = useState(false);

import {
  Container,
  ListWrapper,
  TextNotificationError,
  ContainerText,
  ButtonNotificationSelected,
  TextButtonNotificationSelected,
  ContainerButtons,
} from './styles';
import { Dimensions } from 'react-native';

function Notificacoes({ navigation, isFocused }) {
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


  const emptyList = React.useCallback(() => {
    let msg;
    const windowHeight = Dimensions.get('window').height;

    if (errorMessage) {
      msg = 'Não há notificações';
    }
    return (
      <ContainerText style={[{ height: windowHeight * 0.7 }]}>
        <TextNotificationError>{msg}</TextNotificationError>
      </ContainerText>
    );
  }, [errorMessage]);

  return (
    <Layout navigation={navigation}>
      <Header >Notificações</Header>
      <Container>
        <Wrapper>
          <WrapperSafe>
            <ListWrapper>
                  <FlatList
                    showsVerticalScrollIndicator={false}
                    horizontal={false}
                    ListEmptyComponent={emptyList()}
                  />
            </ListWrapper>
          </WrapperSafe>
        </Wrapper>
      </Container>
    </Layout>
  );
}

Notificacoes.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(Notificacoes);
