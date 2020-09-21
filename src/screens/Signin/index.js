import React, { useState, useRef, useEffect } from 'react';
import {
  KeyboardAvoidingView,
  View,
  Text,
  Dimensions,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { deviceName as expoDeviceName } from 'expo-device';
import { Linking, Notifications, ScreenOrientation } from 'expo';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ButtonGradient from '~/components/Buttons/ButtonGradient';


export default function SignIn(){


    return (
        <KeyboardAvoidingView
          style={styles.keyboardView}
          behavior={Platform.OS === 'ios' || Dimensions.get('window').height > 750 ? 'padding' : null}
        >
          <View style={[error || errorMessage ? styles.viewFailure : styles.view]}>
            <LinearGradient
              colors={['#660099', '#cd0c8b']}
              start={{ x: 0, y: 0.2 }}
              end={{ x: 1, y: 0.1 }}
              style={styles.backgroundLinear}
            >
              <View style={{ ...styles.loginContainer }}>
                <View style={styles.loginWrapper}>
                  <Logo width="100%" height="140" />
                  <Text style={styles.loginWrapperText}>
                  </Text>
                </View>
                <View style={styles.loginForm}>
                  <Input
                    style={{ marginTop: hp('2%') }}
                    icon="email-outline"
                    required="true"
                    placeholder="E-mail / Login"
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
                    returnKeyType="send"
                    value={senha}
                    onChangeText={setSenha}
                    onSubmitEditing={handleSubmit}
                    ref={passwordRef}
                  />
                  <View style={styles.helperContainer} />
                </View>
                <View style={styles.buttonContainer}>
                  <ButtonGradient
                    name="entrar"
                    upper
                    onPress={handleSubmit}
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
                  <View style={styles.infoCopyrightContainer}>
                    <Text style={styles.infoCopyrightText}>
                      Copyright © {`${today.getFullYear()}`} | Todos os direitos reservados
                    </Text>
                  </View>
                  <View style={{ marginTop: hp('2%'), marginBottom: hp('4%') }}>
                    <RectButton onPress={}>
                      <Before width="100px" height="40px" />
                    </RectButton>
                  </View>
                </View>
              </View>
            </LinearGradient>
          </View>
          {(errorMessage) && (
            <ErrorOpacity style={styles.errorMessage} onPress={handleClearError}>
              <ErrorIcon width="100px " height="80px" left="38.5%" top="10%" />
              <Text style={styles.loginFailure}>{errorMessage || error}</Text>
            </ErrorOpacity>
          )}
        </KeyboardAvoidingView>
      );
    
}