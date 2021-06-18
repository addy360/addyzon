import { NavigationContainer } from "@react-navigation/native";
import { Container, Text } from "native-base";
import React from "react";
import { StyleSheet, View } from "react-native";
import DrawerNavigator from "./Navidation/DrawerNavigator";

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
