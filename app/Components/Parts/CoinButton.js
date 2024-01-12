import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Image } from 'expo-image';
import CoinImg from '../../assets/app/coin.png';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ContainerCoin = styled(TouchableOpacity)`
    width: 85px;
    border-radius: 20px;
    background-color: #557C98;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 15px;
    padding: 5px 10px 5px 10px;
`;

export default function CoinButton() {
    const [localNumberCoin, setLocalNumberCoin] = useState();
    const navigation = useNavigation();

    const updateCoins = async () => {
        const getUpdateCoins = await AsyncStorage.getItem('coin');
        setLocalNumberCoin(getUpdateCoins);
    };

    useEffect(() => {
        updateCoins();
        const intervalId = setInterval(updateCoins, 5000); 
        return () => clearInterval(intervalId);
    }, []);

    return (
        <ContainerCoin onPress={() => { navigation.navigate('Coin') }}>
            <Text style={{ color: 'white', fontSize: 20 }}>{localNumberCoin}</Text>
            <Image
                style={{ width: 30, height: 30 }}
                source={CoinImg}
                contentFit="cover"
                transition={1000}
            />
        </ContainerCoin>
    );
}
