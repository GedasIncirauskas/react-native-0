import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const goalInputHandler = (value) => {
    setEnteredGoalText(value);
  };

  const addNewGoalHandler = () => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
    setEnteredGoalText("");
    setModalIsVisible(false);
  };

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  return (
    <View style={styles.appContainer}>
      <View>
        <Text style={styles.goalTitle}>Course Goals App</Text>
      </View>
      <Button
        title="Add New Goal"
        color="#5e0acc"
        onPress={startAddGoalHandler}
      />
      <GoalInput
        onGoalInput={goalInputHandler}
        onAddGoal={addNewGoalHandler}
        enteredGoalText={enteredGoalText}
        onCancel={endAddGoalHandler}
        visible={modalIsVisible}
      />

      <View style={styles.goalContainer}>
        <FlatList
          data={courseGoals}
          keyExtractor={(item, index) => index.toString() + item}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item} />;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  goalContainer: {
    flex: 5,
  },
  goalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
});
