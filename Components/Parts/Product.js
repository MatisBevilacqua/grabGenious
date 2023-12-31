import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import * as Linking from 'expo-linking';

const Container = styled.View`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px 0 0 0;
    gap: 20px;
`;

const ButtonBuy = styled(TouchableOpacity)`
    width: 350px;
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
            <Image source={{ uri: photo }} style={{ width: 250, height: 250 }} />
            <Text style={{ fontSize: 20 }}>Prix: {price}</Text>
            <Text style={{ fontSize: 20 }}>Marque: {brand_title}</Text>
            <Text style={{ fontSize: 20 }}>Taile: {size}</Text>
            <Text style={{ fontSize: 20 }}>Etat: {status}</Text>
            <Text style={{ fontSize: 20 }}>Publié: {date}</Text>
            <ButtonBuy onPress={() => Linking.openURL(url)}><Text style={{ color: 'white' }}>Acheter</Text></ButtonBuy>
        </Container>
    );
};

export default Product;
