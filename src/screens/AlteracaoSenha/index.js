import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { withNavigationFocus } from 'react-navigation';
import { ScreenOrientation } from 'expo';

import LayoutBack from '~/components/_layouts/PortraitBack';
import Header from '~/components/Header';
import ButtonGradient from '~/components/Buttons/ButtonGradient';

import { TextInput, View } from './styles';

export function AlteracaoSenha({ navigation, isFocused }) {
  const [loading, setLoading] = useState(true);

  app.put('/api/Usuario/trocasenha', async (req, res) => {
    let response = await user.findOne({
      where: { id: req.body.id, password: req.body.senhaAntiga },
    });
    if (response === null) {
      res.send(JSON.stringify('Senha atual não confere'));
    } else {
      if (req.body.novaSenha === req.body.confNovaSenha) {
        response.password = req.body.novaSenha;
        response.save();
        res.send(JSON.stringify('Senha atualizada com sucesso!'));
      } else {
        res.send(JSON.stringify('Nova Senha e Confirmação não conferem!'));
      }
    }
  });

  async function sendForm() {
    let response = await fetch(`${config.urlRoot}trocasenha`, {
      method: 'PUT',
      body: JSON.stringify({
        id: idUser,
        senhaAtual: senhaAtual,
        novaSenha: novaSenha,
        confirmacaoNovaSenha: confirmacaoNovaSenha,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    let json = await response.json();
    setMsg(json);
  }

  useEffect(() => {
    async function getIdUser() {
      let response = await AsyncStorage.getItem('userData');
      let json = JSON.parse(response);
      setIdUser(json.id);
    }
    getIdUser();

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
    <View style={[css.container, css.containerTop]}>
      <MenuAreaRestrita title='Perfil' navigation={navigation} />

      <View>
        <Text>{msg}</Text>
        <TextInput
          placeholder='Senha Atual:'
          onChangeText={(text) => setSenhaAtual(text)}
        />
        <TextInput
          placeholder='Nova Senha:'
          onChangeText={(text) => setNovaSenha(text)}
        />
        <TextInput
          placeholder='Confirmação da Nova Senha:'
          onChangeText={(text) => setConfirmacaoNovaSenha(text)}
        />
        <TouchableOpacity
          onPress={() => {
            Alert.alert('Senha alterada com sucesso!');
          }}
        >
          <Text>Trocar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

AlteracaoSenha.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(Cadastro);
