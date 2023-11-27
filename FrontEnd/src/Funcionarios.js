// import axios from "axios";
import { useState, useContext } from "react"
import { StyleSheet, Text, View, Pressable, Modal, Switch } from "react-native";
import { UtilsContext } from "./Context";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Logo } from './LogoBar';
import { Table, TableWrapper, Rows } from 'react-native-table-component';


function SimNao(props) {
  if (props == true) {
    return (
      <View >
        <Text>Sim</Text>
      </View>
    );
  }
  else {
    return (
      <View>
        <Text>Não</Text>
      </View>
    );
  }

}

export default function Funcionarios(props) {

  const [modalVisible, setModalVisible] = useState(false);

  const [notfy, setNotfy] = useState(false)

  return (
    <View style={styles.Container}>

      <Logo />

      <Text style={{ display: "flex", justifyContent: "center", marginTop: "10px", fontSize: "20px", fontWeight: "bold", fontStyle: "italic", color: 'white' }}>
        FUNCIONÁRIOS
      </Text>

      <View style={styles.cardTable}>

        <Table borderStyle={{ borderWidth: 0 }} style={{ margin: '10px' }}>
          <TableWrapper style={styles.wrapper}>

            <Rows data={[
              ['Nome', 'Salrio', 'Ativo', ''],
              ['a', 'b', 'c',
                <Pressable
                  style={[styles.button, styles.buttonOpen]}
                  onPress={() => setModalVisible(true)}>
                  <Text style={styles.textStyle}>Editar</Text>
                </Pressable>],
              ['a', 'b', 'c',
                <Pressable
                  style={[styles.button, styles.buttonOpen]}
                  onPress={() => setModalVisible(true)}>
                  <Text style={styles.textStyle}>Editar</Text>
                </Pressable>],
              ['a', 'b', 'c',
                <Pressable
                  style={[styles.button, styles.buttonOpen]}
                  onPress={() => setModalVisible(true)}>
                  <Text style={styles.textStyle}>Editar</Text>
                </Pressable>],
              ['a', 'b', 'c',
                <Pressable
                  style={[styles.button, styles.buttonOpen]}
                  onPress={() => setModalVisible(true)}>
                  <Text style={styles.textStyle}>Editar</Text>
                </Pressable>]
            ]} flexArr={[2, 1, 1]} style={styles.row} textStyle={styles.text} />
          </TableWrapper>
        </Table>
      </View>

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Editar</Text>
              <Input
                style={styles.Inputs}
                leftIcon={{ type: 'font-awesome', name: 'user' }}
                placeholder='Nome:'
              />
              <Input
                style={styles.Inputs}
                leftIcon={{ type: 'font-awesome', name: 'dollar' }}
                placeholder='Salário:'
              />
              <View >

                <Text style={{display: 'inline-block'}}>Ativo:</Text>
                <Switch
                  onValueChange={() => setNotfy(!notfy)}
                  value={notfy}
                  trackColor={{ false: "#767577", true: "#87CEEB" }}
                  thumbColor={"#D3D3D3"}
                  activeThumbColor={"#f4f3f4"}
                  style={styles.Switch}
                  display= 'inline-block'
                />
                <Text style={{display:'inline-block'}}>
                  {SimNao(notfy)}
                </Text>

              </View>

              <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Salvar</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Cancelar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'black',
    flex: 1
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    padding: 10,
    borderRadius: '5%',
    margin: '3px',
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: 'yellowgreen',
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  cardTable: {
    backgroundColor: 'gray',
    padding: '10px',
    borderRadius: '5%',
    margin: '5px'
  }


});