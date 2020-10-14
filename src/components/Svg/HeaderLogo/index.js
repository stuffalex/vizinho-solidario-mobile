import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';
import styled from 'styled-components';
import logo from './icon.svg';
import logoV from './logo-vertical.svg';

export default function HeaderLogo({ type, width, height }) {
  return type == 'h' ? (
    <SvgXml xml={logo} width={width} height={height} />
  ) : (
    <SvgXml xml={logoV} width={width} height={height} />
  );
}

HeaderLogo.propTypes = {
  type: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

HeaderLogo.defaultProps = {
  type: 'h',
  width: '120%',
  height: '120%',

};
