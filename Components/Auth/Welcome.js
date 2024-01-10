import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, SafeAreaView, ScrollView, Image } from 'react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../assets/app/logo.png';
import styled from 'styled-components/native';

const ContainerWelcome = styled.View`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ContainerTop = styled.View`
    width: 100%;
    height: 600px;
    background-color: #0F233E;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
`;

const ButtonRegister = styled(TouchableOpacity)`
    width: 270px;
    height: 50px;
    background-color: #0F233E;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
`;


const ButtonLogin = styled(TouchableOpacity)`
    width: 270px;
    height: 50px;
    border: solid 3px #0F233E;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ContainerAuth = styled.View`
    width: 100%;
    padding: 50px 0 0 0;
    display: flex;
    align-items: center;
    gap: 25px;
`

export default function Welcome(){

    const navigation = useNavigation();

    return(
        <ContainerWelcome>
            <ContainerTop>
            <Image source={Logo} style={{ width:80, height:80, position: 'absolute', top: 0, left:0, marginTop: 40, marginLeft: 10 }} />
                <Text style={{ fontWeight: 'bold', fontSize: 45, color: '#FFFF', fontFamily: 'Inter_900Black', textAlign: 'center' }}>Bienvenue, sur GrabGenious</Text>
                <Text style={{ color: 'white' }}>Inscris ou connecte toi, pour utiliser l'application</Text>
            </ContainerTop>
            <ContainerAuth>
                <ButtonRegister onPress={() => { navigation.navigate('Register') }}><Text style={{ color: 'white', fontWeight: 'bold' }}>S'inscrire</Text></ButtonRegister>
                <ButtonLogin onPress={() => { navigation.navigate('Login') }}><Text style={{ color: '#0F233E', fontWeight: 'bold'  }}>Se connecter</Text></ButtonLogin>
            </ContainerAuth>
        </ContainerWelcome>
    );
}