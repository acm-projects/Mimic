import React, { useState, Fragment, Component } from "react";
import { StatusBar, StyleSheet, Text, View, SafeAreaView, TextInput, FlatList, Image, Alert, TouchableOpacity, ScrollView } from "react-native";
import images from '../jsonFiles/wallpaperData.json';
import { Shadow } from 'react-native-neomorph-shadows';
import { Neomorph } from 'react-native-neomorph-shadows';

const numColumns = 2;
class SettingsPage extends Component {

    constructor(props) {
        super(props);
    }
    onSubmitCallerID = (caller) => {
        this.props.onSubmitCallerID(caller);
    }

    onSubmitWallpaper = (wallpaper) => {
        this.props.onSubmitWallpaper(wallpaper);
    }


    getImage = (image) => {
        switch (image) {
            case "W1":
                return require('../assets/images/wallpaper1.jpg')
                break;
            case "W2":
                return require('../assets/images/wallpaper2.jpg')
                break;
            case "W3":
                return require('../assets/images/wallpaper3.jpg')
                break;
            case "W4":
                return require('../assets/images/wallpaper4.jpg')
                break;
            case "W5":
                return require('../assets/images/wallpaper5.jpg')
                break;
            case "W6":
                return require('../assets/images/wallpaper6.jpg')
                break;
            case "W7":
                return require('../assets/images/wallpaper7.jpg')
                break;
            case "W8":
                return require('../assets/images/wallpaper8.jpg')
                break;
            case "W9":
                return require('../assets/images/wallpaper9.jpg')
                break;
        }
    }

    _renderItem = ({ item, index }) => {
        return (
            <View style={styles.image_container}>
                <StatusBar hidden={true} />
                <TouchableOpacity
                    onPress={() => {
                        Alert.alert("Your wallpaper has been set!"),
                            this.onSubmitWallpaper("W" + index)
                    }}
                >
                    <Image source={this.getImage(item.image)} style={styles.imageStyle} />
                </TouchableOpacity>
            </View>

        )
    }

    render() {
        let input = '';
        const saveUserInput = userInput => {
            input = userInput;
        };

        return (
            <Fragment>

                <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                    <TouchableOpacity
                            style={styles.backButton}
                            onPress={() => this.props.navigation.navigate('LockScreen')}
                        >
                            <Text>{'<'}</Text>
                        </TouchableOpacity>
                    <View style={styles.logoContainer}>
                        <Text style={styles.heading}>settings.</Text>
                        <Image style={styles.logoStyle} source={require('../assets/images/clearLogo.png')}></Image>
                    </View>
                    <View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.subHeading} >Choose your caller.</Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    Alert.alert("You will receive calls from Mom"),
                                        this.onSubmitCallerID('Mom')
                                }}
                            >
                                <Text>Mom</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    Alert.alert("You will receive calls from Dad"),
                                        this.onSubmitCallerID('Dad')
                                }}
                            >
                                <Text>Dad</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    Alert.alert("You will receive calls from Work"),
                                        this.onSubmitCallerID('Work')
                                }}
                            >
                                <Text>Work</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    Alert.alert("You will receive calls from Bae"),
                                        this.onSubmitCallerID('Bae')
                                }}
                            >
                                <Text>Bae</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flexDirection: "column", alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TextInput style={styles.inputView}
                                onChangeText={userInput => saveUserInput(userInput)}
                                placeholder={this.props.callerID}
                            />
                            <TouchableOpacity
                                style={styles.submitButton}
                                onPress={() => {
                                    Alert.alert("You will receive calls from " + input),
                                        this.onSubmitCallerID(input)
                                }}>
                                <Text>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ zIndex: 10 }}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.subHeading} >Choose your background.</Text>
                        </View>

                        <FlatList
                            horizontal={true}
                            data={images}
                            renderItem={this._renderItem}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity style={styles.button}
                            onPress={() => this.props.navigation.navigate('Tutorial')}
                        >
                            <Text>Tutorial</Text>
                        </TouchableOpacity>
                    </View>


                </SafeAreaView>

            </Fragment>

        );
    }
};

const styles = StyleSheet.create({
    textStyle: {
        color: "black",
        fontWeight: 'bold',
        fontSize: 20,
    },
    inputView: {
        backgroundColor: "#E5E5E5",
        borderRadius: 30,
        width: "65%",
        height: 45,
        margin: "3%",
        alignItems: "center",
        textAlign: 'center'
    },

    imageStyle: {
        height: 200,
        width: 120,
    },
    imageStyleSelected: {
        height: 200,
        width: 120,
        borderColor: 'red',
        borderWidth: 10
    },
    image_container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,

    },
    logoStyle: {
        height: 130,
        width: 80,
        margin: '2%',
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        //fontFamily: 'FiraMono-Medium',
        fontSize: 35,

    },
    subHeading: {
        fontSize: 22,
        marginTop: '5%',
        marginBottom: '5%'
    },
    button: {
        color: '#E5E5E5',
        padding: 10,
        backgroundColor: "#E5E5E5",
        margin: '2%',
        borderRadius: 30,
        width: "20%",
        alignItems: 'center'
    },
    submitButton: {
        color: '#E5E5E5',
        padding: 10,
        backgroundColor: "#E5E5E5",
        margin: '2%',
        borderRadius: 10,
        width: "10%",
        alignItems: 'center'
    },
    backButton: {
        color: '#E5E5E5',
        padding: 10,
        backgroundColor: "#E5E5E5",
        borderRadius: 10,
        width: "10%",
        alignItems: 'center',
        marginLeft: '5%'
    },
    neomorphBack: {
        shadowRadius: 1,

        backgroundColor: '#E5E5E5',
        width: 50,
        height: 40,
        marginLeft: 8,
        shadowColor: "grey",


        padding: 10,

        borderRadius: 25,
        marginTop: 8,
        alignItems: 'center',

    }


});

export default SettingsPage;

