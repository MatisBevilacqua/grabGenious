import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {  useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import styled from 'styled-components/native';
import Header from './Parts/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useIsFocused } from '@react-navigation/native';



const ContainerProfil = styled.View`
    width: 100%;
    display: flex;
    padding: 0 20px 0 20px;
    margin: 100px 0 0 0;
    padding: 80px 20px 0 20px;
`;

const ContainerProfilArticle = styled.View`
    width: 100%;
    height: 50px;
    border-radius: 12px;
    background-color: #ECF0F0;
    margin: 20px 0 0 0;
    padding: 15px 0 0 20px;
`;


export default function Account(){

    const navigation = useNavigation();

    const [userData, setUserData] = useState({
        lastname: '',
        surname: '',
        email: '',
    });
    
    const fetchData = async () => {
        try {
            const lastname = await AsyncStorage.getItem('lastname');
            const surname = await AsyncStorage.getItem('surname');
            const email = await AsyncStorage.getItem('email');

            setUserData({
                lastname: lastname || '', 
                surname: surname || '',
                email: email || '',
            });

        } catch (e) {
            console.error('Error retrieving token:', e);
        }
    };

    useEffect(() => {
        fetchData(); 
    }, [useIsFocused, fetchData]);

    const clearAsyncStorage = async () => {
        try {
            await AsyncStorage.clear();
            navigation.navigate('Welcome');
            console.log('AsyncStorage cleared successfully!');
        } catch (error) {
            console.error('Error clearing AsyncStorage:', error);
        }
    };

    let [fontsLoaded] = useFonts({
        Inter_900Black,
    });

    if(!fontsLoaded){
        console.log('Font non charger');
    }else{
        return(
            <>
                <Header></Header>
                <ContainerProfil>
                    <Text style={{  fontWeight: 'bold', fontSize:30, color:'#0F233E', fontFamily: 'Inter_900Black', paddingBottom:30  }}>Mon compte</Text>
                    <ContainerProfilArticle>
                        <Text>Prénom - {userData.lastname}</Text>
                    </ContainerProfilArticle>

                    <ContainerProfilArticle>
                        <Text>Nom - {userData.surname}</Text>
                    </ContainerProfilArticle>

                    <ContainerProfilArticle>
                        <Text>Email - {userData.email}</Text>
                    </ContainerProfilArticle>

                    <ContainerProfilArticle>
                        <Text>Mot de passe - *******</Text>
                    </ContainerProfilArticle>
                    <TouchableOpacity onPress={clearAsyncStorage}>
                        <Text style={{ color: 'red', textAlign: 'center', marginTop: 50 }}>Se déconnecter</Text>
                    </TouchableOpacity>
                </ContainerProfil>
            </>
        );
    }

}