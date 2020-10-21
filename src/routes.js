import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { useSelector } from 'react-redux';
import { Feather as DrawerIcon } from '@expo/vector-icons';
import { AntDesign as WarningIcon } from '@expo/vector-icons'; 

import colors from './styles/colors';
import SideBar from './components/SideBar';
import SignIn from '~/screens/Auth/SignIn';
/**
 * Drawer Routes Components
 */
import Main from '~/screens/Main';
import Cadastro from '~/screens/Cadastro';
import SucessoCadastro from '~/screens/SucessoCadastro';
import Configuracoes from '~/screens/Configuracoes';
import Ocorrencias from '~/screens/Ocorrencias';
import Mensagem from '~/screens/Mensagem';
import ConfiguracoesBotaoPanico from '~/screens/ConfiguracoesBotaoPanico';
// import Notificacoes from '~/screens/Notificacoes';


/**
 * Page Remove Drawer Menu
 */
const hiddenDrawerItems = ['Stack'];

/**
 *
 * @param {*} drawerPosition
 */
const AppStack = createStackNavigator(
  {
    Cadastro,
    SucessoCadastro,
    ConfiguracoesBotaoPanico
  },
  {
    headerMode: 'none',
  }
);

/**
 * Drawer
 * Registre aqui as screens
 * @param {state} drawerPosition left | right
 */
export const AppDrawer = drawerPosition =>
  createDrawerNavigator(
    {
      Main: {
        screen: Main,
        navigationOptions: {
          title: 'Home',
          drawerIcon: ({ tintColor }) => (
            <DrawerIcon name="home" size={16} color={tintColor} />
          ),
        },
      },
      // Notificacoes: {
      //   screen: Notificacoes,
      //   navigationOptions: {
      //     title: 'Notificação',
      //     drawerIcon: ({ tintColor }) => (
      //       <DrawerIcon name="bell" size={16} color={tintColor} />
      //     ),
      //   },
      // },
      Ocorrencias: {
        screen: Ocorrencias,
        navigationOptions: {
          title: 'Criar ocorrência',
          // eslint-disable-next-line react/prop-types
          drawerIcon: ({ tintColor }) => (
            <WarningIcon name="warning" size={16} color={tintColor} />
          ),
        },
      },
      Mensagem: {
        screen: Mensagem,
        navigationOptions: {
          title: 'Enviar Mensagem',
          // eslint-disable-next-line react/prop-types
          drawerIcon: ({ tintColor }) => (
            <WarningIcon name="message1" size={16} color={tintColor} />
          ),
        },
      },
      Configuracoes: {
        screen: Configuracoes,
        navigationOptions: {
          title: 'Configurações',
          // eslint-disable-next-line react/prop-types
          drawerIcon: ({ tintColor }) => (
            <DrawerIcon name="settings" size={16} color={tintColor} />
          ),
        },
      },
      Stack: AppStack,
    },
    {
      contentComponent: props => {
        const updateProps = {
          ...props,
          items: props.items.filter(
            item => !hiddenDrawerItems.includes(item.key)
          ),
        };
        return <SideBar {...updateProps} />;
      },
      drawerPosition,
      contentOptions: {
        activeTintColor: colors.white,
        activeBackgroundColor: colors.grey50,
        inactiveTintColor: colors.greyText,
      },
    }
  );

export default (signedIn = false) => {
  const { drawer } = useSelector(state => state.settings.screen);
  return createAppContainer(
    createSwitchNavigator(
      {
        Auth: createSwitchNavigator({
          SignIn, // Login Screen
        }),
        App: createSwitchNavigator({
          Drawer: AppDrawer(drawer),
        }),
      },
      {
        initialRouteName: signedIn ? 'App' : 'Auth',
      }
    )
  );
};
