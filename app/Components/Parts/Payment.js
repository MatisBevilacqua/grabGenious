import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Text, TouchableOpacity, TextInput, Image, SafeAreaView, ScrollView } from 'react-native';
import FlipCard from 'react-native-flip-card';
import creditCardType from 'credit-card-type';
import Gradient from '../../assets/app/gradientCard.png';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import Visa from '../../assets/app/card/visa.png';
import { CameraKitCameraScreen } from 'react-native-camera-kit';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const Container = styled.View`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ContainerWrite = styled.View`
    padding: 50px 0 0 0;
`

const ContainerOr = styled.View`
    width: 350px;
    height: 20px;
    margin: 50px 0 0 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const ContainerOrPart = styled.View`
    width: 43%;
    height: 20%;
    background-color: #0F233E;
    border-radius:12px;
`

const ContainerCard = styled.View`
    width: 350px;
    height: 200px;
    margin: 50px 0 0 0;
    border-radius: 12px;
`

const Write = styled(TextInput)`
    width:350px;
    height: 50px;
    border-radius: 12px;
    background-color: #ECF0F0;
    margin: 10px 0 0 0;
    padding: 0 0 0 20px;
`;

const WriteRegroup = styled(TextInput)`
    width:40%;
    height: 100%;
    border-radius: 12px;
    background-color: #ECF0F0;
    margin: 20px 0 0 0;
    padding: 0 0 0 20px;
`

const ContainerWriteCard = styled.View`
    position: absolute;
    z-index: 2;
    display: flex;
    flex-direction: column;
    width: 100%;
`
const ContainerWriteRegroup = styled.View`
    width:350px;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;


const ContainerWriteCardPart = styled.View`
    width: 100%;
    height: 66px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    padding: 0 0 0 20px;
`;

const ContainerCvv = styled.View`
    width: 90%;
    height: 60%;
    display: flex;
    padding: 0 10px 0 0;
    align-items: flex-end;
    justify-content: center;
    background-color: #ECF0F0;
`;

const ContainerBarTop = styled.View`
    width: 350px;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    height: 100%;
    position: absolute;
    background: #0F233E;
