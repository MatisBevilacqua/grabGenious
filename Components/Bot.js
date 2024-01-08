import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';
import GetRecentProducts from './Request/getRecentProduct';
import SelectDropdown from 'react-native-select-dropdown'
import styled from 'styled-components/native';
import Header from './Parts/Header';


const ContainerFilter = styled.View`
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 130px;
`;

const InputPrice = styled(TextInput).attrs({
    placeholderTextColor: 'white'
})`
    width: 100px;
    padding: 10px;
    height: 50px;
    background-color: #0F233E;
    border-radius:12px;
    color: white;
`

const ArticleContainer = styled.View`
    border: 3px solid black;
    display: flex;
    flex-direction: row;
    height: 200px;
    margin: 20px 0 0 0;
    border-radius: 12px;
`

const Bar = styled.View`
    width: 2px;
    height: 100%;
    transform: translate(-0.5px);
    background-color: #0F233E;
`;

const ArticleContainerParts = styled.View`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #557C98;
    border-top-left-radius:8px;
    border-bottom-left-radius:8px;
    gap: 10px;
`;


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
        'Bellow',
        'Burberry',
        'Bvlgari',
        'Calvin Klein',
        'Carhartt',
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
        'Polar',
        'Prada',
        'Puma',
        'Ralph Lauren',
        'Ray-Ban',
        'Reebok',
        'Salomon',
        'Saucony',
        'Skechers',
        'Supreme',
        'Stussy',
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
                    <ArticleContainer>
                        <ArticleContainerParts>
                            <Text style={styles.articleTitle}>{item.title}</Text>
                            <Text style={styles.articleTitle}>{item.details.price}</Text>
                            <Text style={styles.articleDetails}>{item.details.brand_title}</Text>
                        </ArticleContainerParts>
                        <Bar/>
                        <Image source={{ uri: item.details.photo }} style={{ width:'50%', height:'100%', borderTopRightRadius:8, borderBottomRightRadius:8 }} />
                    </ArticleContainer>
                </TouchableOpacity>
            </>
        );
    };

    return (
        <View style={styles.container}>
            <Header></Header>
            <ContainerFilter>
                <SelectDropdown
                    buttonStyle={{ backgroundColor: '#0F233E', borderRadius: 12 }}
                    buttonTextStyle={{ color: 'white' }}
                    defaultButtonText='Nike'
                    data={knownBrands}
                    onSelect={(selectedItem, index) => {
                        handleBrandChange(selectedItem);
                    }}
                    search={true}
                    searchPlaceHolder='Nike..'
                    rowTextStyle={{ color: 'white' }}
                    rowStyle={{ backgroundColor: '#0F233E', borderBottomColor: '#0F233E' }}
                    dropdownStyle={{ backgroundColor: '#0F233E' }}
                />

                <InputPrice onChangeText={(text) => setPrice(text)} keyboardType='numeric' placeholder='Prix max'></InputPrice>

            </ContainerFilter>

            {showFlatList && (
                <FlatList
                    style={{ paddingLeft: 20, paddingRight: 20 }}
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
        borderWidth: 5,
        borderColor: '#EFEFEF',
        borderRadius: 5,
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        gap: 12
    },
    articleTitle: {
        fontSize: 18,
        color:'white',
        fontWeight: 'bold',
        textAlign:'center'
    },
    articleDetails: {
        color:'white',
        fontStyle: 'italic',
    },
    articleImage: {
        width: 200,
        height: 200,
        color:'white',
        resizeMode: 'cover',
        borderRadius: 5,
        marginTop: 5,
    },
});
