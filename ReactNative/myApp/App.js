import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Saludar } from "./src/components/Saludar";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Curso React Native</Text>
      <Saludar />
      <Saludar name="Carlos Navarro" age="18" />
      <Saludar name="Alberto Rosales" age="20" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
