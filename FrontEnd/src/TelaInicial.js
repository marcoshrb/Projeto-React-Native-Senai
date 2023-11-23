import { useState, useContext } from "react"
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, Dimensions } from "react-native";
import { Input } from 'react-native-elements';

const Slider_Width = Dimensions.get('window').width
const Item_Width = Slider_Width * 0.88

export default function TelaInicial(props) {

  return (
    <View style={styles.container}>
      

      
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: 'white'
  },
  cardCarousel : {
    width : Item_Width
  },
  image : {
    height: 250,
    borderRadius: 8
  }
});