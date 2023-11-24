import { useState, useContext, Component } from "react"
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, Dimensions } from "react-native";
import { Input } from 'react-native-elements';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';




export default function TelaInicial (props) {


  const [visibleVisitantes, setVisibleChurrasqueiras] = useState(false);
  const [visibleMoradores, setVisibleAssembleias] = useState(false);
  const DropdownMoradores = () => {
    setVisibleAssembleias(!visibleMoradores);
  };

  const DropdownVisitantes = () => {
    setVisibleChurrasqueiras(!visibleVisitantes);
  };

  return (
    <View style={styles.container}>
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
        INÍCIO
      </Text>

      <View style={styles.BoxEventos}>
        <TouchableOpacity
          onPress={DropdownMoradores}
          style={styles.touchDropdown}
        >
          <Text style={styles.infoText}>MORADORES</Text>
        </TouchableOpacity>
      </View>

      {visibleMoradores && (
        <View>

          <View style={{ flex: "1", flexDirection: "row" }}>
            <TouchableOpacity
              style={styles.buttonReservar}
              onPress={() => props.navigation.navigate('Cadastro')}>
              <Text>Cadastrar morador</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      <View style={styles.BoxEventos}>
        <TouchableOpacity
          onPress={DropdownVisitantes}
          style={styles.touchDropdown}
        >
          <Text style={styles.infoText}>VISITANTES</Text>
        </TouchableOpacity>
      </View>

      {visibleVisitantes && (
        <View>

          <View style={{ flex: "1", flexDirection: "row" }}>
            <TouchableOpacity
              style={styles.buttonDeletar}>
              <Text >Deletar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonReservar}>
              <Text>Cadastrar morador</Text>
            </TouchableOpacity>
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

  BoxEventos: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'forestgreen',
    padding: '15px',
    borderRadius: '15px',
    margin: '15px',
    maxWidth: '100%',
  },
  touchDropdown: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  infoText: {
    color: 'black',
    fontSize: '20px',
    fontWeight: '500',
    textAlign: 'center',
    fontStyle: "italic"
  },
  buttonReservar: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
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
  }

});