/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { RoundedButton } from "../components/RoundedButton";
import { spacing } from "../utils/sizes";
import { TextInput } from 'react-native-paper';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  console.log(subject);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>BE FOCUS ON</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setSubject}
          label="Let`s Start? Give a name to your focus..."
        />
        <View style={styles.button}>
          <RoundedButton
            title="+"
            size={50}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    
  },

  button: {
    justifyContent: "center",
  },

  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },

  text: {
    marginLeft: 10,
    marginTop: 10,
  },

  inputContainer: {
    flexDirection: "row",
    padding: spacing.lg,
    justifyContent: "center",
  },
});
