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

const styles = () => ({
  radius: {
    borderRadius: 30,
    width: 100,
    height:100,
    
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#FFF",
    borderWidth: 2,
    
  },
  text: { color: "#FFF", fontSize: 30},
});
