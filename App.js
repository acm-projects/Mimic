import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import CallScreen from './CallScreen.js';
import InCall from './InCall.js';
import Tutorial from './Tutorial.js';

this.state = 'tutorial'

const App = () => {
  return <Tutorial/>;
};

export default App;