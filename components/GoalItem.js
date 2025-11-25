import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({ text, onDeleteItem }) => {
  return (
    <Pressable
      onPress={() => onDeleteItem(text)}
      style={({ pressed }) => pressed && { opacity: 0.5 }}
      android_ripple={{ color: "blue" }}
    >
      <View style={styles.listGoals}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  listGoals: {
    padding: 8,
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
