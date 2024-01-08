import { Text } from 'react-native';
import styled from 'styled-components/native';

const ContainerTitleBrand = styled.View`
    display: flex;
    flex-direction: row;
`;

export default function TitleBrand(){
    return(
        <ContainerTitleBrand>
            <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#5CC8BF' }}>Grab</Text><Text style={{ fontSize: 30, fontWeight: 'bold', color: '#0F233E' }}>Genious</Text>
        </ContainerTitleBrand>
    );
}