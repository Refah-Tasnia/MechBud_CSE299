import React, { useEffect, useState } from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import SearchBar from "../Components/SearchBar";

const PrintList = () => {
  const [UserList, setUser] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "User"), (User) => {
      setUser(User.docs.map((doc) => doc.data()));
    });
  }, []);

  const listOfItems = UserList.map((item, idx) => {
    return (
      <ScrollView key={item.email}>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 24 }}>
            First Name: {item.firstName}, Last Name: {item.lastName}
          </Text>
        </View>
      </ScrollView>
    );
  });

  return listOfItems;
};

const ViewUser = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <View StyleSheet={Styles.container}>
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      <Text>{searchText}</Text>
      <PrintList />
    </View>
  );
};

export default ViewUser;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
