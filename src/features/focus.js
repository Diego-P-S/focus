/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { View } from "react-native";
import { Container, TextTitle,InputContainer,ButtonGo, SubTitle,TextButton,TextInput } from "./styles";

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  console.log(subject);

  return (
    
    <Container>

      <TextTitle >BE FOCUS ON</TextTitle>
      <SubTitle>Vamos Começar?</SubTitle>

      <View style={{flexDirection:"row"}}>
      <InputContainer>
        <TextInput      
          onChangeText={setSubject}
          placeholder="De um nome para a sua pratica."
        />
      </InputContainer>
        </View>
       

        <ButtonGo onPress={() => addSubject(subject)} > {/* setSubtect com o nome da pratica*/}
              <TextButton>Go</TextButton>
        </ButtonGo>
         
       
    </Container>
  )
};

