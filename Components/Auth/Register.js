import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, SafeAreaView, ScrollView, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import RegisterRequest from '../Request/Auth/RegisterRequest';
import styled from 'styled-components/native';

const Container = styled.View`
    width: 100%;
    padding: 20px 20px 0 20px;
`;

const ContainerForm = styled.View`
    margin: 30px 0 0 0;
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


export default function Register() {

    const navigation = useNavigation();

    const [surname, setSurname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVerify, setPasswordVerify] = useState('');

    const handleRegister = async () => {
        const userData = {
            user: {
                lastname: lastname,
                surname: surname,
                password: password,
                email: email,
            },
        };

        if (lastname && surname && email && password && passwordVerify) {
            if (password !== passwordVerify) {
                console.error("Passwords don't match");
                return;
            }

            const response = await RegisterRequest(userData);
            const token = response.user.token;
            storeData(token, lastname, surname, email, '3');
            navigation.navigate('main');
            

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
            <Container>
                <Text style={{ fontWeight: 'bold', fontSize: 40, color: '#0F233E', fontFamily: 'Inter_900Black' }}>S'inscrire</Text>
                <Text style={{ color: '#0F233E' }}>Entrée vos informations, afin de profitez pleinement de <Text style={{ color: '#5CC8BF' }}>GrabGenious</Text></Text>
                <ContainerForm>
                    <Write
                        placeholder='Nom'
                        value={lastname}
                        onChangeText={text => setLastname(text)}
                    />
                    <Write
                        placeholder='Prénom'
                        value={surname}
                        onChangeText={text => setSurname(text)}
                    />
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
                    <Write
                        placeholder='Confirmer votre mot de passe'
                        secureTextEntry={true}
                        value={passwordVerify}
                        onChangeText={text => setPasswordVerify(text)}
                    />
                    <ButtonSend onPress={handleRegister}><Text style={{ color: 'white' }}>S'inscrire</Text></ButtonSend>
                </ContainerForm>
            </Container>
        );
    }

}