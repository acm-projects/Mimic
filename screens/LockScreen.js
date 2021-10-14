import React, { Component } from 'react'
import moment from 'moment'
import { Text, View, StyleSheet, SafeAreaView, Image, Dimensions, StatusBar, TouchableOpacity } from 'react-native'


const { width, height} = Dimensions.get('window');
class LockScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <SafeAreaView style = {styles.container}>
                <StatusBar barStyle ="light-content" hidden={false} />
                    <Image 
                        source={require('Background.png')} 
                        style={{ position: 'absolute', top:0, width: width, height: height}}
                    />
                    <View style = {styles.datetime}>
                        <Image source={require('Lock.png')} />    
                        <Text style ={styles.time}>{moment().format('HH:mm')}</Text>
                        <Text style={styles.date}>{moment().format('dddd DD, MMMM')}</Text>
                    </View>
                    <View style = {styles.buttons}>
                        <TouchableOpacity>
                            <Image source = {require('FlashlightButton.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image source = {require('Camera.png')} />
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
        fontWeight: '200',
        color: '#FFFF',
        textAlign: 'center'
    },
    date: {
        fontFamily: '',
        fontSize: 22,
        fontWeight: '300',
        color: '#FFFF',
        textAlign: 'center',
        letterSpacing: 0.32
    },
    buttons: {
        marginTop: 480,
        flexDirection: 'row',
        marginLeft: 46,
        marginRight: 46,
        alignItems: 'center',
        justifyContent: 'space-between'
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
    }
});