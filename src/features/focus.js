/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { RoundedButton } from "../components/RoundedButton";
import { TextInput } from 'react-native-paper';
import { Container, TextTitle,InputContainer,ButtonView} from "./styles";

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  console.log(subject);

  return (
    <Container>

      <TextTitle >BE FOCUS ON</TextTitle>

      <InputContainer>

        <TextInput contentStyle={{backgroundColor:"#fff"}}         
          onChangeText={setSubject}
          label="Let`s Start? Give a name to your focus..."
        />
        <ButtonView >
          <RoundedButton
            title="+"
            size={50}
            onPress={() => addSubject(subject)}
          />
        </ButtonView>
      </InputContainer>
    </Container>
  );
};

