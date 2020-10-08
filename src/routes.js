import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { useSelector } from 'react-redux';
import { Feather as DrawerIcon } from '@expo/vector-icons';
import colors from './styles/colors';
//import SideBar from './components/SideBar';
import SignIn from '~/screens/Auth/SignIn';
/**
 * Drawer Routes Components
 */
import Main from '~/screens/Main';
import Cadastro from '~/screens/Cadastro';
import SucessoCadastro from '~/screens/SucessoCadastro';
import SucessoOcorrenciaEnviada from '~/screens/SucessoOcorrenciaEnviada';
import CriarOcorrencia from '~/screens/CriarOcorrencia';
import Ocorrencia from '~/screens/Ocorrencia';
import NovaOcorrencia from '~/screens/NovaOcorrencia';

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
    Main,
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
export const AppDrawer = (drawerPosition) =>
  createDrawerNavigator(
    {
      Main: {
        screen: Main,
        navigationOptions: {
          title: 'Home',
          drawerIcon: ({ tintColor }) => (
            <DrawerIcon name='home' size={16} color={tintColor} />
          ),
        },
      },
      Cadastro: {
        screen: Cadastro,
        navigationOptions: {
          title: 'Cadastro',
          // eslint-disable-next-line react/prop-types
          drawerIcon: ({ tintColor }) => (
            <DrawerIcon name='bell' size={16} color={tintColor} />
          ),
        },
      },
      Ocorrencia: {
        screen: Ocorrencia,
        navigationOptions: {
          title: 'Ocorrencia',
          // eslint-disable-next-line react/prop-types
          drawerIcon: ({ tintColor }) => (
            <DrawerIcon name='bell' size={16} color={tintColor} />
          ),
        },
      },
      CriarOcorrencia: {
        screen: CriarOcorrencia,
        navigationOptions: {
          title: 'CriarOcorrencia',
          // eslint-disable-next-line react/prop-types
          drawerIcon: ({ tintColor }) => (
            <DrawerIcon name='bell' size={16} color={tintColor} />
          ),
        },
      },
      NovaOcorrencia: {
        screen: NovaOcorrencia,
        navigationOptions: {
          title: 'NovaOcorrencia',
          // eslint-disable-next-line react/prop-types
          drawerIcon: ({ tintColor }) => (
            <DrawerIcon name='bell' size={16} color={tintColor} />
          ),
        },
      },
      SucessoOcorrenciaEnviada: {
        screen: SucessoOcorrenciaEnviada,
        navigationOptions: {
          title: 'SucessoOcorrenciaEnviada',
          // eslint-disable-next-line react/prop-types
          drawerIcon: ({ tintColor }) => (
            <DrawerIcon name='bell' size={16} color={tintColor} />
          ),
        },
      },
      SucessoCadastro: {
        screen: SucessoCadastro,
        navigationOptions: {
          title: 'SucessoCadastro',
          // eslint-disable-next-line react/prop-types
          drawerIcon: ({ tintColor }) => (
            <DrawerIcon name='bell' size={16} color={tintColor} />
          ),
        },
      },
      Stack: AppStack,
    },
    {
      contentComponent: (props) => {
        const updateProps = {
          ...props,
          items: props.items.filter(
            (item) => !hiddenDrawerItems.includes(item.key)
          ),
        };
        //return <SideBar {...updateProps} />;
      },
      drawerPosition,
      contentOptions: {
        activeTintColor: colors.primary,
        activeBackgroundColor: colors.grey25,
        inactiveTintColor: colors.bgLoginContainer,
      },
    }
  );

export default (signedIn = false) => {
  const { drawer } = useSelector((state) => state.settings.screen);
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
