import React, { useState, useRef, useEffect } from 'react';
import {
  KeyboardAvoidingView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  AsyncStorage,
  Keyboard,
  Dimensions,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { deviceName as expoDeviceName } from 'expo-device';
import { Linking, Notifications, ScreenOrientation } from 'expo';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { authRequest, authError, authFailure } from '~/store/modules/auth/actions';
import { statusBarHide } from '~/store/modules/settings/actions';
// Utils
import estados from '~/utils/ufs';
import colors from '~/styles/colors';
import Logo from '~/components/Svg/Logo';
import ErrorIcon from '~/components/Svg/ErrorMessage';
import SelectMenu from '~/components/MenuPopup';
import Input from '~/components/Input';
import ButtonGradient from '~/components/Buttons/ButtonGradient';

const ErrorOpacity = styled.TouchableOpacity``;
const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
    backgroundColor: '#ccc',
  },
  backgroundLinear: {
    flex: 1,
    color: colors.white
  },
  loginFailure: {
    paddingTop: 10,
    textAlign: 'center',
    color: colors.white,
    fontFamily: 'montserrat-regular',
    fontStyle: 'normal',
    fontSize: 16,
    top: '10%',
    bottom: '6.95%',
  },
  loginContainer: {
    flex: 0.72,
    backgroundColor: colors.white,
    borderBottomLeftRadius: wp('10%'),
    borderBottomRightRadius: wp('10%'),
    paddingRight: wp('10%'),
    paddingLeft: wp('10%'),
    justifyContent: 'flex-end',
    zIndex: 1,
  },
  loginWrapper: {
    alignItems: 'center',
    paddingBottom: wp('5%'),
  },
  loginWrapperText: {
    textAlign: 'center',
    fontFamily: 'montserrat-regular',
    fontWeight: '600',
    fontSize: hp('2.4%'),
    color: '#0D7F7F',
  },
  loginForm: {
    color: colors.white,
    backgroundColor: '#E9ECEB'
  },
  buttonEntrar: {
    marginTop: wp('15%'),
    height: hp('8%'),
    marginBottom: -28,
    zIndex: 1,
  },
  buttonCadastrar: {
    marginTop: wp('15%'),
    height: hp('9%'),
    marginBottom: -28,
    zIndex: 1,
  },
  helperContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: colors.danger,
  },
  helperContainerButton: {
    paddingTop: hp('1.5%'),
    paddingBottom: hp('1.5%'),
    paddingLeft: wp('1%'),
    paddingRight: wp('1%'),
    marginTop: hp('1.5%'),
    marginBottom: hp('1.5%'),
  },
  helperContainerText: {
    fontSize: hp('1.6%'),
    color: 'rgba(255, 255, 255, 0.5)',
    fontFamily: 'montserrat-regular',
  },
  infoContainer: {
    flex: 0.28,
    justifyContent: 'flex-end',
    zIndex: 0,
  },
  infoContainerFailure: {
    flex: 0.28,
    color: Colors.secundar,
    opacity: 0.95,
    borderBottomLeftRadius: 50,
  },
  view: {
    flex: 1,
    height: hp('100%'),
    opacity: 1,
  },
  viewFailure: {
    flex: 1,
    height: hp('100%'),
    opacity: 0.8,
  },
  infoSociaisButton: {
    padding: 5,
    marginLeft: 3,
    marginRight: 3,
  },
  infoCopyrightContainer: {
    marginTop: hp('2%'),
  },
  infoCopyrightText: {
    fontSize: hp('1.4%'),
    color: '#fff',
  },
  infoPresidenteText: {
    fontSize: hp('2,5%'),
    color: '#fff',
  },
  errorMessage: {
    position: 'absolute',
    backgroundColor: '#17D591',
    width: '100.5%',
    height: hp('80%'),
    left: '0%',
    top: hp('68%'),
    alignContent: 'stretch',
    opacity: 1,
    borderRadius: 50,
    zIndex: 1,
    flex: 1,
  },
});
export default function SignIn({ navigation, children }) {
  // Dispatch for Action Redux
  const dispatch = useDispatch();
  // Get State Redux
  const loading = useSelector(state => state.auth.loading);
  const error = useSelector(state => state.auth.error);
  // Ref
  const loginRef = useRef();
  const passwordRef = useRef();
  const [ufs] = useState(estados());
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [uf, setUF] = useState('');
  const [deviceName, setDeviceName] = useState('');
  const [deviceToken, setDeviceToken] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const today = new Date();
  useEffect(() => {
    async function initScreen() {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.Orientation.PORTRAIT_UP
      );
      const tokenExpo = await Notifications.getExpoPushTokenAsync();

      setDeviceToken(tokenExpo);
    }
    initScreen();
    StatusBar.setBackgroundColor('#FFFF');
    dispatch(statusBarHide(true));
    return () => {
      StatusBar.setBackgroundColor('#FFFF');
    };
  }, [dispatch]);
  const handleOpenLinkPresidente = () => {
    Linking.openURL('https://www.facom.ufms.br');
  };
  const handleSubmit = async () => {
    // try {
    //   setErrorMessage(null);
    //   // dispatch(authError());
    //   // dispatch(authRequest(login, senha));
    //   Keyboard.dismiss();
    //   if (login == '') {
    //     setErrorMessage('Informe o Login');
    //     return false;
    //   }
    //   if (senha == '') {
    //     setErrorMessage('Informe a Senha');
    //     return false;
    //   }
    //   dispatch(authRequest(login, senha));
    // } catch (e) {
    //   // dispatch(authFailure());
    //   return false;
    // }
  };
  const handleClearError = () => {
    setErrorMessage(null);
    // dispatch(authError());
  };
  return (
    <KeyboardAvoidingView
      style={styles.keyboardView}
      behavior={Platform.OS === 'ios' || Dimensions.get('window').height > 750 ? 'padding' : null}
    >
      <View style={[error || errorMessage ? styles.viewFailure : styles.view]}>
        <LinearGradient
          colors={['#01A0A0', '#01A0A0', '#5EE2B3']}
          start={{ x: 0, y: 0.2 }}
          end={{ x: 1, y: 0.1 }}
          style={styles.backgroundLinear}
        >
          <View style={{ ...styles.loginContainer }}>
            <View style={styles.loginWrapper}>
              <Logo width="100%" height="140" />
              <Text style={styles.loginWrapperText}>
                Bem-vindo ao aplicativo Vizinho Solidário
              </Text>
            </View>
            <View style={styles.loginForm}>
           
              <Input
                style={{ marginTop: hp('2%') }}
                icon="email-outline"
                required="true"
                placeholder="E-mail"
                autoCorrect={false}
                autoCapitalize="none"
                returnKeyType="next"
                value={login}
                onChangeText={setLogin}
                ref={loginRef}
              />
              <Input
                style={{ marginTop: hp('2%') }}
                password
                icon="lock-outline"
                placeholder="Senha"
                autoCorrect={false}
                autoCapitalize="none"
                autoCapitalize="none"
                returnKeyType="send"
                value={senha}
                onChangeText={setSenha}
                onSubmitEditing={handleSubmit}
                ref={passwordRef}
              />
              <View style={styles.helperContainer} />
            </View>
            <View style={styles.buttonEntrar}>
              <ButtonGradient
               onPress={() => {
                navigation.navigate('Main');
              }}
                name="entrar"
                upper
                // onPress={handleSubmit}
                loading={loading}
              />
            </View>
            <View style={styles.buttonCadastrar}>
              <ButtonGradient
              onPress={() => {
                navigation.navigate('Notification');
              }}
                name="Cadastrar"
                upper
                // onPress={handleSubmit}
                loading={loading}
              />
            </View>
          </View>
          <View style={styles.infoContainer}>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
            >
              <View style={{ flexDirection: 'row' }}>
              </View>
              <View style={{ marginTop: hp('2%'), marginBottom: hp('4%') }}>
                <RectButton onPress={handleOpenLinkPresidente}>
                <Text style={styles.infoPresidenteText}>
                  Você é um presidente? Clique aqui!
                </Text>
                </RectButton>
              </View>
              <View style={{ marginTop: hp('2%'), marginBottom: hp('4%') }}>
                
                <Text style={styles.infoCopyrightText}>
                  Copyright © {`${today.getFullYear()}`} | Todos os direitos reservados - UFMS
                </Text>
                
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>
      {(errorMessage || error) && (
        <ErrorOpacity style={styles.errorMessage} onPress={handleClearError}>
          <ErrorIcon width="100px " height="80px" left="38.5%" top="10%" />
          <Text style={styles.loginFailure}>{errorMessage || error}</Text>
        </ErrorOpacity>
      )}
      
    </KeyboardAvoidingView>
  );
}
SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
};
