import { useState, useContext, Component } from "react"
import { StyleSheet, Text, View, TouchableOpacity, Image, Modal, Pressable } from "react-native";
import { Input } from 'react-native-elements';
import { Table, TableWrapper, Rows } from 'react-native-table-component';
import { Logo } from './LogoBar';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function TelaInicial(props) {

  const [BoxesNavigaton, setBoxesNavigaton] = useState(true);

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
     
      <Logo/>

      {BoxesNavigaton ? (
        <View style={styles.Boxes}>

          <View style={styles.BoxEventos}>
            <TouchableOpacity onPress={() => setBoxesNavigaton(false)}>
              <Text style={styles.infoText}>Morador</Text>
              <Text style={styles.infoText}>/ </Text>
              <Text style={styles.infoText}> Visitante</Text>
            </TouchableOpacity>
          </View>


          <View style={styles.BoxEventos}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Eventos')}>
              <Text style={styles.infoText}>Evento</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.BoxEventos}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Financeiro')}>
              <Text style={styles.infoText}>Financeiro</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.BoxEventos}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Funcionarios')}>
              <Text style={styles.infoText}>Funcionario</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.BoxEventos}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Funcionarios')}>
              <Text style={styles.infoText}>Cameras</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View>
          <View>
            <TouchableOpacity onPress={() => setBoxesNavigaton(true)} style={{margin : '10px', fontWeight: "bold", display: 'block'}}>
              <Icon
                name='reply'
                size={24}
                color='black'
                display="inline-block"
              />
              <Text style={{display : "inline-block", margin:'10px'}}>Voltar</Text>
            </TouchableOpacity>

            <Text style={{ display: "flex", justifyContent: "center", marginTop: "10px", fontSize: "20px", fontWeight: "bold", fontStyle: "italic" }}>
              Bloco A
            </Text>
            <Table borderStyle={{ borderWidth: 0 }}>
              <TableWrapper style={styles.wrapper}>

                <Rows data={[
                  ['Apto', 'Morador', 'Vaga', ''],
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
                ]} flexArr={[1, 2, 1]} style={styles.row} textStyle={styles.text} />
              </TableWrapper>
            </Table>

            <Text style={{ display: "flex", justifyContent: "center", marginTop: "10px", fontSize: "20px", fontWeight: "bold", fontStyle: "italic" }}>
              Bloco B
            </Text>
            <Table borderStyle={{ borderWidth: 0 }}>
              <TableWrapper style={styles.wrapper}>

                <Rows data={[
                  ['Apto', 'Morador', 'Vaga', ''],
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

                ]} flexArr={[1, 2, 1]} style={styles.row} textStyle={styles.text} />
              </TableWrapper>
            </Table>

            <View style={{ flex: "1", flexDirection: "row" }}>
              <TouchableOpacity
                style={styles.buttonCadastrar}
                onPress={() => props.navigation.navigate('Cadastro')}>
                <Text>Cadastrar morador</Text>
              </TouchableOpacity>
            </View>

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
                    placeholder='Morador:'
                  />
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
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1
  },
  Boxes: {
    display: 'block',
  },
  BoxEventos: {
    display: "inline-block",
    backgroundColor: 'yellowgreen',
    padding: '15px',
    borderRadius: '15px',
    margin: '5px',
    width: '120px',
    height: '120px'
  },
  infoText: {
    color: 'black',
    fontSize: '15px',
    fontWeight: '500',
    textAlign: 'center',
    fontStyle: "italic"
  },
  buttonCadastrar: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellowgreen",
    padding: "10px",
    minWidth: "40%",
    borderRadius: "10px",
    margin: "10px"
  },
  buttonDeletar: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "indianred",
    padding: "10px",
    minWidth: "40%",
    borderRadius: "10px",
    margin: "10px"
  },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: { height: 28 },
  text: { textAlign: 'center' },

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
  }

});