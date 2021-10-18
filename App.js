import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

//Import react-navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';


import LockScreen from './screens/LockScreen';
import SettingsScreen from './screens/SettingsScreen';

const App = createStackNavigator({
  //Constant which holds all the screens
    LockScreen: { screen: LockScreen }, 
    SettingsScreen: { screen: SettingsScreen}, 
  },
  {
    initialRouteName: 'LockScreen',
  }
);


export default createAppContainer(App);