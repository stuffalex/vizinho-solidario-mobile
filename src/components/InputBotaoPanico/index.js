import React, {forwardRef } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';

import { Container, TextInput } from './styles';

const InputBotaoPanico = forwardRef(({ style, icon, password, ...rest }, ref) => {


  return (
    <Container style={style}>
      <TextInput> 
        Insira sua mensagem
      </TextInput>

    </Container>
  );
});

InputBotaoPanico.propTypes = {
  icon: PropTypes.string,
  password: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

InputBotaoPanico.defaultProps = {
  icon: null,
  style: {},
  password: false,
};

export default InputBotaoPanico;
