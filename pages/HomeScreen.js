import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => alert('This is the "Home" screen.')}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        Home Screen
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate("DetailsScreen")}>
        <Text>Details</Text>
      </TouchableOpacity>
      <Text></Text>
      <TouchableOpacity onPress={() => navigation.navigate("SettingsScreen")}>
        <Text>Settings</Text>
      </TouchableOpacity>
    </View>
  );
}
