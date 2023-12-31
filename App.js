import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Components/Home';
import Bot from './Components/Bot';
import styled from 'styled-components/native';
import Product from './Components/Parts/Product';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Feather } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Nav = styled.View`
    padding: 20px;
    flex: 1;
`


function MainTabNavigator() {
  return (
    <View style={{ flex: 1 }}> 
    <Tab.Navigator screenOptions={{
      tabBarStyle: {
        height: '10%',
        width: '90%',
        alignSelf: 'center',
        marginTop: 20,
        paddingBottom: 16,
        borderTopWidth: 0,
        borderRadius: 99990,
        marginBottom: 20
      },
    }}>

      <Tab.Screen name="Home" component={Home} options={{
        tabBarActiveTintColor: '#222831',
        tabBarIcon(props){
          return <Feather name="home" size={24} color={props.color} />
        } 
      }} />


      <Tab.Screen name="Bot" component={Bot} options={{
        tabBarActiveTintColor: '#222831',
        tabBarIcon(props){
          return <FontAwesome5 name="robot" size={24} color={props.color} />
        }
      }} />
    </Tab.Navigator>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="main" component={MainTabNavigator}  options={{ headerShown: false }}/>
        <Stack.Screen name="Product" component={Product} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
