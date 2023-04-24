import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={[styles.card, styles.profileCard]}>
          <Image
            style={styles.avatar}
            source={{
              uri: "https://bootdey.com/img/Content/avatar/avatar6.png",
            }}
          />
          <Text style={styles.name}>John Doe</Text>
          <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
            <Text>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTittle}>My contact</Text>
          <Text> -0188822291</Text>
          <Text> -jane.doe@example.com</Text>
          <Text> - User ID: 2010</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTittle}>My car info</Text>
          <Text> - Model: Toyota</Text>
          <Text> - License no: dhaka-metro-12300123</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#DCDCDC",
  },
  cardTittle: {
    color: "#808080",
    fontSize: 22,
    marginBottom: 5,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 10,
    height: 100,
    marginTop: 10,
  },
  profileCard: {
    height: 220,
    alignItems: "center",
    marginTop: 20,
  },
  name: {
    marginTop: 10,
    fontSize: 22,
    color: "#808080",
  },
  photosContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    height: "auto",
  },
  photosCard: {
    marginTop: 10,
  },
  photo: {
    width: 113,
    height: 113,
    marginTop: 5,
    marginRight: 5,
  },
});
export default Profile;
