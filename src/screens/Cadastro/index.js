import React, { useEffect, useState } from 'react';
import { Alert, Dimensions, FlatList, RefreshControl } from 'react-native';
import PropTypes from 'prop-types';
import { withNavigationFocus } from 'react-navigation';
import { ScreenOrientation } from 'expo';

import Layout from '~/components/_layouts/Portrait';
import Header from '~/components/Header';

import {
  Container,
  ListWrapper,
} from './styles';

export function Notification({ navigation, isFocused }) {
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
        <Header>Dados Iniciais</Header>
        <ListWrapper>
        
        </ListWrapper>
      </Container>
    </Layout>
  );
}

Notification.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(Notification);
