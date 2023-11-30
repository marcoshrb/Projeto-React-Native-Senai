// import axios from "axios";
import { useState, useContext } from "react"
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Logo } from './LogoBar';
import axios from 'axios';

export default function Cadastro(props) {

  const [nome, setNome] = useState("")
  const [senha, setSenha] = useState("")
  const [apartamento, setApartamento] = useState("")
  const [bloco, setBloco] = useState("")

  const dbConnect = async () => {

    try {

      const body = {
        name: nome,
        senha: senha,
        numAp: apartamento,
        numBlc: bloco,
        sindico: false,
        taxaCond: false
      }
      const response = await axios.post("http://localhost:8080/morador", body);
      props.navigation.navigate('TelaInicial')

      console.log("Resposta da API", response);
    } catch (err) {
      console.error("Erro ao conectar", err);
    }
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
              onChangeText={text => setNome(text)}
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
                placeholder='Senha:'
                onChangeText={text => setSenha(text)}
                leftIcon={{ type: 'font-awesome', name: 'lock' }}
              />
            </View>

            <View>
              <Input
                style={styles.Inputs}
                placeholder='Apartamento:'
                onChangeText={text => setApartamento(text)}
                leftIcon={{ type: 'font-awesome', name: 'home' }}
              />
            </View>
            <View>
              Bloco:
            </View>
            <View>
              <RNPickerSelect
                onValueChange={(value) => setBloco(value)}
                items={[
                  { label: "A", value: "A" },
                  { label: "B", value: "B" },
                ]}
                style={styles.pickerSelectStyles}
              />
            </View>
          </View>

          <TouchableOpacity
            style={styles.touchCadastrar}
            onPress={dbConnect}
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
  },
  pickerSelectStyles :{
    fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30 
  }
});

