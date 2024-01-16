import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Components/Home';
import Bot from './Components/Bot';
import styled from 'styled-components/native';
import Product from './Components/Parts/Product';
import Account from './Components/Account';
import Register from './Components/Auth/Register';
import Welcome from './Components/Auth/Welcome';
import Login from './Components/Auth/Login';
import Coin from './Components/Coin';
import Payment from './Components/Parts/Payment';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import 'expo-dev-client';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Nav = styled.View`
    padding: 20px;
    flex: 1;
`

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white'
  },
};


function MainTabNavigator() {
  return (
      <View style={{ flex: 1 }}>
        <Tab.Navigator screenOptions={{
          tabBarStyle: {
            height: '10%',
            width: '90%',
            alignSelf: 'center',
            backgroundColor: '#0F233E',
            marginTop: 20,
            paddingBottom: 16,
            borderTopWidth: 0,
            borderRadius: 99990,
            marginBottom: 20
          },
        }}>

          <Tab.Screen name="Home" component={Home} options={{
            tabBarActiveTintColor: '#557C98',
            headerShown: false,
            tabBarIcon(props) {
              return <Feather name="home" size={28} color={props.color} />
            }
          }} />


          <Tab.Screen name="Bot" component={Bot} options={{
            tabBarActiveTintColor: '#557C98',
            headerShown: false,
            tabBarIcon(props) {
              return <FontAwesome5 name="robot" size={28} color={props.color} />
            }
          }} />

          <Tab.Screen name="Account" component={Account} options={{
            tabBarActiveTintColor: '#557C98',
            headerShown: false,
            tabBarIcon(props) {
              return <MaterialIcons name="account-circle" size={28} color={props.color} />
            }
          }} />


        </Tab.Navigator>
      </View>
  );
}

export default function App() {
  return (
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator>
          <Stack.Screen name="main" component={MainTabNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="Product" component={Product}  options={{ 
            gestureEnabled: false,
            headerShadowVisible: false,
            headerTintColor: '#0F233E',
          }}/>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name='Register' component={Register} options={{
            gestureEnabled: false,
            headerShadowVisible: false,
            headerTintColor: '#0F233E',
            animationEnabled: Platform.OS === 'android' ? false : true,
            headerTitle() {
              return <></>
            }
          }} />
          <Stack.Screen name='Login' component={Login} options={{
            gestureEnabled: false,
            headerShadowVisible: false,
            headerTintColor: '#0F233E',
            animationEnabled: Platform.OS === 'android' ? false : true,
            headerTitle() {
              return <></>
            }
          }} />
          <Stack.Screen name='Welcome' component={Welcome} options={{
            headerShown: false,
            headerBackTitleVisible: false,
            gestureEnabled: false,
            headerBackVisible: false,
            gestureEnabled: false,
          }} />
          <Stack.Screen name='Coin' component={Coin} options={{
            gestureEnabled: false,
            headerShadowVisible: false,
            headerTintColor: '#0F233E',
            animationEnabled: Platform.OS === 'android' ? false : true,
            headerTitle() {
              return <></>
            }
          }} /> 
          <Stack.Screen name='Payment' component={Payment} options={{
            gestureEnabled: false,
            headerShadowVisible: false,
            headerTintColor: '#0F233E',
            animationEnabled: Platform.OS === 'android' ? false : true,
            headerTitle() {
              return <></>
            }
          }} />        
        </Stack.Navigator>
      </NavigationContainer>
  );
}

