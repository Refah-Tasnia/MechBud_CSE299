import React, { useState, useSyncExternalStore } from "react";
import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
      <TouchableOpacity onPress={() => navigation.navigate("ViewMech")}>
        <Text>View Mechanics</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btnStyle: {
    backgroundColor: "#cccccc",
    padding: 5,
  },
});

export default Home;
