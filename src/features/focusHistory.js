/* eslint-disable react/prop-types */
import React from "react";
import { FlatList } from "react-native";
import { ViewSub, SubText,TextItem, TextTitle, ViewContainer } from "./styles";

export const FocusHistory = ({ history }) => {
  
  if (!history || !history.length) { 
    //Se history não existe ou history.length é igual a zero, então será exibido  "History:".
    return (
      <ViewSub>
      <SubText>History:</SubText>
      </ViewSub>
    );
  }

  const renderItem = ({ item }) => <TextItem>-{item}</TextItem>;
  
  return (
    <ViewContainer>
      <TextTitle>Ultimas práticas:</TextTitle>
      <FlatList data={history} renderItem={renderItem} />
      {/* recebe os dados da lista através da propriedade data e a função renderItem é responsável por renderizar cada item individualmente em lista.*/} 
      
    </ViewContainer>
  );
};


