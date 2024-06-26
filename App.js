import React, { useReducer } from "react";
import { Text, Button, StatusBar, StyleSheet, View } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
};

function Reducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.text}>Select a Quantity</Text>
      <Text style={styles.textNumber}>Number: {state.count}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="ADD"
          onPress={() => dispatch({ type: "increment", payload: 1 })}
          color="green"
          style={styles.button}
        />
        <Button
          title="REMOVE"
          onPress={() => dispatch({ type: "decrement", payload: 1 })}
          color="red"
          style={styles.button}
        />
        <Button
          title="RESET"
          onPress={() => dispatch({ type: "reset" })}
          style={styles.button}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tan",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  textNumber: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
});

export default Reducer;
