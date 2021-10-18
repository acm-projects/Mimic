import React, { Component } from 'react'
import moment from 'moment'
import { Text, View, StyleSheet, SafeAreaView, Image, Dimensions, StatusBar, TouchableOpacity, Button} from 'react-native'


const { width, height} = Dimensions.get('window');
class LockScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        const { navigate } = this.props.navigation;
        return (
            <SafeAreaView style = {styles.container}>
                <StatusBar barStyle ="light-content" hidden={false} />
                    <Image 
                        source={require('../assets/Background.png')} 
                        style={{ position: 'absolute', top:0, width: width, height: height,}}
                    />
                    <View style = {styles.datetime}>
                        <Image source={require('../assets/Lock.png')} />    
                        <Text style ={styles.time}>{moment().format('h:mm')}</Text>
                        <Text style={styles.date}>{moment().format('dddd, MMMM DD')}</Text>
                    </View>
                    <View style = {styles.containers}>
                    <TouchableOpacity onPress={() =>navigate('SettingsScreen')}>
                            <Image source = {require('../assets/settingsGear.png')} 
                               // style = {{marginRight: '30%', width: '60%', height: '25%'}}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image source = {require('../assets/Camera.png')}
                                style = {{marginRight: '25%', width: '80%', height: '23%'}}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.swipe}>
                        <Text style = {styles.swipeText}>Swipe up to open</Text>
                    </View>
            </SafeAreaView>
        );
    }
}

export default LockScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    datetime: {
        height: 180,
        alignItems: 'center',
        justifyContent: 'center'
    },
    time: {
        fontSize: 80,
        fontWeight: '300',
        color: '#FFFF',
        textAlign: 'center'
    },
    date: {
        fontSize: 22,
        fontWeight: '300',
        color: '#FFFF',
        textAlign: 'center',
        letterSpacing: 0.32
    },
    buttons: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative', 
        top: '115%'
        
    },
    swipe: {
        position: 'absolute',
        bottom: 45,
        width: width,
        alignItems: 'center',
        justifyContent: 'center',
    },
    swipeText: {
        fontSize: 17,
        color: '#FFFF',
        letterSpacing: -0.41,
        textAlign: 'center',
        lineHeight: 22
    },
    containers: {
        flex: 1,
        //backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
});


//This is an example code for Navigator// 
//import React, { Component } from 'react';
//import react in our code. 
//import { StyleSheet, View, Button} from 'react-native';
//import all the components we are going to use.

// export default class LockScreen extends Component {
//   static navigationOptions = {
//     title: 'First Page',
//     //Sets Header text of Status Bar
//     headerStyle: {
//       backgroundColor: '#f4511e',
//       //Sets Header color
//     },
//     headerTintColor: '#fff',
//     //Sets Header text color
//     headerTitleStyle: {
//       fontWeight: 'bold',
//       //Sets Header text style
//     },
//   };

//   render() {
//     const { navigate } = this.props.navigation;
//     return (
//       <View style={styles.container}>
//         <Button title='Go next'
//         onPress={() =>navigate('SettingsScreen')}
//         />
//       </View>
//     );
//   }
// }
