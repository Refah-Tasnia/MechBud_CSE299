import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useFonts } from "expo-font";
import UserAuth from "./pages/UserAuth";
import Home from "./pages/Home";
import EditProfile from "./pages/EditProfile";
import Profile from "./pages/Profile";
import DetailsScreen from "./pages/DetailsScreen";
import SettingsScreen from "./pages/SettingsScreen";
import ChangePassword from "./pages/ChangePassword";

import ViewMech from "./pages/ViewMech";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
  });

  if (fontsLoaded)
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="UserAuth" component={UserAuth} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ViewMech" component={ViewMech} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
          <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="ChangePassword" component={ChangePassword} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

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
