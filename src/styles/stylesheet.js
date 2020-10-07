// export {colors} from './colors'
import { StyleSheet, Platform } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const colors = {
  white: '#fff',
  black: '#000',
};

export const styleFiltro = StyleSheet.create({
  filtro: {
    borderRadius: 6,
    paddingBottom: 5,
  },
  iconeFiltro: {},
});

export const styleMenuRelatorio = StyleSheet.create({
  container: {
    marginTop: -20,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: '#FFF',
    flexDirection: 'row',
  },
  dropdownMeta: {
    width: '40%',
    marginTop: -30,
  },
  dropdownAno: {
    width: '15%',
    marginTop: -30,
  },
  dropdownMes: {
    width: '15%',
    marginTop: -30,
  },
  servico: {
    fontWeight: '800',
    fontSize: 15,
    lineHeight: 18,
    color: '#665D6A',
    textTransform: 'uppercase',
    letterSpacing: 0.05,
  },
});

export const styleAndroid = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#660099',
  },

  textColor: {
    color: colors.white,
    fontSize: 22,
  },

  boxLogin: {
    flexDirection: 'column',
    marginTop: 40,
    marginRight: 30,
    marginBottom: 20,
    marginLeft: 30,
    height: hp('60%'),
    width: wp('70%'),
    borderRadius: 5,
    borderTopWidth: 3,
    borderTopColor: '#D9BFE5',
    backgroundColor: '#FFF',
  },
  loginContainer: {
    padding: 30,
    flex: 1,
  },
});

export const stylex = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#660099',
  },
  boxLogin: {
    flexDirection: 'column',
    ...Platform.select({
      ios: {
        marginTop: 10,
        width: wp('70%'),
        height: 400,
      },
      android: {
        marginTop: 40,
        height: hp('60%'),
        width: wp('70%'),
      },
    }),
    backgroundColor: '#FFF',
    marginRight: 30,
    marginBottom: 20,
    marginLeft: 30,
    borderRadius: 5,
    borderTopWidth: 3,
    borderTopColor: '#D9BFE5',
  },
  loginContainer: {
    flex: 1,
    ...Platform.select({
      ios: {
        padding: 20,
      },
      android: {
        padding: 30,
      },
    }),
  },
  inputLogin: {
    width: wp('55%'),
    ...Platform.select({
      ios: {
        fontSize: 19,
        marginBottom: 10,
      },
      android: {
        fontSize: 18,
        marginBottom: 25,
      },
    }),
    borderBottomWidth: 2,
    borderBottomColor: '#D9BFE5',
    textAlign: 'center',
  },
  pickerUF: {
    width: wp('55%'),
    borderBottomWidth: 2,
    borderBottomColor: '#D9BFE5',
    ...Platform.select({
      ios: {
        marginBottom: 9,
      },
      android: {
        marginBottom: 25,
      },
    }),
    textAlign: 'center',
  },

  loginButton: {
    padding: 20,
    ...Platform.select({
      ios: {
        width: wp('55%'),
      },
    }),
    backgroundColor: '#660099',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonTextAndroid: {
    color: '#FFF',
    fontSize: 18,
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 18,
    height: 25,
    textAlign: 'center',
    alignContent: 'center',
  },
  errorAndroid: {
    color: '#d34',
    textAlign: 'center',
  },
});

export const styleSwitchNotification = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 15,
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 30,
  },
  notifyText: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  notifyTextStyle: {
    fontSize: 12,
    lineHeight: 15,
    color: '#665D6A',
    alignItems: 'flex-start',
  },
});

export const styleHeaderNav = StyleSheet.create({
  headerTouch: {
    flex: 1,
    marginLeft: 20,
    alignItems: 'center',
  },
});

export const styleLogoHeaderNav = StyleSheet.create({
  logo: {
    height: 28,
    width: 132,
    marginLeft: 20,
  },
  back: {
    height: 28,
    width: 28,
    marginLeft: 20,
  },
});

export const styleTextNotificationCard = StyleSheet.create({
  textTitulo: {
    fontSize: 11,
    lineHeight: 13,
    color: '#665D6A',
    fontWeight: '600',
  },
  textData: {
    fontSize: 10,
    lineHeight: 15,
    color: '#938998',
  },
  textConteudo: {
    fontSize: 15,
    lineHeight: 15,
    color: '#665D6A',
  },
});

export const styleDrawer = StyleSheet.create({
  TextStyle: {
    flexDirection: 'row',
    display: 'flex',
    // marginLeft:40,
    justifyContent: 'center',
    width: 100,
    height: 30,
    // textAlign: 'center',
    color: '#660099',
    textTransform: 'uppercase',
  },
});

export const styleInit = StyleSheet.create({
  texto: {
    // fontFamily:'Montserrat',
    marginLeft: 30,
    color: '#665D6A',
    position: 'absolute',
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 60,
    display: 'flex',
    alignItems: 'center',
    textTransform: 'uppercase',
  },
  divider: {
    height: 46.52,
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: '#EEEEEE',
  },
});

export const notificationCard = StyleSheet.create({
  icon: {
    marginRight: 15,
    height: 26,
    width: 29,
  },
  iconDrawer: {
    height: 26,
    width: 26,
    tintColor: '#660099',
  },
});

export const listNotification = StyleSheet.create({
  notificationBox: {
    width: 250,
    height: 70,
    marginLeft: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export const logout = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  texto: {
    fontSize: 20,
    color: '#660099',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  containerBotao: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-around',
    width: '100%',
  },
  botao: {
    backgroundColor: '#660099',
    width: 140,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export const subtituloScreenNotificacao = StyleSheet.create({
  container: {
    width: 100,
    left: 30,
    top: 30,
  },
});

export const subtituloScreen = StyleSheet.create({
  container: {
    padding: 30,
  },
  titulo: {
    fontWeight: '800',
    fontSize: 12,
    lineHeight: 15,
    textTransform: 'uppercase',
    color: '#665D6A',
    marginBottom: 30,
  },
});

export const grafico = StyleSheet.create({
  porcento: {
    display: 'none',
  },
  valor: {
    alignItems: 'flex-start',
  },
});
export const legenda = StyleSheet.create({
  porcento: {
    display: 'none',
  },
  valor: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export const relatorio = StyleSheet.create({
  container: {
    padding: 30,
  },
  tituloBotao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subTitulo: {
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 15,
    color: '#665D6A',
    marginBottom: 30,
  },
  botao: {
    borderRadius: 5,
    width: 45,
    height: 20,
    backgroundColor: '#660099',
    alignItems: 'center',
    marginBottom: 30,
  },
  botaoTexto: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  ver: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titulo: {
    fontWeight: '800',
    fontSize: 12,
    lineHeight: 15,
    textTransform: 'uppercase',
    color: '#665D6A',
    marginBottom: 30,
  },
});
