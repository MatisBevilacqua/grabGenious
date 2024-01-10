import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, SafeAreaView, ScrollView, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { useNavigation } from '@react-navigation/native';
import GetCookies from './Request/getCookie';
import { Image } from 'expo-image';
import Banner1 from '../assets/app/banner1.png';
import styled from 'styled-components/native';
import Header from './Parts/Header';

const Container = styled.View`
    width: '100%';
    display: flex;
    margin: 50px 0 0 0;
    padding: 50px 20px 0 20px;
    flex-direction: column;
    gap: 30px;
`;

const ContainerNews = styled.View`
    width: 100%;
    height: 330px;
    margin: 0 0 10px 0;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
`

const PartsContainerNews = styled.View`
    width: 100%;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    display: flex;
    justify-content: center;
    background-color: #557C98;
    padding: 10px;
`;


export default function Home() {

    const navigation = useNavigation();

    const [surname, setSurname] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            GetCookies();

            const token = await AsyncStorage.getItem('token');
            const surname = await AsyncStorage.getItem('surname');
            setSurname(surname);
            console.log(token);
            console.log(surname);
            console.log('Token from AsyncStorage:', token);

            if (token == null) {
                navigation.navigate('Welcome');
            }
        };

        fetchData();
    }, []);

    let [fontsLoaded] = useFonts({
        Inter_900Black,
    });

    if (!fontsLoaded) {
        console.log('Matis');
    } else {
        return (
            <>
                <Header></Header>
                <SafeAreaView>
                    <ScrollView style={{ paddingBottom: 20 }}>
                        <Container>
                            <Text style={{ fontWeight: 'bold', fontSize: 50, color: '#0F233E', fontFamily: 'Inter_900Black', marginTop: 50 }}>Bienvenue, {surname}</Text>
                            <ContainerNews>
                                <Image
                                    style={{ width: '100%', height: '80%', borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
                                    source={Banner1}
                                    contentFit="cover"
                                    transition={1000}
                                />
                                <PartsContainerNews>
                                    <Text style={{ fontSize: 18, color: 'white' }}>Obtenez 3 jetons par heure, en regardant une publicité.</Text>
                                </PartsContainerNews>

                            </ContainerNews>
                        </Container>
                    </ScrollView>
                </SafeAreaView>
            </>
        );
    }

}