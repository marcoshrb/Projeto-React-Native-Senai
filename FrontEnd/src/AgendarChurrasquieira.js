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

export default function Churrasqueira(props) {

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
              placeholder='Nome:'
              leftIcon={
                <Icon
                  name='user'
                  size={24}
                  color='black'
                />
              }
            />

            <Container style={styles.InputsPequenos}>
              <View>
                <Input
                  placeholder='Idade:'
                  leftIcon={{ type: 'font-awesome', name: 'boy' }}
                  style={styles.textosInputPequeno}
                />
              </View>
              <View>
                <Input
                  leftIcon={{ type: 'font-awesome', name: 'transgender' }}
                  placeholder='Sexo:'
                  style={styles.textosInputPequeno}
                />
              </View>
            </Container>

            <Input
              placeholder="Email:"
              leftIcon={{ type: 'font-awesome', name: 'envelope' }}
              style={styles}
              onChangeText={value => this.setState({ comment: value })}
            />


            <Input
              placeholder='Senha:'
              leftIcon={{ type: 'font-awesome', name: 'lock' }}
              errorStyle={{ color: 'red' }}
              errorMessage=''
              secureTextEntry={true}
            />

            <Input placeholder="Confirmar senha" secureTextEntry={true} />

          </View>

          <TouchableOpacity
            style={styles.touchCadastrar}
          >
            <Text>Cadastrar</Text>
          </TouchableOpacity>

          <TouchableOpacity
          onPress = {() => props.navigation.navigate("Login")}>
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
    padding: "20px",
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    maxHeight: "600px",
    opacity: "0.9",
    borderRadius: "10px"
  },

  textosInputGrande: {
    marginTop: "10px",
    height: "25px",
    marginBottom: "20px",
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "10px",
    width: "300px"
  },
  textosInputPequeno: {
  },
  InputsPequenos: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start"
  },
  SwitchPequenos: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: "10px",
    marginBottom: "10px"
  },
  Switch: {
    marginRight: "10px"
  },
  Formata: {
    display: "flex",
    alignItems: "flex-start"
  },
  FormataDireita: {
    display: "flex",
    alignItems: "flex-start",
    marginLeft: "20px"
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
  }
});