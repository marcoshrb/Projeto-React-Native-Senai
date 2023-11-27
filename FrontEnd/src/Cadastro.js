// import axios from "axios";
import { useState, useContext } from "react"
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground } from "react-native";
import { UtilsContext } from "./Context";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Logo } from './LogoBar';

export default function Cadastro(props) {

  const { utils, setUtils } = useContext(UtilsContext)

  const [nome, setNome] = useState("")
  const [apartamento, setApartamento] = useState("")
  const [bloco, setBloco] = useState("")

  function cadastrarTouch(){
    setUtils({...utils, moradores : [...utils.moradores, { nome : nome, apartamento : apartamento, bloco : bloco}]})

    props.navigation.navigate('TelaInicial');
  }
  return (
    <View>

      <Logo />
      <View style={styles.Container}>


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
              onChange={text => setNome(text)}
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
                onChange={text => setApartamento(text)}
                leftIcon={{ type: 'font-awesome', name: 'home' }}
              />
            </View>
            <View>
              <Input
                style={styles.Inputs}
                placeholder='Bloco:'
                onChange={text => setBloco(text)}
                leftIcon={{ type: 'font-awesome', name: 'dropbox' }}
              />
            </View>

          </View>

          <TouchableOpacity
            style={styles.touchCadastrar}
            onPress={() => cadastrarTouch()}
          >
            <Text>Cadastrar</Text>
          </TouchableOpacity>


        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
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
    minWidth: "500px"
  },

  Inputs: {
    width: "100%"
  },
  touchCadastrar: {
    width: "200px",
    backgroundColor: "yellowgreen",
    padding: "10px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px",
    margin: "10px",
    marginBottom: "20px"
  },
  touchCancelar: {
    marginTop: "2px",
    marginBottom: "2px"
  }
});