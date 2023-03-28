/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";



export default function Login(){

const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin(){
      try {
          const jsonValue = await AsyncStorage.getItem('@UserData');
          const userData = jsonValue != null ? JSON.parse(jsonValue) : null;


          
          if (email === userData.email && password === userData.password) {
              alert('Login realizado com sucesso');
              console.log(userData);
              
              navigation.navigate('Home');
          } else {
              alert('Email ou senha incorretos');
          }
      } catch(e) {
          // error reading value
          alert('Erro ao realizar login');
      }
  }
  return (
    <View style={styles.container}>
      <Image resizeMode="contain" style={styles.image} source={require("../../assets/focus.png")} /> 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#003f5c"
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 
      <TouchableOpacity onPress={() => navigation.navigate('CreateUser')}>
        <Text style={styles.forgot_button}>Register</Text> 
      </TouchableOpacity> 
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin} >
        <Text style={styles.loginText}>LOGIN</Text> 
      </TouchableOpacity> 
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 100,
    marginBottom: 40,
  },
  inputView: {
    justifyContent:"center",
    borderColor: "#98d9b6",
    borderWidth:2,
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
   color:"#"
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "70%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#e47b88",
  },
});