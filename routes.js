import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { useSelector } from 'react-redux';
import colors from './styles/colors';
import SideBar from './components/SideBar';
import SignIn from '~/screens/SignIn/';



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
  },
  {
    headerMode: 'none',
  }
);

/**
 * Drawer
 * @param {state} drawerPosition left | right
 */
export const AppDrawer = drawerPosition =>
  createDrawerNavigator(
    {
    //   Main: {
    //     screen: Main,
    //     navigationOptions: {
    //       title: 'Home',
    //     },
    //   },
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
        activeTintColor: colors.primary,
        activeBackgroundColor: colors.grey25,
        inactiveTintColor: colors.bgLoginContainer,
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
