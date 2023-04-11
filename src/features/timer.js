/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Vibration } from "react-native";
import { Countdown } from "../components/CountDown";
import { RoundedButton } from "../components/RoundedButton";
import { Timing } from "./timing";
import { useKeepAwake } from "expo-keep-awake";
import { ProgressBar } from 'react-native-paper';
import {ViewProgressBar, TimerContainer, ViewCountdown, SubText, ViewFocus,ClearSubjectWrapper,TimingWrapper,ButtonWrapper} from "./styles";

//1 segundo em milesegundos

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

const Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false); //está em execução ou não
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1); // duracao em minutos

  // quando terminado, aplica a funcao reset timer
  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN); // ao termino vibra o celular
    setIsStarted(false); 
    setProgress(1);
    reset(); // reset para o timer inicial
    if(onTimerEnd && focusSubject) onTimerEnd(focusSubject);
  };

  return (
    <TimerContainer>
      <ViewCountdown>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={onEnd}
        />

        <ViewFocus>
          <SubText>Prática:</SubText>
          <SubText >{focusSubject}</SubText> {/* printa nome da pratica*/}
        </ViewFocus>
      </ViewCountdown>

      <ViewProgressBar>
        <ProgressBar
          progress={progress}
          color={"#FFF"}
          style={{alignItems: "center", marginVertical: 20,
          justifyContent: "center"}}
        />
      </ViewProgressBar>

      <TimingWrapper>
        <Timing onChangeTime={setMinutes} />
      </TimingWrapper>

      <ButtonWrapper>
        {!isStarted ? (  // Nao esta em execucao, entao comece
          <RoundedButton title="start" onPress={() => setIsStarted(true)} />
        ) : (
          <RoundedButton title="pause" onPress={() => setIsStarted(false)} />
        )}
      </ButtonWrapper> 
      <ClearSubjectWrapper>
        <RoundedButton size={50} title="Finish" onPress={clearSubject} />
      </ClearSubjectWrapper>
    </TimerContainer>
  );
};
export default Timer;