import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import LockScreen from './screens/LockScreen';

export default class App extends React.Component {
  render() {
    return <LockScreen />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});