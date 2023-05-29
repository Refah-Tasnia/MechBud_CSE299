import React, { useEffect, useState } from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const RepairHistory = ({ route }) => {
  const { email } = route.params || {}; // Use fallback value {} for route.params

  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchRepairHistory = async () => {
      const q = query(
        collection(db, "Repair"),
        where("mechanic_email", "==", email)
      );
      const querySnapshot = await getDocs(q);
      const historyData = querySnapshot.docs.map((doc) => doc.data());
      setHistory(historyData);
    };

    if (email) {
      fetchRepairHistory();
    }
  }, [email]);

  const renderRepair = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.car}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {history.length > 0 ? (
        <FlatList
          data={history}
          renderItem={renderRepair}
          keyExtractor={(item) => item.id.toString()}
          style={styles.list}
        />
      ) : (
        <Text>No repair history found</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  list: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: "#F0F0F0",
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
  },
});

export default RepairHistory;
