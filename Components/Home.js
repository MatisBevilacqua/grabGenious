import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, SafeAreaView, ScrollView, } from 'react-native';
import GetCookies from './Request/getCookie';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { Image } from 'expo-image';
import TalkLogo from '../assets/talk_logo.png';

const Container = styled.View`
    width: '100%';
    display: flex;
    padding: 70px 20px 20px 20px;
    flex-direction: column;
    gap: 20px;
`;

const ContainerWrap = styled.View`
    width: '100%';
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
`

const Article = styled.View`
    width: 150px;
    height:150px;
    background-color: white;
    font-size: 12px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
`
const ContainerTalk = styled.View`
    width: 100%;
    height: 100px;
    background-color: white;
    margin: 0 0 40px 0;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default function Home() {

    useEffect(() => {
        GetCookies();
    })

    return (
        <SafeAreaView>
            <ScrollView>
                <Container>

                    <ContainerTalk>
                        <Image
                            style={{ width: 75, height:60, margin: 20, position: 'absolute', left: 0 }}
                            source={TalkLogo}
                            contentFit="cover"
                            transition={1000}
                        />
                        <Text style={{ fontWeight: 'bold', marginLeft:50, marginTop: 10, fontSize: 18 }}>Strong addition,</Text>
                        <Text style={{ fontWeight: 'bold', marginLeft:50 }}>on weekday evenings</Text>
                    </ContainerTalk>

                    <ContainerWrap>
                        <Article>
                            <Text style={{ fontSize: 50 }}>🚀</Text>
                            <Text style={{ fontWeight: 'bold' }}>Fast</Text>
                        </Article>
                        <Article>
                            <Text style={{ fontSize: 50, }}>🔑</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Reliability</Text>
                        </Article>
                    </ContainerWrap>

                    <ContainerWrap>
                        <Article>
                            <Text style={{ fontSize: 50 }}>💥</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Accessibility</Text>
                        </Article>
                        <Article>
                            <Text style={{ fontSize: 50 }}>🥇</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Competitive</Text>
                        </Article>
                        {/* <Container>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Grabfaster</Text>
                    <Text style={{ fontSize: 18 }}>Astuces :</Text>
                    <Text>Les ventes atteignent des sommets particulièrement le dimanche, journée de prédilection des acheteurs sur Vinted, ainsi que les soirs en semaine à partir de 18h</Text>
                </Container> */}
                    </ContainerWrap>
                </Container>
            </ScrollView>
        </SafeAreaView>
    );
}