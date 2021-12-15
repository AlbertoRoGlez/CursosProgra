import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export const LoginForm = () => {
  return (
    <View>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Contraseña" />
      <Button title="Enviar" onPress={() => console.log("Enviado")} />
    </View>
  );
};

const styles = StyleSheet.create({});
