import { SafeAreaView, TextInput, Text, StyleSheet } from "react-native";
import React from "react";

const SearchBar = (props) => {
  return (
    <SafeAreaView StyleSheet={styles.container}>
      <TextInput
        placeholder="Search"
        style={styles.input}
        value={props.searchText}
        onChangeText={(text) => props.setSearchText(text)}
      />
    </SafeAreaView>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 15,
    color: "#000",
    borderWidth: 1,
  },
});
