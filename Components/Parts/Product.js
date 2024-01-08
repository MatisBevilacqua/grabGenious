import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import * as Linking from 'expo-linking';

const Container = styled.View`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px 0 0 0;
    gap: 20px;
`;

const ContainerItem = styled.View`
    padding: 50px;
    width: 90%;
    height: 95%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    border-radius: 12px;
    background-color: #557C98;
    border: solid 2px #0F233E;
    padding: 10px 0 0 10px;
`;

const ButtonBuy = styled(TouchableOpacity)`
    width: 310px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: green;
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

    return (
        <Container>
            <ContainerItem>
                <Image source={{ uri: photo }} style={{ width: 250, height: 250, borderRadius:12 }} />
                <Text style={{ fontSize: 20, color: 'white' }}>Prix: {price}</Text>
                <Text style={{ fontSize: 20, color: 'white' }}>Marque: {brand_title}</Text>
                <Text style={{ fontSize: 20, color: 'white' }}>Taile: {size}</Text>
                <Text style={{ fontSize: 20, color: 'white' }}>Etat: {status}</Text>
                <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }}>Publié: {date}</Text>
                <ButtonBuy onPress={() => Linking.openURL(url)}><Text style={{ color: 'white' }}>Acheter</Text></ButtonBuy>
            </ContainerItem>
        </Container>
    );
};

export default Product;
