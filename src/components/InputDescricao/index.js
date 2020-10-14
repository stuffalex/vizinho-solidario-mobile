import React, {forwardRef } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';

import { Container, TextInput } from './styles';

const InputDescricao = forwardRef(({ style, icon, password, ...rest }, ref) => {


  return (
    <Container style={style}>
      <TextInput>Descrição</TextInput>
    </Container>
  );
});

InputDescricao.propTypes = {
  icon: PropTypes.string,
  password: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

InputDescricao.defaultProps = {
  icon: null,
  style: {},
  password: false,
};

export default InputDescricao;
