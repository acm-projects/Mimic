import React, { Component, Fragment } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Sound from 'react-native-sound';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsPage from './components/settingsPage';
import LockScreen from './components/LockScreen';
import CallScreen from './components/CallScreen';
import CIP from './components/CIP';


const Stack = createNativeStackNavigator();
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      callerID: "Mom",
      wallpaper: "W3"
    }
    this.getCallerID();
    this.getWallpaper();
    
  }

  playSound = new Sound(require('./ios/ringtone.mp3'), error => console.log(error));

  onSubmitCallerID = async = (caller) => {
    try {
      this.setState({ callerID: caller })
      AsyncStorage.setItem('callerID', caller)
    }
    catch (err) {
      console.log(err);
    }
  }

  onSubmitWallpaper = async = (wallpaper) => {
    try {
      this.setState({ wallpaper: wallpaper })
      AsyncStorage.setItem('wallpaper', wallpaper)
    }
    catch (err) {
      console.log(err);
    }
  }

  getCallerID = async () => {
    try {
      const value = await AsyncStorage.getItem('callerID')
      if (value !== null) {
        this.setState({ callerID: value })
      }
    } catch (e) {
      // error reading value
    }
  }

  getWallpaper = async () => {
    try {
      const value = await AsyncStorage.getItem('wallpaper')
      if (value !== null) {
        this.setState({ wallpaper: value })
      }
    } catch (e) {
      // error reading value
    }
  }

  
  /*playRingtone = () => {
    this.playSound.play((success) => this.playSound.reset());
  }
  stopRingtone = () => {
    this.playSound.stop(() => {
      // Note: If you want to play a sound after stopping and rewinding it,
      // it is important to call play() in a callback.
      this.playSound.play();
    });
  }
  */
  forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="LockScreen"
            options={{ headerShown: false, cardStyleInterpolator: this.forFade }}
          >
            {props => <LockScreen {...props} 
              wallpaper={this.state.wallpaper} 
              playSound={this.playSound}
            />}
          </Stack.Screen>
          <Stack.Screen
            name="CallScreen"
            options={{ headerShown: false, cardStyleInterpolator: this.forFade }}
          >
            {props => <CallScreen {...props}
              wallpaper={this.state.wallpaper}
              callerID={this.state.callerID}
              playSound={this.playSound}
            />}
          </Stack.Screen>
          <Stack.Screen
            name="CIP"
            options={{ headerShown: false, cardStyleInterpolator: this.forFade }}
          >
            {props => <CIP {...props}
              wallpaper={this.state.wallpaper}
              callerID={this.state.callerID}
            />}
          </Stack.Screen>
          <Stack.Screen
            name="SettingsPage"
            options={{ headerShown: false, cardStyleInterpolator: this.forFade }}
          >
            {props => <SettingsPage {...props}
              callerID={this.state.callerID}
              wallpaper={this.state.wallpaper}
              onSubmitCallerID={this.onSubmitCallerID}
              onSubmitWallpaper={this.onSubmitWallpaper}
            />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>

    );
  }
}

