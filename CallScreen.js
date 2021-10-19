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
        blurRadius = {15}>
	        <Text style = {styles.userId}>Insert Name Here</Text>

          <View style = {styles.buttonContainer}>
              <TouchableOpacity>
                <Image
                  style={styles.button}
                  source={require('./assets/images/accept.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image
                  style={styles.button}
                  source={require('./assets/images/decline.png')}
                />
              </TouchableOpacity>
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
    top: "95%",
    flexDirection: "row",
    width: "100%",
  },
  button: {
    height: width/5.25,
    width: width/5.25,
    margin: "15%"
    }
});

export default CallScreen;