import { useState, useContext } from "react"
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from "react-native";
import { Input } from 'react-native-elements';
import { UtilsContext } from './Context.js';

export default function Login(props) {

  const { user, isAuthenticated, setUtils } = useContext(UtilsContext);
  
  const [email, setEmail] = useState("")

  function VerificacaoLogin() {
    setUtils({...user, isAuthenticated: true});
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../img/foto-principal.jpg')} resizeMode="cover" style={styles.image}>

        <View>
          <Image
            source={require("../img/imgLogoArvore2.png")}
            style={styles.ImgLogo}
          />
          <Text style={styles.LoginTitulo}>
            RESERVA
          </Text>
        </View>

        <View style={styles.cardPrincipal}>

          <Input
            placeholder="Email:"
            leftIcon={{ type: 'font-awesome', name: 'envelope' }}
            style={styles}
            onChangeText={text => setEmail(text)}
          />
          <Input 
          placeholder="Confirmar senha" secureTextEntry={true} 
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
          />

          <View style={styles.Botoes}>


            <TouchableOpacity
              style={styles.touchLogin}
              onPress={() => VerificacaoLogin()}
            >
              <Text>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.touchLogin}
              onPress = {() => props.navigation.navigate("Cadastro")}>
              <Text>Cadastrar</Text>
            </TouchableOpacity>

          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    alignItems: 'center'
  },
  ImgLogo: {
    width: "200px",
    height: "200px",
    marginTop: "20px"
  },
  LoginTitulo: {
    fontSize: "60px",
    marginBottom: "60px",
    color: "white"
  },
  cardPrincipal: {
    padding: "20px",
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    maxHeight: "340px",
    opacity: "0.9",
    borderRadius: "10px"
  },
  Botoes: {
    marginTop: "50px"
  },
  touchLogin: {
    width: "300px",
    backgroundColor: "orange",
    padding: "10px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    margin: "10px"
  }
});