import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View, Text, Image, Dimensions, StatusBar } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import TypeWriter from 'react-native-typewriter';


const { width, height } = Dimensions.get('window');
const slides = [
  {
    key: 1,
    //title: 'Mimic Tutorial',
    text: 'Swipe left to continue',
    image: require('../assets/Group1.png'),
    backgroundColor: 'black',
  },
  {
    key: 2,
    //title: 'Mock Screen',
    //text: 'Click the gear to open up our super secret menu',
    //title: 'Swipe left to continue',
    image: require('../assets/lockScreenSS.png'),
    backgroundColor: 'black',
  },
  {
    key: 3,
    //title: 'Menu',
    //text: 'Here you can choose which caller ID you want displayed and as a fun bonus customize your own wallpaper!',
    //title: 'Swipe left to continue',
    image: require('../assets/MenuSS.png'),
    backgroundColor: 'black',
  },
  {
    key: 4,
    //title: 'Start a Mimic',
    //text: 'To start a fake call just swipe left anywhere on the screen. In just a couple seconds you will recieve a call',
    //title: 'Swipe left to continue',
    image: require('../assets/StartCall.png'),
    backgroundColor: 'black',
  },
  {
    key: 5,
    //title: 'Start a Mimic',
    //text: 'To start a fake call just swipe left anywhere on the screen. In just a couple seconds you will recieve a call',
    //title: 'Swipe left to continue',
    image: require('../assets/income.png'),
    backgroundColor: 'black',
  },
  {
    key: 6,
    ///title: 'The Call Screen',
    //text: 'This is what the spoofed call will look like. Press the red end call button to return to the lock screen',
    //title: 'Swipe left to continue',
    image: require('../assets/CallScreen1.png'),
    backgroundColor: 'black',
  },
  {
  key: 7,
  ///title: 'The Call Screen',
  //text: 'This is what the spoofed call will look like. Press the red end call button to return to the lock screen',
  //title: 'Swipe left to continue',
  image: require('../assets/CallScreen2.png'),
  backgroundColor: 'black',
  },
  {
    key: 8,
    //title: 'That\'s it!',
    text: 'That\'s it!\nHappy Mimic-ing!',
    image: require('../assets/award.png'),
    backgroundColor: 'black',
  },
];

export default class Tutorial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
    };
  }
  _renderItem = ({ item }) => {
    if (item.title && !(item.text)) {
      return (
        <View style={styles.slide} backgroundColor={item.backgroundColor}>
          <Image source={item.image} style={styles.image} />
          <View style={{ position: 'absolute', top: '93%', left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
            <TypeWriter fixed={true} typing={1} style={styles.text2}>{item.title}</TypeWriter>
          </View>
        </View>

      );

    }
    else if (!(item.title) && item.text) {
      return (

        <View style={styles.slide} backgroundColor={item.backgroundColor}>
          <StatusBar barStyle = "light-content"  backgroundColor="#fff"/>
          <Image source={item.image} style={styles.image} />
          <TypeWriter fixed={true} typing={1} style={styles.text}>{item.text}</TypeWriter>
        </View>);

    }
    else {
      return (
        <View style={styles.slide} backgroundColor={item.backgroundColor}>
          <StatusBar backgroundColor = '#FFF' barStyle = "dark-content" />
          <Image source={item.image} style={styles.onlyImage} />
        </View>
      );
    }

  }
  _renderNextButton = () => {
    return (
      //<View style={styles.buttonCircle}>
      //<Icon
      //name="arrow-forward-outline"
      //color="rgba(255, 255, 255, .9)"
      //size={24}
      ///>
      //</View> 
      null
    );
  };
  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="checkmark-outline"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };


  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    //this.setState({ showRealApp: true });
    //this.onDoneTutorial(false);
    //console.log(this.props.isFirstTime);
    //this.props.tutorialFirstTime(false);
    this.props.navigation.navigate('LockScreen');

  }
  render() {
    //if (this.state.showRealApp) {
      //return <View><Text style={styles.title}>Main app screen</Text></View>
    //} else {
      return ( <AppIntroSlider
        data={slides}
        renderItem={this._renderItem}
        renderDoneButton={this._renderDoneButton}
        renderNextButton={this._renderNextButton}
        onDone={this._onDone} />
      )
   // }
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 0,
  },
  title: {
    fontSize: 26,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '15%',
  },
  text: {
    flex: .3,
    color: 'white',
    //fontFamily: 'PTMono-Regular',
    fontSize: 34,
    textAlign: 'center',
  },
  text2: {
    color: 'white',
    //fontFamily: 'PTMono-Regular',
    fontSize: 17,
    textAlign: 'center',
  },
  image: {
    flex: 1,
    width: width,
    height: height,
    resizeMode: 'contain',
  },
  onlyImage: {
    flex: 1,
    width: width,
    height: height,
    resizeMode: 'cover',
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});