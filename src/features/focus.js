/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { TextInput, View,Button } from "react-native";
import { Container, TextTitle,InputContainer,ButtonView, SubTitle} from "./styles";

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  console.log(subject);

  return (
    
    <Container>

      <TextTitle >BE FOCUS ON</TextTitle>
      <SubTitle>Let`s start?</SubTitle>

      <View style={{flexDirection:"row"}}>
      <InputContainer>
        <TextInput      
          onChangeText={setSubject}
          placeholder="De um nome para a sua pratica."
        />
      </InputContainer>
        </View>
        <ButtonView >
          <Button
            title="Go"
            onPress={() => addSubject(subject)}
          />
        </ButtonView>
    </Container>
  );
};

