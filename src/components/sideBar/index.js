import React from 'react';
import { useDispatch } from 'react-redux';
import { Alert } from 'react-native';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import { DrawerNavigatorItems } from 'react-navigation-drawer';
import pkg from '~/../package.json';

import {
  Container,
  WrapperMenu,
  MenuContainer,
  IconLogo,
  LogoutContainer,
  LogoutButton,
  LogoutText,
  VersionContainer,
  VersionText,
} from './styles';
import Logo from '~/components/Svg/Logo2';

import { authRequestLogout } from '~/store/modules/auth/actions';

export default function SideBar(props) {
  const dispatch = useDispatch();

  return (
    <Container showsVerticalScrollIndicator={false}>
      <WrapperMenu>
        <MenuContainer>
          <IconLogo>
            <Logo width="80%" height="40px" />
          </IconLogo>
          <DrawerNavigatorItems {...props} />
          <LogoutContainer>
            <LogoutButton
              onPress={() => {
                Alert.alert(
                  'Sair',
                  'Deseja mesmo sair?',
                  [
                    {
                      text: 'Não',
                      onPress: () => {
                        return null;
                      },
                    },
                    {
                      text: 'Sair do Sistema',
                      onPress: async () => {
                        dispatch(authRequestLogout());
                      },
                    },
                  ],
                  { cancelable: false }
                );
              }}
            >
              <Icon size={16} color="#6B5974" name="exit-to-app" />
              <LogoutText>Sair</LogoutText>
            </LogoutButton>
          </LogoutContainer>
          <VersionContainer>
            <VersionText>Versão: {pkg.version}</VersionText>
          </VersionContainer>
        </MenuContainer>
      </WrapperMenu>
    </Container>
  );
}
