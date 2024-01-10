import { View } from 'react-native';
import styled from 'styled-components/native';
import TitleBrand from './TitleBrand';
import CoinButton from './CoinButton';

const ContainerHeader = styled.View`
    width: 100%;
    margin: 70px 0 0 0;
    padding: 0 20px 0 20px;
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export default function Header(){
    return(
        <ContainerHeader>
            <TitleBrand/>
            <CoinButton/> 
        </ContainerHeader>
    );
}