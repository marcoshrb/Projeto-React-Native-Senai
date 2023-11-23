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

export default function Cadastro(props) {

  return (
    <View style={styles.Container}>
      <ImageBackground source={require('../img/foto-principal.jpg')} resizeMode="cover" style={styles.image}>

        <View style={styles.cardPrincipal}>

          <Image
            source={require('../img/download.jpg')}
            style={{
              height: "150px",
              width: "150px",
              marginBottom: "20px"
            }}
          />
          <View>

            <Input
              style={styles.Inputs}
              placeholder='Nome:'
              leftIcon={
                <Icon
                  name='user'
                  size={24}
                  color='black'
                />
              }
            />

            <View>
              <Input
                style={styles.Inputs}
                placeholder='Apartamento:'
                leftIcon={{ type: 'font-awesome', name: 'home' }}
              />
            </View>
            <View>
              <Input
                style={styles.Inputs}
                leftIcon={{ type: 'font-awesome', name: 'dropbox' }}
                placeholder='Bloco:'
              />
            </View>

            <Input
              style={styles.Inputs}
              placeholder='Senha:'
              leftIcon={{ type: 'font-awesome', name: 'lock' }}
              errorStyle={{ color: 'red' }}
              errorMessage=''
              secureTextEntry={true}
            />

            <Input 
            style={styles.Inputs}
            placeholder="Confirmar senha" secureTextEntry={true}
            leftIcon={{ type: 'font-awesome', name: 'unlock' }} />

          </View>

          <TouchableOpacity
            style={styles.touchCadastrar}
          >
            <Text>Cadastrar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.touchCancelar}
            onPress={() => props.navigation.navigate("Login")}>
            <Text>Cancelar</Text>
          </TouchableOpacity>

        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardPrincipal: {
    padding: "10px",
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    minWidth: "500px"
  },

  Inputs: {
    width: "100%"
  },
  touchCadastrar: {
    width: "200px",
    backgroundColor: "dodgerblue",
    padding: "10px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px",
    margin: "10px",
    marginBottom: "20px"
  },
  touchCancelar :{
    marginTop: "2px",
    marginBottom: "2px"
  }
});