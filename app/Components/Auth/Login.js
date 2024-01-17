import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, SafeAreaView, ScrollView, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import LoginRequest from '../Request/Auth/LoginRequest';
import styled from 'styled-components/native';

const Container = styled.View`
    width: 100%;
    padding: 20px 20px 0 20px;
`;

const ContainerForm = styled.View`
    margin: 100px 0 0 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    `;

const Write = styled(TextInput)`
    width:100%;
    height: 50px;
    border-radius: 12px;
    background-color: #ECF0F0;
    margin: 20px 0 0 0;
    padding: 0 0 0 20px;
    `;

const ButtonSend = styled(TouchableOpacity)`
    width:100%;
    height: 50px;
    background-color: #0F233E;
    border-radius: 12px;
    margin: 20px 0 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
`


export default function Login() {

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        const userData = {
            password: password,
            email: email,
        };

        if (email && password) {
            try {
                const response = await LoginRequest(userData);
                if (response && response.user && response.user.token) {
                    console.log(response.user.coin);
                    const { token, lastname, surname, email, coin } = response.user;
                    storeData(token, lastname, surname, email, coin.toString());
                    navigation.navigate('main');
                } else {
                    console.error("Invalid response from server");
                }
            } catch (error) {
                console.error('Error during login:', error);
            }
        } else {
            console.error("Please fill in all fields");
        }
    };

    const storeData = async (token, lastname, surname, email, coin) => {
        try {
            await AsyncStorage.setItem('token', token);
            await AsyncStorage.setItem('lastname', lastname);
            await AsyncStorage.setItem('surname', surname);
            await AsyncStorage.setItem('email', email);
            await AsyncStorage.setItem('coin', coin);
            console.log('Data stored successfully:');
        } catch (e) {
            console.error('Error storing token:', e);
        }
    };

    let [fontsLoaded] = useFonts({
        Inter_900Black,
    });

    if (!fontsLoaded) {
        console.log('Matis');
    } else {
        return (
            <SafeAreaView>
                <ScrollView>

                    <Container>
                        <Text style={{ fontWeight: 'bold', fontSize: 40, color: '#0F233E', fontFamily: 'Inter_900Black' }}>Se connecter</Text>
                        <Text style={{ color: '#0F233E' }}>Nous sommes ravis de vous <Text style={{ color: '#5CC8BF' }}>revoir</Text></Text>
                        <ContainerForm>
                            <Write
                                placeholder='Email'
                                value={email}
                                onChangeText={text => setEmail(text)}
                            />
                            <Write
                                placeholder='Mot de passe'
                                secureTextEntry={true}
                                value={password}
                                onChangeText={text => setPassword(text)}
                            />
                            <ButtonSend onPress={handleRegister}><Text style={{ color: 'white' }}>Se connecter</Text></ButtonSend>
                        </ContainerForm>
                    </Container>
                </ScrollView>
            </SafeAreaView>
        );
    }

}