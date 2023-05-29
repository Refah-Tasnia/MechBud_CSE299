import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { collection, query, onSnapshot, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { ScrollView } from "react-native-gesture-handler";
import { Linking, PermissionsAndroid } from "react-native";

import RepairHistory from "./RepairHistory";

const ViewMech = () => {
  const [mechanicList, setMechanicList] = useState([]);
  const [selectedMechanic, setSelectedMechanic] = useState(null);
  const [repairHistory, setRepairHistory] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "Mechanic"), (snapshot) => {
      setMechanicList(snapshot.docs.map((doc) => doc.data()));
    });

    return () => unsubscribe();
  }, []);

  const handlePress = (contactNo) => {
    Linking.openURL(`tel:${contactNo}`);
  };

  const handleBookNowPress = (mechanic) => {
    setSelectedMechanic(mechanic);
    Alert.alert("Sending request to mechanic");

    setTimeout(() => {
      Alert.alert("Mechanic accepted the request");
      shareLocation(mechanic);
    }, 5000);

    console.log(`Booking a service with ${mechanic.email}`);
  };

  const shareLocation = async (mechanic) => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            const locationURL = `https://www.google.com/maps?q=${latitude},${longitude}`;
            Linking.openURL(locationURL);

            // Add mechanic details to Repair collection
            addMechanicToRepair(mechanic, locationURL);
          },
          (error) => {
            console.log("Error getting location:", error);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
      } else {
        console.log("Location permission denied");
      }
    } catch (error) {
      console.log("Error requesting location permission:", error);
    }
  };

  const addMechanicToRepair = async (mechanic, locationURL) => {
    try {
      const repairData = {
        mechanic_email: mechanic.email,
        mechanic_name: `${mechanic.first_name} ${mechanic.last_name}`,
        location: locationURL,
      };

      await addDoc(collection(db, "Repair"), repairData);
      console.log("Mechanic added to Repair collection");

      // Add the repair data to history
      setRepairHistory((prevHistory) => [...prevHistory, repairData]);
    } catch (error) {
      console.log("Error adding mechanic to Repair collection:", error);
    }
  };

  const renderMechanic = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => handlePress(item.contact_no)}
    >
      <Text style={styles.name}>{`${item.first_name} ${item.last_name}`}</Text>
      <Text style={styles.phone}>{item.contact_no}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleBookNowPress(item)}
      >
        <Text style={styles.buttonText}>Book Now</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={mechanicList}
        renderItem={renderMechanic}
        keyExtractor={(item) => item.email}
        contentContainerStyle={styles.listContainer}
      />
      {selectedMechanic && (
        <RepairHistory
          mechanic={selectedMechanic}
          repairHistory={repairHistory}
          onClose={() => setSelectedMechanic("")}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  listContainer: {
    flexGrow: 1,
  },
  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  phone: {
    fontSize: 16,
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#007aff",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ViewMech;
