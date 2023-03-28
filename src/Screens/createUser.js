import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ButtonForm, TextButton, TextForm, TextInput, UserContainer, ViewForm} from './styles'

export default function CreateUser({navigation}){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    
  

    async function handleCreateUser(){
        if(name && email && password !== '' && password === passwordConfirm){
            try {
                // Guarda os dados com asyncStorage
                const userData = {
                    name,
                    email,
                    password
                }
                await AsyncStorage.setItem('@UserData', JSON.stringify(userData));
                alert('Cadastro criado com sucesso')
                console.log(userData);
                navigation.navigate('Login')
            } catch (error) {
            
                console.log(error);
            }
        }else {
            alert('Ops! algo errado, Tente novamente.')
        }
    }

    return(
        <UserContainer>
            <ViewForm >
                <TextForm placeholder='Nome'
                autoCompleteType='username' autoCapitalize='none'
                placeholderTextColor='#000' autoCorrect={false}
                onChangeText={(event) => setName(event)}
                 />
                <TextForm  placeholder='Email'
                autoCompleteType='email' autoCapitalize='none' autoCorrect={false}
                placeholderTextColor='#000'
                onChangeText={(event) => setEmail(event)}
                 />
                <TextForm placeholder='Senha'
                autoCompleteType='password' autoCapitalize='none'
                placeholderTextColor='#000' autoCorrect={false}
                onChangeText={(event) => setPassword(event)}
                 />
                <TextForm placeholder='Confirmar senha'
                autoCompleteType='password' autoCapitalize='none' autoCorrect={false}
                placeholderTextColor='#000'
                onChangeText={(event) => setPasswordConfirm(event)}
                 />
                <ButtonForm
                onPress={handleCreateUser} >
                    <TextButton >Cadastrar</TextButton>
                </ButtonForm>
            </ViewForm>
        </UserContainer>
    );
}
