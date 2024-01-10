import { Image } from 'expo-image';
import styled from 'styled-components/native';
import LogoIMG from '../../assets/dark_logo.png';

const Container = styled.View`
    width: '100%';
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px 0 0 0;
    `;

const ContainerBorder = styled.View`
    width: 350px;
    height: '100%';
    display: flex;
    align-items: flex-start;
    justify-content: center;
    border-radius: 8px;
    background-color: white;
`;

export default function LogoLow(){
    return(
        <Container>
            <ContainerBorder>
            <Image
                style={{ width: 50, height:50}}
                source={LogoIMG}
                contentFit="cover"
                transition={1000}
            />
            </ContainerBorder>
        </Container>
    );
}