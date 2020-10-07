import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';
import logo from './sos.svg';

export default function Sos({ size }) {
  return <SvgXml xml={logo} width={`${size}px`} height={`${size}px`} />;
}

Sos.propTypes = {
  size: PropTypes.number,
};

Sos.defaultProps = {
  size: 50,
};
