import { TouchableOpacity, Text } from "react-native";

export const RoundedButton = ({
  style,
  textStyle,
  size = 100,
  onPress,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles(size).radius, style]}
      onPress={onPress}
    >
      <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size) => ({
  radius: {
    borderRadius: size / 2,
    width: size,
    height: size,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#FFF",
    borderWidth: 2,
  },
  text: { color: "#FFF", fontSize: size / 4 },
});
