import React, { Component } from 'react';
import Sound from 'react-native-sound';
import {StatusBar} from 'react-native';
import { withNavigation } from "react-navigation";

import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

const width = Dimensions.get('window').width;

class CallScreen extends Component {

  getWallpaper = (wpID) => {
    switch (wpID) {
      case "W0":
        return require('../assets/images/wallpaper1.jpg')
        break;
      case "W1":
        return require('../assets/images/wallpaper2.jpg')
        break;
      case "W2":
        return require('../assets/images/wallpaper3.jpg')
        break;
      case "W3":
        return require('../assets/images/wallpaper4.jpg')
        break;
      case "W4":
        return require('../assets/images/wallpaper5.jpg')
        break;
      case "W5":
        return require('../assets/images/wallpaper6.jpg')
        break;
      case "W6":
        return require('../assets/images/wallpaper7.jpg')
        break;
      case "W7":
        return require('../assets/images/wallpaper8.jpg')
        break;
      case "W8":
        return require('../assets/images/wallpaper9.jpg')
        break;
    }
  }

  playRingtone = () => {
    return (
      this.props.playSound.play((success) => this.props.playSound.reset())
    )
  }
  
  stopRingtone = () => {
    return (
      this.props.playSound.stop(() => {
        this.props.playSound.reset();
      })
    )
  }

  render() {
    {this.playRingtone()}
    const { navigate } = this.props.navigation;
    callDeclined = () => {
      navigate('LockScreen');
      this.stopRingtone();
    }
    callAccepted = () => {
      navigate('CIP');
      this.stopRingtone();
    }
    
    return (
      <View style={styles.screen}>
        <StatusBar hidden={true}/>
        <ImageBackground style={styles.imgBackground}
          source={this.getWallpaper(this.props.wallpaper)} // load selected background to this location
          blurRadius={30}>
          <Text style={styles.userId}>{this.props.callerID}</Text>
          <Text style={styles.iPhone}>iPhone</Text>

          <View style={styles.staticImageContainer}>
            <Image
              style={styles.remindImage}
              source={require('../assets/remind.png')}
            />

            <Image
              style={styles.messageImage}
              source={require('../assets/message.png')}
            />
          </View>

          <View style={styles.staticImageTextContainer}>
            <Text style={styles.remindText}>
              Remind Me
            </Text>

            <Text style={styles.messageText}>
              Message
            </Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => callDeclined()}>
              <Image
                style={styles.button}
                source={require('../assets/decline.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => callAccepted()}>
              <Image
                style={styles.button}
                source={require('../assets/accept.png')}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.buttonTextContainer}>
            <Text style={styles.buttonText}>
              Decline
            </Text>

            <Text style={styles.buttonText}>
              Accept
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  userId: {
    color: 'white',
    textAlign: 'center',
    fontSize: 33,
    marginTop: "25%"
  },
  iPhone: {
    color: 'white',
    textAlign: 'center',
    fontSize: 21,
    marginTop: "2%"
  },
  screen: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  imgBackground: {
    resizeMode: "cover",
    width: "100%",
    height: "100%"
  },
  buttonContainer: {
    position: 'absolute',
    justifyContent: "space-between",
    top: "68.5%",
    flexDirection: "row",
    width: "100%",
    padding: "15%"
  },
  button: {
    height: width / 5.25,
    width: width / 5.25,
  },
  buttonTextContainer: {
    position: 'absolute',
    justifyContent: "space-between",
    top: "83.5%",
    flexDirection: "row",
    width: "100%",
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    marginTop: "5%",
    marginHorizontal: '17%',
    paddingLeft: '1%'
  },
  remindText: {
    color: '#fff',
    fontSize: 16,
    marginTop: '11%',
    marginLeft: '14%'
  },
  messageText: {
    color: '#fff',
    fontSize: 16,
    marginTop: '11%',
    marginRight: '16%'
  },
  staticImageContainer: {
    position: 'absolute',
    justifyContent: "space-between",
    top: "57%",
    flexDirection: "row",
    width: "100%",
  },
  remindImage: {
    height: width / 12,
    width: width / 12,
    marginLeft: '19%',
    marginTop: '14.5%'
  },
  messageImage: {
    height: width / 14,
    width: width / 14,
    marginRight: '21%',
    marginTop: '16%'
  },
  staticImageTextContainer: {
    position: 'absolute',
    justifyContent: "space-between",
    top: "64%",
    flexDirection: "row",
    width: "100%",
  }
});

export default CallScreen;