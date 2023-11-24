// import axios from "axios";
import { useState, useContext } from "react"
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground } from "react-native";
import { UtilsContext } from "./Context";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

function Container(props) {
  return (
    <View style={props.style}>
      {props.children}
    </View>
  )
}


// const conexacaoHost = async (name, age) => {

//   try {
//     const response = await axios.post("http://localhost:8080/user", { name, age});
//     console.log('Resposta da API: ', response);
//   } catch (error) {
//     console.error('Erro ao enviar', error)
//   }

// }

export default function Funcionarios(props) {

  return (
    <View style={styles.Container}>
      <View style={{ backgroundColor: "forestgreen", flex: '1', justifyContent: "center", alignItems: "center", maxHeight: "80px" }}>
        <Image
          source={require('../img/imgLogoArvore2.png')}
          style={{
            height: "60px",
            width: "60px",
            margin: "20px"
          }}
        />
      </View>
      <Text style={{ display: "flex", justifyContent: "center", marginTop: "10px", fontSize: "20px", fontWeight: "bold", fontStyle: "italic" }}>
        FUNCIONÁRIOS
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1
  }

});