import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, Dimensions, TouchableOpacity, Alert } from "react-native";
import images from '../jsonFiles/wallpaperData.json';

const numColumns = 2;
//const WIDTH = Dimensions.get('window').width;

//export default class ImageList extends Component {
const ImageList = () => {
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
      <View style={styles.itemStyle}>
        <TouchableOpacity
        onPress={()=>{
          Alert.alert("You have selected wallpaper " + (index+1)) 
        }}
        >
          <Image source={this.getImage(item.image)} style={styles.imageStyle}/>
        </TouchableOpacity>
      </View>
    )
  }
  //render() {
  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={this._renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={numColumns}
      />

    </View>
  )

}
//}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%'
  },
  textStyle: {
    color: "white",
  },
  itemStyle: {
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    height: 170,
    width: 130,
    borderColor: 'white',
    borderWidth: 3,
    margin: '5%',
  },
  imageStyle: {
    height: 170,
    width: 130,
    borderColor: 'white',
    borderWidth: 2
  },
  imageWrapper: {
    height: 180,
    width: 140,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue'
  }
})

export default ImageList;