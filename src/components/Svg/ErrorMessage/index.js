/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';
import errorMessageIcon from './errorMessage.svg';

// eslint-disable-next-line react/prop-types

export default function ErrorIcon({ width, height, color, left, top }) {
  return (
    <SvgXml
      xml={errorMessageIcon}
      width={width}
      height={height}
      color={color}
      left={left}
      top={top}
    />
  );
}

ErrorIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  left: PropTypes.string,
  top: PropTypes.string,
};

ErrorIcon.defaultProps = {
  width: '100%',
  height: '100%',
  color: '#FFF',
  left: '100%',
  top: '100%',
};
