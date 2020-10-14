import React, {forwardRef } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';

import { Container, TextInput } from './styles';

const InputNumeroPanico = forwardRef(({ style, icon, password, ...rest }, ref) => {


  return (
    <Container style={style}>
      <TextInput> 
        Insira um número de emergência
      </TextInput>

    </Container>
  );
});

InputNumeroPanico.propTypes = {
  icon: PropTypes.string,
  password: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

InputNumeroPanico.defaultProps = {
  icon: null,
  style: {},
  password: false,
};

export default InputNumeroPanico;
