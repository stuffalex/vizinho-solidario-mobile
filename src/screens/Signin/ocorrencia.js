import React, { useState, useRef, useEffect } from 'react';
import { KeyboardAvoidingView, View, Text, Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { deviceName as expoDeviceName } from 'expo-device';
import { Linking, Notifications, ScreenOrientation } from 'expo';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ButtonGradient from '~/components/Buttons/ButtonGradient';

export default function Ocorrencia() {
  return (
    <view>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId='formGridEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' placeholder='E-mail' />
          </Form.Group>

          <Form.Group as={Col} controlId='formGridPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Senha' />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId='formGridLogradouro'>
          <Form.Label>Logradouro</Form.Label>
          <Form.Control placeholder='Av Brasil ' />
        </Form.Group>

        <Form.Group controlId='formGridComplemento'>
          <Form.Label>Complemento</Form.Label>
          <Form.Control placeholder='Apartment, studio, or floor' />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId='formGridCep'>
            <Form.Label>CEP</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId='formGridCity'>
            <Form.Label>Cidade</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId='formGridState'>
            <Form.Label>UF</Form.Label>
            <Form.Control as='select' defaultValue='Choose...'>
              <option>Choose...</option>
              <option>/puxar do cep</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Group id='formGridCheckbox'>
          <Form.Check type='checkbox' label='Aceito os termos' />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Cadastrar
        </Button>
      </Form>
    </view>
  );
}
