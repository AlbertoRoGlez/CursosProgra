import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

export const Saludar = (props) => {
  const { firstname, lastname } = props;
  return (
    <Text>
      Hola {firstname} {lastname}, bienvenido.
    </Text>
  );
};

Saludar.defaultProps = {
  firstname: "Alberto",
  lastname: "Rosales",
};

Saludar.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string,
};

const styles = StyleSheet.create({});
