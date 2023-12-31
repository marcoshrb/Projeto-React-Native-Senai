// import axios from "axios";
import { useState, useContext } from "react"
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground } from "react-native";
import { UtilsContext } from "./Context";
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { Ionicons } from '@expo/vector-icons'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { SelectList } from 'react-native-dropdown-select-list'
import { Logo } from './LogoBar';

export default function Eventos(props) {

  const [utils, setUtils] = useState({ users: [], isAuthenticated: false, IsAdm: false })

  const [selected, setSelected] = useState('');

  const [visibleChurrasqueiras, setVisibleChurrasqueiras] = useState(false);
  const [visibleAssembleias, setVisibleAssembleias] = useState(false);
  const [visibleEleicoes, setVisibleEleicoes] = useState(false);

  const DropdownAssembleias = () => {
    setVisibleAssembleias(!visibleAssembleias);
  };

  const DropdownChurrasqueiras = () => {
    setVisibleChurrasqueiras(!visibleChurrasqueiras);
  };

  const DropdownEleicoes = () => {
    setVisibleEleicoes(!visibleEleicoes);
  };


  return (
    <View style={styles.Container}>

      <Logo />

      <View>
        <Text style={{ display: "flex", justifyContent: "center", marginTop: "10px", fontSize: "20px", fontWeight: "bold", fontStyle: "italic", color: 'white' }}>
          EVENTOS
        </Text>

        <View style={styles.BoxEventos}>
          <TouchableOpacity
            onPress={DropdownAssembleias}
            style={styles.touchDropdown}
          >
            <Text style={styles.infoText}>Assembleias de Condomínio</Text>
          </TouchableOpacity>
        </View>

        {visibleAssembleias && (
          <View>
            <Calendar
              onDayPress={day => {
                setSelected(day.dateString);
              }}
              markedDates={{
                [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
              }}
              style={styles.calendario}
            />

            {utils.IsAdm ?? (

              <View style={{ flex: "1", flexDirection: "row" }}>
                <TouchableOpacity
                  style={styles.buttonDeletar}>
                  <Text >Deletar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonReservar}>
                  <Text >Marcar</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}

        <View style={styles.BoxEventos}>
          <TouchableOpacity
            onPress={DropdownChurrasqueiras}
            style={styles.touchDropdown}
          >
            <Text style={styles.infoText}>Churrasqueiras</Text>
          </TouchableOpacity>
        </View>

        {visibleChurrasqueiras && (
          <View>
            <Calendar
              onDayPress={day => {
                setSelected(day.dateString);
              }}
              markedDates={{
                [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'forestgreen' }
              }}
              style={styles.calendario}
            />

            <View style={styles.cardTable}>
              <Table borderStyle={{ borderWidth: 0 }}>
                <TableWrapper style={styles.wrapper}>

                  <Rows data={[
                    ['Apto', 'Morador'],
                    ['a', 'b'],

                  ]} flexArr={[1, 2]} style={styles.row} textStyle={styles.text} />
                </TableWrapper>
              </Table>
            </View>

            {utils.IsAdm ?? (

              <View style={{ flex: "1", flexDirection: "row" }}>
                <TouchableOpacity
                  style={styles.buttonDeletar}>
                  <Text >Deletar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonReservar}>
                  <Text >Marcar</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}

        <View style={styles.BoxEventos}>
          <TouchableOpacity
            onPress={DropdownEleicoes}
            style={styles.touchDropdown}
          >
            <Text style={styles.infoText}>Eleições</Text>
          </TouchableOpacity>
        </View>

        {visibleEleicoes && (
          <View>
            <Calendar
              onDayPress={day => {
                setSelected(day.dateString);
              }}
              markedDates={{
                [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
              }}
              style={styles.calendario}
            />
            
            {utils.IsAdm ?? (

              <View style={{ flex: "1", flexDirection: "row" }}>
                <TouchableOpacity
                  style={styles.buttonDeletar}>
                  <Text >Deletar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonReservar}>
                  <Text >Marcar</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}
        <View style={{ minHeight: '80px' }}>

        </View>


      </View>

    </View>


  );
}

const styles = StyleSheet.create({
  Container: {
    overflow: 'scroll',
    backgroundColor: 'black',
    flex: 1
  },

  BoxEventos: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellowgreen',
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
  },

  wrapper: { flexDirection: 'row' },
  row: { height: 28 },
  text: { textAlign: 'center' },

  cardTable: {
    backgroundColor: 'gray',
    padding: '10px',
    borderRadius: '5%',
    margin: '5px'
  }


});