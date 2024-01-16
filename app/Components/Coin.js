import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import Banner2 from '../assets/app/banner2.png';
import GetRecentlyCoin from './Request/User/GetRecentlyCoin';
import { RewardedAd, RewardedAdEventType, TestIds } from 'react-native-google-mobile-ads';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

const adUnitId = 'ca-app-pub-7212548447499892/7605494409';

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

    useEffect(() => {
        const verifyCoin = async () => {
            const token = await AsyncStorage.getItem('token');
            const response = await GetRecentlyCoin(token);
            const responseCoin = response.last_coin_update;
            

            if (responseCoin === null || (responseCoin && Math.abs(new Date() - new Date(responseCoin)) / (1000 * 60) > 10)) {
                setAuthorization(true);
            }
        };

        verifyCoin();

        const unsubscribeLoaded = rewarded.addAdEventListener(RewardedAdEventType.LOADED, () => {
            setLoaded(true);
        });

        const unsubscribeEarned = rewarded.addAdEventListener(
            RewardedAdEventType.EARNED_REWARD,
            reward => {
                console.log('User earned reward of ', reward);
                AsyncStorage.getItem('coin')
                    .then((currentCoins) => {
                        const updateCoinsInt = parseInt(currentCoins, 10) + reward.amount;
                        return AsyncStorage.setItem('coin', String(updateCoinsInt));
                    })
                    .catch((error) => {
                        console.error('Error updating coins:', error);
                    })

            },
        );

        rewarded.load();

        return () => {
            unsubscribeLoaded();
            unsubscribeEarned();
        };
    }, []);

    const showRewardedAd = () => {
        if (loaded) {
            rewarded.show();
            setShowAd(false);
        } else {
            console.error('Rewarded ad not loaded yet. Please wait for it to load.');
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
                <ButtonAds title="Show Rewarded Ad" onPress={() => setShowAd(true)}>
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
