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
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    border-radius: 8px;
`;

const ButtonBuy = styled(TouchableOpacity)`
    width: 310px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: green;
    border-radius: 8px;
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
                <Image source={{ uri: photo }} style={{ width: 250, height: 250 }} />
                <Text style={{ fontSize: 20 }}>Prix: {price}</Text>
                <Text style={{ fontSize: 20 }}>Marque: {brand_title}</Text>
                <Text style={{ fontSize: 20 }}>Taile: {size}</Text>
                <Text style={{ fontSize: 20 }}>Etat: {status}</Text>
                <Text style={{ fontSize: 20, textAlign: 'center' }}>Publié: {date}</Text>
                <ButtonBuy onPress={() => Linking.openURL(url)}><Text style={{ color: 'white' }}>Acheter</Text></ButtonBuy>
            </ContainerItem>
        </Container>
    );
};

export default Product;
