import { useState, useContext } from "react"
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from "react-native";
import { Input } from 'react-native-elements';
import { UtilsContext } from './Context.js';
import axios from 'axios';

export default function Login(props) {

  const { user, isAuthenticated, IsAdm, setUtils } = useContext(UtilsContext);


  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [nomeNaoEncontrado, setNaoEncontrado] = useState(false);

  async function VerificacaoLogin() {

    const response = await axios.get("http://localhost:8080/morador");

    console.log(response);

    var data = response.data;
    var morador;

    for (let i = 0; i < data.length; i++) {
      if (data[i].name == nome){
        if (data[i].senha == senha) {
          morador = data[i];
          if(morador.sindico == true){
            console.log("aaaaaaaaaa");
            setUtils({ ...user, isAuthenticated: true, IsAdm: true });
          } 
          else{
            setUtils({ ...user, isAuthenticated: true, IsAdm: false });
          }
        }
      }
      else
        setNaoEncontrado(true);
      
    }
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
            placeholder="Nome:"
            leftIcon={{ type: 'font-awesome', name: 'user' }}
            style={styles}
            onChangeText={text => setNome(text)}
          />
          <Input
            placeholder="Senha:"
            secureTextEntry={true}
            leftIcon={{ type: 'font-awesome', name: 'lock' }}
            onChangeText={text => setSenha(text)}
          />
          {nomeNaoEncontrado ? (
            <Text style={styles.alerts}>*User ou Senha Incorreta</Text>
            ): (
              <Text></Text>
            )
            }

          <View style={styles.Botoes}>

            <TouchableOpacity
              style={styles.touchLogin}
              onPress={() => VerificacaoLogin()}
            >
              <Text>Login</Text>
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
    backgroundColor: "forestgreen",
    padding: "10px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    margin: "10px"
  },
  alerts: {
    color: "red"
  }
});