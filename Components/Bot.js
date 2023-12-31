import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';
import GetRecentProducts from './Request/getRecentProduct';
import SelectDropdown from 'react-native-select-dropdown'
import styled from 'styled-components/native';

const ContainerFilter = styled.View`
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const InputPrice = styled(TextInput)`
    width: 100px;
    padding: 10px;
    height: 50px;
    background-color: #EFEFEF;
`

export default function Bot({ navigation }) {
    const [articles, setArticles] = useState([]);
    const [selectBrand, setSelectBrand] = useState('Nike');
    const [showFlatList, setShowFlatList] = useState(true); 
    const knownBrands = [
        'Adidas', 
        'Arc\'teryx', 
        'Armani', 
        'ASICS', 
        'Balenciaga', 
        'Burberry', 
        'Bvlgari', 
        'Calvin Klein', 
        'Caterpillar', 
        'Chanel', 
        'Coach', 
        'Columbia', 
        'Converse', 
        'Crocs', 
        'Diesel', 
        'Dior', 
        'Dr. Martens', 
        'Fendi', 
        'Fila', 
        'Fossil', 
        'Gucci', 
        'Guess', 
        'H&M', 
        'Hugo Boss', 
        'Kate Spade', 
        'Lacoste', 
        'Levi\'s', 
        'Louis Vuitton', 
        'Lululemon', 
        'Michael Kors', 
        'Merrell', 
        'New Balance', 
        'Nike', 
        'Oakley', 
        'Patagonia', 
        'Prada', 
        'Puma', 
        'Ralph Lauren', 
        'Ray-Ban', 
        'Reebok', 
        'Salomon', 
        'Saucony', 
        'Skechers', 
        'Supreme', 
        'Tiffany & Co.', 
        'Timberland', 
        'Tommy Hilfiger', 
        'The North Face', 
        'Tory Burch', 
        'UGG', 
        'Under Armour', 
        'Vans', 
        'Versace', 
        'Yves Saint Laurent', 
        'Zara'
    ];
    
    const [price, setPrice] = useState(1000);

    useEffect(() => {
        const intervalId = setInterval(() => {
            GetRecentProducts(selectBrand, price)
                .then(productInfo => {
                    console.log(selectBrand);
                    if (!articles.find(article => article.title === productInfo.title)) {
                        setArticles(prevArticles => [productInfo, ...prevArticles]);
                        setShowFlatList(true); 
                    } else {
                        console.log('Doublons retirer');
                    }
                })
                .catch(error => {
                    console.error('Erreur :', error);
                });
        }, 5000);

        return () => clearInterval(intervalId);
    }, [articles]);

    const handleBrandChange = (selectedItem) => {
        setSelectBrand(selectedItem);
        setArticles([]); 
        setShowFlatList(false); 
    };

    const navigateToProduct = (item) => {
        navigation.navigate('Product', { productDetails: item.details, productTitle: item.title });
    };

    const renderArticle = ({ item }) => {
        return (
            <>
                <TouchableOpacity onPress={() => navigateToProduct(item)}>
                    <View style={styles.articleContainer}>
                        <Text style={styles.articleTitle}>{item.title}</Text>
                        <Text style={styles.articleTitle}>{item.details.price}</Text>
                        <Text style={styles.articleDetails}>{item.details.brand_title}</Text>
                        <Image source={{ uri: item.details.photo }} style={styles.articleImage} />
                    </View>
                </TouchableOpacity>
            </>
        );
    };

    return (
        <View style={styles.container}>
            <ContainerFilter>    
                <SelectDropdown
                    data={knownBrands}
                    onSelect={(selectedItem, index) => {
                        handleBrandChange(selectedItem); 
                    }}
                />

                <InputPrice onChangeText={(text) => setPrice(text)} keyboardType='numeric' placeholder='Prix max'></InputPrice>

            </ContainerFilter>

            {showFlatList && ( 
                <FlatList
                    data={articles}
                    renderItem={renderArticle}
                    keyExtractor={(item, index) => index.toString()}
                />
            )}

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    articleContainer: {
        marginVertical: 10,
        marginHorizontal: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    articleTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    articleDetails: {
        fontStyle: 'italic',
    },
    articleImage: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
        borderRadius: 5,
        marginTop: 5,
    },
});
