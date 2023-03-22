/* eslint-disable react/prop-types */
import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { fontSizes, spacing } from "../utils/sizes";
import { colors } from "../utils/colors";

export const FocusHistory = ({ history }) => {
  
  if (!history || !history.length)
    return (

      <View style={{padding:20}}>
      <Text style={styles.title}>Let`s start?</Text>
      </View>
    );

  const renderItem = ({ item }) => <Text style={styles.item}>-{item}</Text>;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we`ve focused on</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1,
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.white,
    padding: spacing.sm,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: "bold",
  },
});
