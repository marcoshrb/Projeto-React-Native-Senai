
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack'
import { UtilsContext } from './src/Context.js';

import Login from './src/Login.js';
import Cadastro from './src/Cadastro.js';
import TelaInicial from './src/TelaInicial.js';
import Eventos from './src/Eventos.js'
import Financeiro from './src/Financeiro.js'
import Funcionarios from './src/Funcionarios.js'

import { Ionicons } from '@expo/vector-icons'
import { useState, useContext } from 'react';



export default function App() {

  const [utils, setUtils] = useState({users:[],isAuthenticated:true})

  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const { user, utilsContext } = useContext(UtilsContext);
  
  
  return (
    <NavigationContainer>
      
      <UtilsContext.Provider value={{ utils, setUtils }}>
      {utils.isAuthenticated ? (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Financeiro') {
                iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Assembleias') {
                iconName = focused ? 'ios-list' : 'ios-list-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'orange',
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
            tabBarStyle : {
                height: 60,
                position: 'absolute',
                bottom: 16,
                right: 16,
                left: 16,
                borderRadius: 16
            }
        })}
        >
           <Tab.Screen 
              name="TelaInicial" 
              component={TelaInicial} 
              options = {{
                  tabBarIcon : ({ color, size, focused}) =>{
                  if (focused) {
                      return <Ionicons name = "person" size = {size} color = {color}/>
                  }
                  return <Ionicons name = "person-outline" size = {size} color = {color}/>
                  }
              }}
        />
          <Tab.Screen 
              name="Eventos" 
              component={Eventos} 
              options = {{
                  tabBarIcon : ({ color, size, focused}) =>{
                  if (focused) {
                      return <Ionicons name = "calendar" size = {size} color = {color}/>
                  }
                  return <Ionicons name = "calendar-outline" size = {size} color = {color}/>
                  }
              }}
          />
          
          <Tab.Screen 
              name="Financeiro" 
              component={Financeiro} 
              options = {{
                  tabBarIcon : ({ color, size, focused}) =>{
                  if (focused) {
                      return <Ionicons name = "bookmark" size = {size} color = {color}/>
                  }
                  return <Ionicons name = "bookmark-outline" size = {size} color = {color}/>
                  }
              }}
          />
          <Tab.Screen 
              name="Funcionarios" 
              component={Funcionarios} 
              options = {{
                  tabBarIcon : ({ color, size, focused}) =>{
                  if (focused) {
                      return <Ionicons name = "person" size = {size} color = {color}/>
                  }
                  return <Ionicons name = "person-outline" size = {size} color = {color}/>
                  }
              }}
        />
       
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
        </Stack.Navigator>
      )}
    </UtilsContext.Provider>
    </NavigationContainer>
  );
}
