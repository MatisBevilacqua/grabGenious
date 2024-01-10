import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import Banner2 from '../assets/app/banner2.png'
import Payment from './Parts/Payment';

const Container = styled.View`
    padding: 20px 20px 0 20px;
`;

const ButtonAds = styled(TouchableOpacity)`
    width: 100%;
    height: 200px;
    border-radius:12px;
    margin: 0 0 30px 0;
`;

const ButtonAdsBanner = styled.View`
    width: 100%;
    height: 45px;
    padding: 10px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    background-color: #557C98;
    display: flex;
    justify-content: center;
    margin: 0 0 30px 0;
`;

const ButtonBuyContainer = styled.View`
    width: 100%;
    height: 100px;
    margin: 20px 0 0 0;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`;

const ButtonBuy = styled(TouchableOpacity)`
    width:30%;
    border-radius: 12px;
    height: 100%;
    background-color: aquamarine;
`

export default function Coin() {

    const navigation = useNavigation();

    return (
        <Container>
            <Text style={{ fontWeight: 'bold', fontSize: 30, color: '#0F233E', fontFamily: 'Inter_900Black', paddingBottom: 30 }}>Obtenir des <Text style={{ color: '#5CC8BF' }}>jetons</Text></Text>
            <ButtonAds>
                <Image
                    style={{ width: '100%', height: '80%', borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
                    source={Banner2}
                    contentFit="cover"
                    transition={1000}
                />
                <ButtonAdsBanner>
                    <Text style={{ color: 'white', fontSize: 18 }}>Obtenir 3 coins</Text>
                </ButtonAdsBanner>
            </ButtonAds>

            <ButtonBuyContainer>
                <ButtonBuy onPress={() => { navi }}></ButtonBuy>
                <ButtonBuy></ButtonBuy>
                <ButtonBuy></ButtonBuy>
            </ButtonBuyContainer>

            <ButtonBuyContainer>
                <ButtonBuy></ButtonBuy>
                <ButtonBuy></ButtonBuy>
                <ButtonBuy></ButtonBuy>
            </ButtonBuyContainer>

        </Container>
    );
}