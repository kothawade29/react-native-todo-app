import { StatusBar } from "expo-status-bar";
import React, { Component, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Keyboard,
} from "react-native";
import Task from "./Task";

// -------------------TODO APP-----------------------------
function App() {
  const [task, setTask] = useState("");
  const [taskItems, settaskItems] = useState([]);

  // function to add task
  const addTask = () => {
    Keyboard.dismiss();
    settaskItems([...taskItems, task]);
    setTask(null);
  };

  // function to delete completed task
  const completedTask = (index) => {
    let copyItems = [...taskItems];
    copyItems.splice(index, 1);
    settaskItems(copyItems);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>Today's Task</Text>
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.textInputButton}
          value={task}
          placeholder="Add task"
          onChangeText={(text) => setTask(text)}
        />
        <Button title="add task" onPress={() => addTask()} />
      </View>

      <View style={styles.displayView}>
        {taskItems.map((item, index) => {
          return (
            <View style={styles.box}>
              <Task key={index} text={item} />
              <Button
                style={styles.deleteButton}
                title="Delete"
                onPress={() => {
                  completedTask(index);
                }}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerView: {
    padding: 40,
    alignItems: "center",
  },
  headerText: {
    color: "green",
    fontSize: 30,
    fontWeight: "bold",
  },
  inputView: {
    alignItems: "center",
    justifyContent: "center",
  },
  textInputButton: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  displayView: {
    alignItems: "center",
    margin: 20,
  },
  box: {
    flexDirection: "row",
    marginTop: 10,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

export default App;
