import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import * as Linking from 'expo-linking';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';


const Container = styled.View`
    width: 100%;
    height: auto;
    display: flex;
`;

const Group = styled.View`
    width: 95%;
    border-radius: 12px;
    height: 50px;
    display: flex;
    justify-content: center;
    padding: 0 0 0 10px;
    border: solid 3px  #ECF0F0;
`

const ContainerItem = styled.View`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    /* border-radius: 12px;
    background-color: #557C98;
    border: solid 2px #0F233E; */
`;

const ButtonBuy = styled(TouchableOpacity)`
    width: 95%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    background-color: #0F233E;
`;

const Product = ({ route, navigation }) => {
    const { productDetails, productTitle } = route.params;

    const { price, brand_title, url, size, status, photo, date } = productDetails;

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: productTitle,
        });
    }, [navigation, productTitle]);

    let [fontsLoaded] = useFonts({
        Inter_900Black,
    });

    if(!fontsLoaded) {
        console.log('Non charger');
    }else{
        return (
            <SafeAreaView>
                <ScrollView>

                    <Container>
                        <Image source={{ uri: photo }} style={{ width: '100%', height: 450, marginBottom: 10 }} />
                        <ContainerItem>
                            <Group>
                                <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#0F233E', fontFamily: 'Inter_900Black' }}>{price}</Text>
                            </Group>

                            <Group>
                                <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#0F233E', fontFamily: 'Inter_900Black' }}>{brand_title}</Text>
                            </Group>

                            <Group>
                                <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#0F233E', fontFamily: 'Inter_900Black' }}>{size}</Text>
                            </Group>

                            <Group>
                                <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#0F233E', fontFamily: 'Inter_900Black' }}>{status}</Text>
                            </Group>

                            <Group>
                                <Text  style={{ fontWeight: 'bold', fontSize: 20, color: '#0F233E', fontFamily: 'Inter_900Black' }}>{date}</Text>
                            </Group>

                            <ButtonBuy onPress={() => Linking.openURL(url)}><Text style={{ color: 'white' }}>Acheter</Text></ButtonBuy>
                        </ContainerItem>
                    </Container>
                </ScrollView>
            </SafeAreaView>
        );
    }

};

export default Product;
