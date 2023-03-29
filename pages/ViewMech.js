import React, { useEffect, useState } from "react";
import { Text, View, FlatList } from "react-native";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
const PrintList = () => {
  const [mechanicList, setMechanicList] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "Mechanic"), (mechanic) => {
      setMechanicList(mechanic.docs.map((doc) => doc.data()));
    });
  }, []);

  const listOfItems = mechanicList.map((item, idx) => {
    return (
      <ScrollView key={item.mech_ID}>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 24 }}>
            Mechanic name: {item.first_name} , Contact no.:
            {item.contact_no}
          </Text>
        </View>
      </ScrollView>
    );
  });

  return listOfItems;
};

const ViewMech = () => {
  return (
    <View>
      <PrintList />
    </View>
  );
};

export default ViewMech;
