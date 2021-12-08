import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Saludar = (props) => {
  const { name, age } = props;
  console.log(name, age);
  return (
    <View>
      <Text>
        Hola {name}, de {age} años de edad
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});
