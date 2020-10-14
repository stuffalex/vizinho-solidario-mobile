import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';
import icon from './icon.svg';

// import { Container } from './styles';

export default function Logo({ width, height }) {
  return <SvgXml xml={icon} width={width} height={height} />;
}

Logo.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

Logo.defaultProps = {
  width: '100%',
  height: '100%',
};
