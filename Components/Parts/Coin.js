import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { Image } from 'expo-image';
import CoinImg from '../../assets/app/coin.png';



const ContainerCoin = styled.View`
    width: 70px;
    border-radius: 20px;
    background-color: #557C98;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 15px;
    padding: 5px 5px 5px 10px;
`;

export default function Coin() {

    const [numberCoin, setNumberCoin] = useState(3);

    return (
        <ContainerCoin>
            <Text style={{ color: 'white', fontSize: 20 }}>{numberCoin}</Text>
            <Image
                style={{ width: 30, height: 30 }}
                source={CoinImg}
                contentFit="cover"
                transition={1000}
            />
        </ContainerCoin>
    );
}