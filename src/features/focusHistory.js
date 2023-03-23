/* eslint-disable react/prop-types */
import React from "react";
import { FlatList } from "react-native";
import { ViewSub, SubText,TextItem, TextTitle, ViewContainer } from "./styles";

export const FocusHistory = ({ history }) => {
  
  if (!history || !history.length) {
    return (
      <ViewSub>
      <SubText>Let`s start?</SubText>
      </ViewSub>
    );
  }

  const renderItem = ({ item }) => <TextItem>-{item}</TextItem>;
  
  return (
    <ViewContainer>
      <TextTitle>Things we`ve focused on</TextTitle>
      <FlatList data={history} renderItem={renderItem} />
    </ViewContainer>
  );
};


