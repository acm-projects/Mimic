import 'react-native-gesture-handler';
import React, { Component, Fragment } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Sound from 'react-native-sound';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators} from '@react-navigation/stack';
import SettingsPage from './components/settingsPage';
import LockScreen from './components/LockScreen';
import CallScreen from './components/CallScreen';
import CIP from './components/CIP';
import Tutorial from './components/tutorial.js';


const Stack = createStackNavigator(); 
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      callerID: "Mom",
      wallpaper: "W3",
      tutorialState: true,
    }
    this.getCallerID();
    this.getWallpaper();
    this.getTutorialState();
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
  tutorialFirstTime = async = (state) => {
    try {
      this.setState({ tutorialState: state })
      AsyncStorage.setItem('tutorialState', state)
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

  getTutorialState = async () => {
    try {
      const value = await AsyncStorage.getItem('tutorialState')
      if (value !== null) {
        this.setState({ tutorialState: value })
      }
    } catch (e) {
      // error reading value
    }
  }
  
  render() {
    forFade = ({ current }) => ({
      cardStyle: {
        opacity: current.progress,
      },
    });

    return (
      
      <NavigationContainer theme={{ colors: { background: 'rgba(0,0,0,0)' } }}>
        <Stack.Navigator
        initialRouteName= "Tutorial" 
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
        >
          <Stack.Screen
            name="LockScreen"
            options={{ headerShown: false, cardStyleInterpolator: forFade}}
          >
            {props => <LockScreen {...props} 
              wallpaper={this.state.wallpaper} 
              playSound={this.playSound}
            />}
          </Stack.Screen>
          <Stack.Screen
            name="CallScreen"
            options={{ headerShown: false, cardStyleInterpolator: forFade}}
          >
            {props => <CallScreen {...props}
              wallpaper={this.state.wallpaper}
              callerID={this.state.callerID}
              playSound={this.playSound}
            />}
          </Stack.Screen>
          <Stack.Screen
            name="CIP"
            options={{ headerShown: false, cardStyleInterpolator: forFade}}
          >
            {props => <CIP {...props}
              wallpaper={this.state.wallpaper}
              callerID={this.state.callerID}
            />}
          </Stack.Screen>
          <Stack.Screen
            name="SettingsPage"
            options={{ headerShown: false, cardStyleInterpolator: forFade}}
          >
            {props => <SettingsPage {...props}
              callerID={this.state.callerID}
              wallpaper={this.state.wallpaper}
              onSubmitCallerID={this.onSubmitCallerID}
              onSubmitWallpaper={this.onSubmitWallpaper}
              onDoneTutorial={this.onDoneTutorial}
            />}
          </Stack.Screen>
          <Stack.Screen
            name="Tutorial"
            options={{ headerShown: false, cardStyleInterpolator: forFade}}
          >
            {props => <Tutorial {...props}
              isFirstTime={this.state.isFirstTime}
              tutorialFirstTime={this.tutorialFirstTime}
            />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      
    );
  }
}

