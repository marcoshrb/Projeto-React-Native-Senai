// import axios from "axios";
import { useState, useContext } from "react"
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground } from "react-native";
import { UtilsContext } from "./Context";
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { Ionicons } from '@expo/vector-icons'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { SelectList } from 'react-native-dropdown-select-list'


export default function Eventos(props) {

  const [selected, setSelected] = useState('');

  const [visibleChurrasqueiras, setVisibleChurrasqueiras] = useState(false);
  const [visibleAssembleias, setVisibleAssembleias] = useState(false);
  const [visibleEleicoes, setVisibleEleicoes] = useState(false);

  const toggleDropdownChurrasqueiras = () => {
    setVisibleChurrasqueiras(!visibleChurrasqueiras);
  };

  const toggleDropdownAssembleias = () => {
    setVisibleAssembleias(!visibleAssembleias);
  };

  const toggleDropdownEleicoes = () => {
    setVisibleEleicoes(!visibleEleicoes);
  };


  return (
    <View style={styles.Container}>
      <View>
      
        <View style={styles.cardPrincipal}>
          <TouchableOpacity onPress={toggleDropdownChurrasqueiras}>
            <Text style={styles.TiTulos}>Churrasqueiras</Text>
          </TouchableOpacity>
          {visibleChurrasqueiras && (
            <View>
              <Calendar
                onDayPress={day => {
                  setSelected(day.dateString);
                }}
                markedDates={{
                  [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
                }}
                style = {styles.calendario}
              />
            </View>
          )}
          
        </View>

        <View style={styles.cardPrincipal}>
          <TouchableOpacity onPress={toggleDropdownAssembleias}>
            <Text style={styles.TiTulos}>Assembleias</Text>
          </TouchableOpacity>
          {visibleAssembleias && (
            <View>
              <Calendar
                onDayPress={day => {
                  setSelected(day.dateString);
                }}
                markedDates={{
                  [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
                }}
                style = {styles.calendario}
              />

            </View>
          )}
       
        </View>
        <View style={styles.cardPrincipal}>
          <TouchableOpacity onPress={toggleDropdownEleicoes}>
            <Text style={styles.TiTulos}>Eleições</Text>
          </TouchableOpacity>
          {visibleEleicoes && (
            <View>
              <Calendar
                onDayPress={day => {
                  setSelected(day.dateString);
                }}
                markedDates={{
                  [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
                }}
                style = {styles.calendario}
              />

            </View>
          )}
       
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    height: "200px"
  },
  cardPrincipal: {
    padding: "10px",
    marginTop: "10px",
    flex: 1,
    backgroundColor: "dodgerblue",
    opacity: "0.9",
    borderRadius: "10px"
  },
  TiTulos: {
    fontSize: "40px",
    marginBottom: "20px"
  },
  calendario : {
    margin: "10px"
  }
});