
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

import { Ionicons, FontAwesome } from '@expo/vector-icons'
import { useState, useContext } from 'react';



export default function App() {

    const [utils, setUtils] = useState({ users: [], isAuthenticated: false, IsAdm: false })

    const Stack = createStackNavigator();
    const Tab = createBottomTabNavigator();


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
                            tabBarActiveTintColor: 'yellowgreen',
                            tabBarInactiveTintColor: 'white',
                            headerShown: false,
                            tabBarShowLabel: false,
                            tabBarStyle: {
                                backgroundColor: 'gray',
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
                            options={{
                                tabBarIcon: ({ color, size, focused }) => {
                                    if (focused) {
                                        return <Ionicons name="home" size={size} color={color} />
                                    }
                                    return <Ionicons name="home-outline" size={size} color={color} />
                                }
                            }}

                        />
                        <Tab.Screen
                            name="Eventos"
                            component={Eventos}
                            options={{
                                tabBarIcon: ({ color, size, focused }) => {
                                    if (focused) {
                                        return <Ionicons name="calendar" size={size} color={color} />
                                    }
                                    return <Ionicons name="calendar-outline" size={size} color={color} />
                                }
                            }}
                        />

                        <Tab.Screen
                            name="Financeiro"
                            component={Financeiro}
                            options={{
                                tabBarIcon: ({ color, size, focused }) => {
                                    if (focused) {
                                        return <FontAwesome name="dollar" size={size} color={color} />
                                    }
                                    return <FontAwesome name="dollar" size={size} color={color} />
                                }
                            }}
                        />
                        {utils.IsAdm ?? (
                            <Tab.Screen
                                name="Funcionarios"
                                component={Funcionarios}
                                options={{
                                    tabBarIcon: ({ color, size, focused }) => {
                                        if (focused) {
                                            return <Ionicons name="person" size={size} color={color} />
                                        }
                                        return <Ionicons name="person-outline" size={size} color={color} />
                                    }
                                }}
                            />
                        )
                        }

                        {
                            utils.IsAdm ?? (

                                <Tab.Screen
                                    name="Cadastro"
                                    component={Cadastro}
                                    options={{
                                        tabBarIcon: ({ color, size, focused }) => {
                                            if (focused) {
                                                return <Ionicons name="person-add" size={size} color={color} />
                                            }
                                            return <Ionicons name="person-add-outline" size={size} color={color} />
                                        }
                                    }}
                                />
                            )
                        }


                    </Tab.Navigator>

                ) : (
                    <Stack.Navigator>
                        <Stack.Screen name="Login" component={Login} />

                    </Stack.Navigator>
                )}
            </UtilsContext.Provider>
        </NavigationContainer>
    );
}
