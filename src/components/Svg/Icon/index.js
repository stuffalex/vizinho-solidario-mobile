import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';
import Icons from './icons';

export default function Icon({ name, width, height }) {
  return name ? (
    <SvgXml xml={Icons[name]} width={width} height={height} />
  ) : null;
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

Icon.defaultProps = {
  width: '20px',
  height: '20px',
};
