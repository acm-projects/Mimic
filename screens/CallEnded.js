import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, SafeAreaView, StatusBar, TouchableOpacity, ListView } from 'react-native';



const { width, height } = Dimensions.get('window');
export default class CallEnded extends React.Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" hidden={false} />
        <Image
          source={require('../assets/Background.png')}
          style={{ position: 'absolute', top: 0, width: width, height: height }}
          blurRadius={10}
        />
        <View style = {styles.container}>
          <Text style={styles.numStyle}>
            +1 (123) 456 7890
          </Text>
          <Text style={styles.callTime}>
            00:00
          </Text>
        </View>


        <View style = {styles.outer}>

            <View style = {styles.middle}>
                <View style = {styles.inner}>
                  <Image style = {styles.icon}
                    source = {require('../assets/mic.png')}
                  />
                  <Text style = {styles.words}>
                    mute
                  </Text>
                </View >
                <View style = {styles.inner}>
                  <Image style = {styles.icon}
                    source = {require('../assets/keypad.png')}
                  />
                  <Text style = {styles.words}>
                    keypad
                  </Text>
                </View>
                <View style = {styles.inner}> 
                  <Image style = {styles.icon}
                    source = {require('../assets/speaker.png')}
                  />
                  <Text style = {styles.words}>
                    speaker
                  </Text>
                </View>
            </View>

            <View style = {styles.middle}>
                <View style = {styles.inner}>
                  <Image style = {styles.icon}
                    source = {require('../assets/add.png')}
                  />
                  <Text style = {styles.words}>
                    add call
                  </Text>
                </View>
                <View style = {styles.inner}>
                  <Image style = {styles.icon}
                    source = {require('../assets/FT.png')}
                  />
                  <Text style = {styles.words}>
                    FaceTime
                  </Text>
                </View>
                <View style = {styles.inner}>
                  <Image style = {styles.icon}
                    source = {require('../assets/contact.png')}
                  />
                  <Text style = {styles.words}>
                    contacts
                  </Text>
                </View>
            </View>

        </View>

        <View style = {styles.end}>
          <TouchableOpacity onPress={() => navigate('LockScreen')}>
             <Image style = {styles.icon}
            source = {require('../assets/endCall.png')}
             />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

)}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  numStyle: {
    fontSize: 34,
    color: '#FFFF',
    textAlign: 'center',
    marginTop: '14%'
  },
  callTime: {
    fontSize: 22,
    color: '#C6C6C6',
    textAlign: 'center',
    marginTop: '2%'
  },
  image: {

  },
  outer: {
    width: '88%',
    flex: 1.3,
    flexDirection: 'column',
    marginLeft: '6%',
    marginRight: '5%',
    justifyContent: 'space-around',
    marginTop: '10%'
  },
  middle: {
    flex: 1,
    flexDirection: 'row',
  },
  inner: {
    flex: 1,
    flexDirection: 'column',
    padding: '3%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  words: {
    fontSize: 17,
    color: '#FFFF',
    textAlign: 'center',
    marginTop: '6%'
  },
  end: {
    width: '25%',
    marginLeft: '36.5%',
    marginRight: '35%',
    flex: 1,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    width: '85%',
    height: undefined,
    aspectRatio: 1,
  }
})