`

const ButtonSendPaiment = styled(TouchableOpacity)`
    width: 350px;
    height: 50px;
    border-radius: 12px;
    margin:50px 0 0 0;
    background-color:#0F233E;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Payment = ({ route, navigation }) => {

    const { price, quantity } = route.params;

    console.log(price);

    const [isFlipped, setIsFlipped] = useState(false);
    const [cardNumber, setCardNumber] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [lastnameSurname, setLastnameSurname] = useState('');


    let [fontsLoaded] = useFonts({
        Inter_900Black,
    });

    if(!fontsLoaded){
        console.log('Font non loaded');
    }else{
        return (
            <SafeAreaView style={{ paddingBottom:50 }}>

                <ScrollView>
                <KeyboardAwareScrollView>
                        <Container>
                            <Text style={{ alignSelf: 'flex-start', marginLeft:20, marginTop: 20, fontWeight: 'bold', fontSize:30, color:'#0F233E', fontFamily: 'Inter_900Black'}}>Paiement</Text>
                            <Text style={{ fontWeight: 'bold', fontSize:15, color:'#0F233E', fontFamily: 'Inter_700', alignSelf: 'flex-start', marginLeft:20 }}>{price}€, {quantity} pièces</Text>
                            <ButtonSendPaiment><Text style={{ fontWeight: 'bold', fontSize:15, color:'#FFFF', fontFamily: 'Inter_700'}}>Scannez votre carte</Text></ButtonSendPaiment>
                            <ContainerOr>
                                <ContainerOrPart></ContainerOrPart>
                                <Text style={{fontSize:13, color:'#0F233E', fontWeight:'bold', marginRight:15, marginLeft:15, fontFamily: 'Inter_900'  }}>OU</Text>
                                <ContainerOrPart></ContainerOrPart>
                            </ContainerOr>
                            <FlipCard
                                friction={6}
                                perspective={1000}
                                flipHorizontal={true}
                                flipVertical={false}
                                flip={isFlipped}
                                clickable={false}
                                onFlipEnd={(isFlipEnd) => { console.log('isFlipEnd', isFlipEnd) }}
                            >
                                <ContainerCard>
                                    <Image source={Gradient} style={{ width: 350, height: 200, borderRadius: 12 }} />
                                    <ContainerWriteCard>
                                        <ContainerWriteCardPart>
                                            <Image source={Visa} style={{ width:80, height:80 }} />
                                        </ContainerWriteCardPart>
                
                                        <ContainerWriteCardPart>
                                            <Text style={{ alignSelf: 'flex-start', marginLeft: 10,fontWeight: 'bold', fontSize:20, color:'#0F233E', fontFamily: 'Inter_900Black'}}>{cardNumber}</Text>
                                        </ContainerWriteCardPart>
                
                                        <ContainerWriteCardPart>
                                            <Text style={{ alignSelf: 'flex-start', fontWeight: 'bold', marginLeft: 10, fontSize:15, color:'#0F233E', fontFamily: 'Inter_700'}}>{lastnameSurname}</Text>
                                            <Text style={{ alignSelf: 'flex-start',fontWeight: 'bold', marginLeft: 10, fontSize:15, color:'#0F233E', fontFamily: 'Inter_700'}}>{expirationDate}</Text>
                                        </ContainerWriteCardPart>
                                    </ContainerWriteCard>
                                </ContainerCard>
                                <ContainerCard>
                                    <Image source={Gradient} style={{ width: 350, height: 200, borderRadius: 12 }} />
                                    <ContainerWriteCard>
                                        <ContainerWriteCardPart>
                                            <ContainerBarTop></ContainerBarTop>
                                        </ContainerWriteCardPart>
                                        <ContainerWriteCardPart>
                                            <ContainerCvv>
                                                <Text  style={{ fontWeight: 'bold', marginLeft: 10, fontSize:15, color:'#0F233E', fontFamily: 'Inter_700'}}>{cvv}</Text>
                                            </ContainerCvv>
                                        </ContainerWriteCardPart>
                                        <ContainerWriteCardPart>
                
                                        </ContainerWriteCardPart>
                                    </ContainerWriteCard>
                                </ContainerCard>
                            </FlipCard>
                
                            <ContainerWrite>
                                <Write
                                    placeholder='1234 5403 1023 1230'
                                    keyboardType='numeric'
                                    maxLength={19}
                                    value={cardNumber}
                                    onFocus={() => { setIsFlipped(false) }}
                                    onChangeText={(text) => {
                                        const numericValue = text.replace(/\D/g, '');
                
                                        if (numericValue.length >= 4) {
                                            const prefix = numericValue.slice(0, 4);
                                            const prefixStr = prefix.toString().padStart(4, '0');
                                            const typeCards = creditCardType(prefixStr);
                
                                            if (typeCards && typeCards.length > 0 && typeCards[0].type) {
                                                console.log(typeCards[0].type);
                                            } else {
                                                console.log('Type de carte non reconnu');
                                            }
                                        }
                
                                        const formattedValue = numericValue.replace(/(\d{4})(?=\d)/g, '$1 ');
                                        setCardNumber(formattedValue);
                                    }} />
                
                                <Write
                                    placeholder='Nom Prénom'
                                    onFocus={() => { setIsFlipped(false) }}
                                    onChangeText={(text) => { setLastnameSurname((text)) }}
                                />
                
                                <ContainerWriteRegroup>
                                    <WriteRegroup
                                        placeholder='MM/AA'
                                        keyboardType='numeric'
                                        maxLength={5}
                                        value={expirationDate}
                                        onFocus={() => { setIsFlipped(false) }}
                                        onChangeText={(text) => {
                                            const numericValue = text.replace(/\D/g, '');
                                            const formattedValue = numericValue.replace(/(\d{2})(\d{0,4})/, '$1/$2');
                                            setExpirationDate(formattedValue);
                                        }} />
                
                                    <WriteRegroup
                                        placeholder='554'
                                        onFocus={() => { setIsFlipped(true) }}
                                        onChangeText={(text) => {
                                            setCvv(text);
                                        }} />
                                </ContainerWriteRegroup>
                                <ButtonSendPaiment><Text style={{ fontWeight: 'bold', fontSize:15, color:'#FFFF', fontFamily: 'Inter_700'}}>Payer</Text></ButtonSendPaiment>
                            </ContainerWrite>
                        </Container>
                </KeyboardAwareScrollView>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default Payment;