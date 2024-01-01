import { Image } from 'expo-image';
import styled from 'styled-components/native';
import LogoIMG from '../../assets/dark_logo.png';

const Container = styled.View`
    width: '100%';
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 100px 0 0 0;
    `;

const ContainerBorder = styled.View`
    width: 350px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    border:1px solid #EFEFEF;
    border-radius: 8px;
    background-color: white;
`;

export default function LogoBig(){
    return(
        <Container>
            <ContainerBorder>
            <Image
                style={{ width: 80, height:80}}
                source={LogoIMG}
                contentFit="cover"
                transition={1000}
            />
            </ContainerBorder>
        </Container>
    );
}