import { StyleSheet } from 'react-native';
import styled from "styled-components/native";

export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#98d9b6',
    },
    form: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputUserName: {
        backgroundColor: '#FFF',
        width: 250,
        height: 35,
        borderRadius: 5,
        padding: 5,        
    },
    inputForm: {
        backgroundColor: '#FFF',
        marginTop: 13,
        width: 250,
        height: 35,
        borderRadius: 5,
        padding: 5,
    },
    buttonForm: {
        backgroundColor: '#00229A',
        width: 100,
        height: 30,
        borderRadius: 5,
        marginTop: 13,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton: {
        color: '#FFF',
        fontWeight: 'bold',
    },
})



export const Container = styled.View`
flex: 1;
background-color: #fff;
align-items: center;
justify-content: center;
`;

export const Image = styled.Image`
width: 100%;
max-height:100px;
margin-bottom: 40px;
`;

export const InputView = styled.TextInput`
justify-content: center;
border-color: #98d9b6;
border-width:2px;
border-radius: 30px;
width: 70%;
height: 45px;
 margin-bottom: 20px;
align-items: center;
text-align: center;
`;

export const ForgotButton = styled.Text`
height: 30px;
margin-bottom: 30px;
`;
 
export const LoginBtn = styled.TouchableOpacity`
width: 70%;
border-radius: 25px;
height: 50px;
align-items: center;
justify-content: center;
margin-top: 40px;
background-color: #e47b88;

`;