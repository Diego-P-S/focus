/* eslint-disable react/prop-types */
import React from "react";
import { TimingButton} from "./styles";
import { RoundedButton } from "../components/RoundedButton";

export const Timing = ({ onChangeTime }) => {
  return (
    <>
      <TimingButton>
        <RoundedButton size={50} title="10" onPress={() => onChangeTime(10)} />
      </TimingButton>

      <TimingButton>
        <RoundedButton size={50} title="15" onPress={() => onChangeTime(15)} />
      </TimingButton>
      
      <TimingButton>
        <RoundedButton size={50} title="20" onPress={() => onChangeTime(20)} />
      </TimingButton>
    </>
  );
};


