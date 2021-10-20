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

const CallScreen = () => {
  return (
    <View style={styles.screen}>
      <ImageBackground style={styles.imgBackground}
        source = {require('./assets/images/background.jpg')} // load selected background to this location
        blurRadius = {30}>
	        <Text style = {styles.userId}>Billie Bob Joe</Text>

          <View style = {styles.staticImageContainer}>
            <Image
              style={styles.staticImage}
              source={require('./assets/images/remind.png')}
            />

            <Image
              style={styles.staticImage}
              source={require('./assets/images/message.png')}
            />
          </View>

          <View style = {styles.staticImageTextContainer}>
            <Text style = {styles.buttonText}>
              Remind Me
            </Text>

            <Text style = {styles.buttonText}>
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
    fontSize: 30,
    marginTop: "17%"
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
    justifyContent: "space-between",
    top: "80%",
    flexDirection: "row",
    width: "100%",
  },
  button: {
    height: width/5.25,
    width: width/5.25,
    margin: "20%"
  },
  buttonTextContainer: {
    position: 'absolute',
    justifyContent: "space-between",
    top: "79%",
    flexDirection: "row",
    width: "100%",
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    margin: "14%"
  },
  staticImageContainer: {
    position: 'absolute',
    justifyContent: "space-between",
    top: "49%",
    flexDirection: "row",
    width: "100%",
  },
  staticImage: {
    height: width/10,
    width: width/10,
    margin: "15%"
  },
  staticImageTextContainer: {
    position: 'absolute',
    justifyContent: "space-between",
    top: "57%",
    flexDirection: "row",
    width: "100%",
  }
});

export default CallScreen;