// import axios from "axios";
import { useState, useContext } from "react"
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground } from "react-native";
import { UtilsContext } from "./Context";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Logo } from './LogoBar';

export default function Financeiro(props) {

  return (
    <View style={styles.Container}>
      
      <Logo/>      
      
      <Text style={{ display: "flex", justifyContent: "center", marginTop: "10px", fontSize: "20px", fontWeight: "bold", fontStyle: "italic" ,  color: 'white'}}>
        FINANCEIRO
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'black',
    flex: 1
  },

});