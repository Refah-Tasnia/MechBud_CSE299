import React, { useEffect, useState } from "react";
import { Text, View, FlatList, SafeAreaView } from "react-native";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
const PrintList = () => {
  const [rentCarList, setRentCar] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "Renting_Vehicles"), (Renting_Vehicles) => {
      setRentCar(Renting_Vehicles.docs.map((doc) => doc.data()));
    });
  }, []);

  const listOfItems = rentCarList.map((item, idx) => {
    return (
      <ScrollView key={item.rent_ID}>
        <SafeAreaView style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 24 }}>
            Car model: {item.car_model} , Contact:
            {item.contact_rent}
          </Text>
        </SafeAreaView>
      </ScrollView>
    );
  });

  return listOfItems;
};

const ViewRentCar = () => {
  return (
    <View>
      <PrintList />
    </View>
  );
};

export default ViewRentCar;
