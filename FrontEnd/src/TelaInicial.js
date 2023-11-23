import { useState, useContext } from "react"
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, Dimensions } from "react-native";
import { Input } from 'react-native-elements';

const Slider_Width = Dimensions.get('window').width
const Item_Width = Slider_Width * 0.88

export default function TelaInicial(props) {

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "orange", flex: '1', justifyContent: "center", alignItems: "center", maxHeight: "80px" }}>
        <Image
          source={require('../img/imgLogoArvore2.png')}
          style={{
            height: "60px",
            width: "60px",
            margin: "20px"
          }}
        />
      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1
  },
  cardCarousel : {
    width : Item_Width
  },
  image : {
    height: 250,
    borderRadius: 8
  }
});