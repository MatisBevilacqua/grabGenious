import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import Banner2 from '../assets/app/banner2.png';
import GetRecentlyCoin from './Request/User/GetRecentlyCoin';
import { RewardedAd, RewardedAdEventType, TestIds } from 'react-native-google-mobile-ads';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UpdateCoin from './Request/User/UpdateCoin';

const adUnitId = TestIds.REWARDED;

const rewarded = RewardedAd.createForAdRequest(adUnitId, {
    keywords: ['fashion', 'clothing'],
});

const Container = styled.View`
    padding: 20px 20px 0 20px;
`;

const ButtonAds = styled(TouchableOpacity)`
    width: 100%;
    height: 200px;
    border-radius: 12px;
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
    width: 30%;
    border-radius: 12px;
    height: 100%;
    background-color: aquamarine;
`;

export default function Coin() {
    const navigation = useNavigation();
    const [loaded, setLoaded] = useState(false);
    const [authorization, setAuthorization] = useState(false);
    const [showAd, setShowAd] = useState(false);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const storedToken = await AsyncStorage.getItem('token');
            setToken(storedToken);

            const response = await GetRecentlyCoin(storedToken);
            const responseCoin = response.last_coin_update;

            if (responseCoin === null || (responseCoin && Math.abs(new Date() - new Date(responseCoin)) / (1000 * 60) > 10)) {
                setAuthorization(true);
            }
        };

        fetchData();

        const unsubscribeLoaded = rewarded.addAdEventListener(RewardedAdEventType.LOADED, () => {
            setLoaded(true);
        });

        const unsubscribeEarned = rewarded.addAdEventListener(
            RewardedAdEventType.EARNED_REWARD,
            async (reward) => { 
                console.log('L\'utilisateur a gagné une récompense de ', reward);
                try {
                    const currentCoins = await AsyncStorage.getItem('coin');
                    const updateCoinsInt = parseInt(currentCoins, 10) + reward.amount;
                    await UpdateCoin(token);    
                    await AsyncStorage.setItem('coin', String(updateCoinsInt));
                } catch (error) {
                    console.error('Erreur lors de la mise à jour des jetons :', error);
                }
            },
        );

        rewarded.load();

        return () => {
            unsubscribeLoaded();
            unsubscribeEarned();
        };
    }, [token]);

    const showRewardedAd = () => {
        if (loaded) {
            console.log('lol');
            rewarded.show();
            setShowAd(false);
        } else {
            console.error('La publicité récompensée n\'est pas encore chargée. Veuillez attendre qu\'elle se charge.');
        }
    };

    useEffect(() => {
        if (loaded && authorization && showAd) {
            showRewardedAd();
        }
    }, [loaded, authorization, showAd]);

    return (
        <Container>
            <Text style={{ fontWeight: 'bold', fontSize: 30, color: '#0F233E', fontFamily: 'Inter_900Black', paddingBottom: 30 }}>
                Obtenir des <Text style={{ color: '#5CC8BF' }}>jetons</Text>
            </Text>
            {authorization && (
                <ButtonAds title="Afficher la publicité récompensée" onPress={() => setShowAd(true)}>
                    <Image
                        style={{ width: '100%', height: '80%', borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
                        source={Banner2}
                        contentFit="cover"
                        transition={1000}
                    />
                    <ButtonAdsBanner>
                        <Text style={{ color: 'white', fontSize: 18 }}>Obtenir 3 jetons</Text>
                    </ButtonAdsBanner>
                </ButtonAds>
            )}
            <ButtonBuyContainer>
                <ButtonBuy
                    onPress={() => {
                        navigation.navigate('Payment', { price: 4.99, quantity: 30 });
                    }}
                />
                <ButtonBuy
                    onPress={() => {
                        navigation.navigate('Payment', { price: 9.99, quantity: 75 });
                    }}
                />
                <ButtonBuy
                    onPress={() => {
                        navigation.navigate('Payment', { price: 13.99, quantity: 90 });
                    }}
                />
            </ButtonBuyContainer>
        </Container>
    );
}
