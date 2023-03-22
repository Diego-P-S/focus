/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Vibration } from "react-native";
import { Countdown } from "../components/CountDown";
import { RoundedButton } from "../components/RoundedButton";
import { Timing } from "./timing";
import { useKeepAwake } from "expo-keep-awake";
import { ProgressBar } from 'react-native-paper';
import {ViewProgressBar, TimerContainer, ViewCountdown, SubText, ViewFocus,ClearSubjectWrapper,TimingWrapper,ViewButtonWrapper} from "./styles";

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export const Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject);
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

        <ViewFocus >
          <SubText >Focusing on:</SubText>
          <SubText >{focusSubject}</SubText>
        </ViewFocus>
      </ViewCountdown>

      <ViewProgressBar>
        <ProgressBar
          progress={progress}
          color={"#FFF"}
          style={{alignItems: "center",
          justifyContent: "center"}}
        />
      </ViewProgressBar>

      <TimingWrapper>
        <Timing onChangeTime={setMinutes} />
      </TimingWrapper>

      <ViewButtonWrapper>
        {!isStarted ? (
          <RoundedButton title="start" onPress={() => setIsStarted(true)} />
        ) : (
          <RoundedButton title="pause" onPress={() => setIsStarted(false)} />
        )}
      </ViewButtonWrapper>
      <ClearSubjectWrapper>
        <RoundedButton size={50} title="-" onPress={clearSubject} />
      </ClearSubjectWrapper>
    </TimerContainer>
  );
};