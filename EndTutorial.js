import React from 'react';

import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  ImageBackground
} from 'react-native';

import ConfettiCannon from 'react-native-confetti-cannon';

const width = Dimensions.get('window').width;

const InCall = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <ImageBackground style={styles.imgBackground}
        source = {require('./assets/images/background.jpg')}>
            <ConfettiCannon count={200} origin={{x: -10, y: 0}} fadeOut={true}/>
	        <Text style = {styles.text}>
                Congrats on finishing the tutorial! {"\n\n\n\n"} Tap to continue
            </Text>
	</ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    marginTop: "30%"
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
  }
});

export default InCall;