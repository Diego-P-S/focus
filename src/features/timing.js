/* eslint-disable react/prop-types */
import React from "react";
import { View } from "react-native";
   
import { TimingButton} from "./styles";
import { RoundedButton } from "../components/RoundedButton";

export const Timing = ({ onChangeTime }) => {
  return (
    <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
      <TimingButton>
        <RoundedButton size={60} title="10" onPress={() => onChangeTime(10)} />
      </TimingButton>

      <TimingButton style={{marginHorizontal:20}}>
        <RoundedButton size={60} title="15" onPress={() => onChangeTime(15)} />
      </TimingButton>
      
      <TimingButton>
        <RoundedButton size={60} title="20" onPress={() => onChangeTime(20)} />
      </TimingButton>
      </View>
  );
};


