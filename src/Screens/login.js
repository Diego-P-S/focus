/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {Text,
  TouchableOpacity
} from "react-native";
import { Container, InputView, Image, ForgotButton, LoginBtn} from './styles';

export default function Login(){

const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 

  async function handleLogin(){
    
    try {
      const jsonValue = await AsyncStorage.getItem('@UserData');
      const userData = jsonValue != null ? JSON.parse(jsonValue) : null;

      // Testa se o valor dijitado corresponde ao objeto guardado no @UserData
      if (email === userData.email && password === userData.password) {
        alert('Login realizado com sucesso');
        navigation.navigate('Home');
      } else {
        alert('Email ou senha incorretos');
      }
    } catch(e) {
      alert('Erro ao realizar login, Tente novamente');
    }
    
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: email, // use the email state value as the username
          password: password // use the password state value as the password
        })
      });
  
      const data = await response.json();
  
      // Check if the response indicates successful login
      if (response.ok) {
        alert('Login successful');
        navigation.navigate('Home');
      } else {
        // Handle authentication error
        alert('Email or password is incorrect');
      }
    } catch (error) {
      // Handle network or other errors
      alert('Error occurred while logging in. Please try again.');
    }
  }


  return (
    
    <Container>
      <Image resizeMode="contain"  source={require("../../assets/focus.png")} /> 
      <StatusBar style="auto" />

      <InputView 
         placeholder="Email"
         placeholderTextColor="#003f5c"
         onChangeText={(email) => setEmail(email)}
      /> 
    
      <InputView
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#003f5c"
          onChangeText={(password) => setPassword(password)}
      /> 

      <TouchableOpacity onPress={() => navigation.navigate('CreateUser')}>
        <ForgotButton>Register</ForgotButton> 
      </TouchableOpacity> 

{/* onPress valida a funcao handleLogin. caso positivo direciona para a tela home. */}

      <LoginBtn onPress={handleLogin} >
        <Text>LOGIN</Text> 
      </LoginBtn> 
    </Container> 
  );
}

