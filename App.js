import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

//Import react-navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import LockScreen from './screens/LockScreen';
import CallEnded from './screens/CallEnded';
import CIP from './screens/CIP';
import SettingsPage from './screens/settingsPage';
import CallScreen from './screens/CallScreen';

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});
const App = createStackNavigator({
  //Constant which holds all the screens
  LockScreen: {
    screen: LockScreen,
    navigationOptions: {
      headerShown: false,
    }
  },
  // LockScreen: {screen: LockScreen},
  SettingsPage: {
    screen: SettingsPage,
    //uncomment to remove navigation bar on settings screen
    // navigationOptions:{
    //   header: null,
    // }
  },
  CIP: {
    screen: CIP,
    navigationOptions: {
      headerShown: false,
      //different types of animations
      // animationTypeForReplace: 'pop',
      // presentation: 'card',
      // presentation: 'modal',
      // cardStyleInterpolator: forFade,
    },
   
  },
  CallEnded: {
    screen: CallEnded,
    navigationOptions: {
      headerShown: false,
    }
  },
  CallScreen: {
    screen: CallScreen,
    navigationOptions: {
      headerShown: false,
    }
  },
},
  {
    initialRouteName: 'LockScreen',
  }
);


export default createAppContainer(App);