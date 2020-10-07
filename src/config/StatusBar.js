import React from 'react';
import { useSelector } from 'react-redux';
import { Platform, StatusBar } from 'react-native';

export default function ConfigStatusBar() {
  const { hidden } = useSelector(state => state.settings.statusBar);

  return (
    <StatusBar
      hidden={Platform.OS === 'ios' ? false : hidden}
      translucent
      backgroundColor="#660099"
      barStyle="dark-content"
      networkActivityIndicatorVisible
    />
  );
}
