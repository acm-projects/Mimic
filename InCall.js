import React from 'react';

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

const InCall = () => {
  return (
    <View style={styles.screen}>
      <ImageBackground style={styles.imgBackground}
        source = {require('./assets/images/background.jpg')} // load selected background to this location
        blurRadius = {30}>
	        <Text style = {styles.userId}>Hyrum Moses</Text>

          <View style = {styles.staticImageContainer}>
            <Image
              style={styles.remindImage}
              source={require('./assets/images/remind.png')}
            />

            <Image
              style={styles.messageImage}
              source={require('./assets/images/message.png')}
            />
          </View>

          <View style = {styles.staticImageTextContainer}>
            <Text style = {styles.imageText}>
              Remind Me
            </Text>

            <Text style = {styles.imageText}>
              Message
            </Text>
          </View>

          <View style = {styles.buttonContainer}>
            <TouchableOpacity>
              <Image
                style={styles.button}
                source={require('./assets/images/decline.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image
                style={styles.button}
                source={require('./assets/images/accept.png')}
              />
            </TouchableOpacity>
          </View>

          <View style = {styles.buttonTextContainer}>
            <Text style = {styles.buttonText}>
              Decline
            </Text>

            <Text style = {styles.buttonText}>
              Accept
            </Text>
          </View>
			</ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  userId: {
    color: 'white',
    textAlign: 'center',
    fontSize: 33,
    marginTop: "12%"
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
    top: "73.5%",
    flexDirection: "row",
    width: "100%",
    padding: "11%"
  },
  button: {
    height: width/5.25,
    width: width/5.25,
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
    margin: "14%"
  },
  imageText: {
    color: '#fff',
    fontSize: 16,
    margin: "11%"
  },
  staticImageContainer: {
    position: 'absolute',
    justifyContent: "space-between",
    top: "57%",
    flexDirection: "row",
    width: "100%",
  },
  remindImage: {
    height: width/12,
    width: width/12,
    margin: "17%"
  },
  messageImage: {
    height: width/14,
    width: width/14,
    margin: "17%"
  },
  staticImageTextContainer: {
    position: 'absolute',
    justifyContent: "space-between",
    top: "64%",
    flexDirection: "row",
    width: "100%",
  }
});

export default InCall;