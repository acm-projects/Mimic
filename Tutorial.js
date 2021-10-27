import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from 'react-native';

import AppIntroSlider from 'react-native-app-intro-slider';
import ConfettiCannon from 'react-native-confetti-cannon';

const width = Dimensions.get('window').width;

const slides = [
  {
    key: 'one',
    title: 'The callscreen'
  },
  {
    key: 'two',
    title: 'That\'s all!',
    text: 'Congrats, you\'ve finished the tutorial!',
    image: require('./assets/1.jpg'),
    backgroundColor: '#59b2ab',
  }
];

const Tutorial = () => {
  this.state = {
    showRealApp: false
  }

  renderSlide = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  }

  done = () => {
    this.setState({ showRealApp: true });
  }

  if (this.state.showRealApp) {
    return <App />;
  } else {
    return <AppIntroSlider renderItem={this.renderSlide} data={slides} onDone={this.done}/>;
  }
}

/*
const EndTutorial = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <ConfettiCannon count={200} origin={{x: -20, y: 0}} fadeOut={true} autoStart={true}/>
      <Text style = {styles.text}>
        Congrats on finishing the tutorial! {"\n\n\n\n"} Tap to continue
      </Text>
    </SafeAreaView>
  );
};
*/

const styles = StyleSheet.create({
  text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
    marginTop: "30%"
  },
  screen: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: '#90FFFF'
  },
  slide: {
    flex: 1,
    backgroundColor: item.backgroundColor,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 100,
  }
});

export default Tutorial;

