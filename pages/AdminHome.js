import { useNavigation } from "@react-navigation/native";

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  FlatList,
} from "react-native";
import ViewMech from "./ViewMech";
import Profile from "./Profile";
import ViewRentCar from "./ViewRentCar";
import ViewUser from "./ViewUser";

export default AdminHome = () => {
  const navigation = useNavigation();
  const data = [
    {
      id: 1,
      title: "View Profile",
      color: "#FF4500",
      image: "https://img.icons8.com/color/70/000000/name.png",
    },

    {
      id: 4,
      title: "View Mechanics",
      color: "#FF69B4",

      image: "https://img.icons8.com/color/70/000000/groups.png",
    },

    {
      id: 6,
      title: "View Rentable Cars",
      color: "#3D846C",

      image: "https://img.icons8.com/color/80/000000/taxi.png",
    },
    {
      id: 8,
      title: "View Users",
      color: "#20B2AA",

      image: "https://img.icons8.com/dusk/70/000000/crowd.png",
    },
    {
      id: 9,
      title: "Repair History",
      color: "#191970",

      image: "https://img.icons8.com/color/70/000000/to-do.png",
    },
    {
      id: 9,
      title: "",
      color: "#008080",

      image: "https://img.icons8.com/color/70/000000/basketball.png",
    },
  ];

  const [options, setOptions] = useState(data);

  const showAlert = () => {
    Alert.alert("Coming Soon!");
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={options}
        horizontal={false}
        numColumns={2}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={({ item }) => {
          if (item.id == 1) {
            return (
              <TouchableOpacity
                style={[styles.card, { backgroundColor: item.color }]}
                onPress={() => {
                  navigation.navigate(Profile);
                }}
              >
                <View style={styles.cardHeader}>
                  <Text style={styles.title}>{item.title}</Text>
                </View>
                <Image style={styles.cardImage} source={{ uri: item.image }} />
                <View style={styles.cardFooter}></View>
              </TouchableOpacity>
            );
          } else if (item.id == 4) {
            return (
              <TouchableOpacity
                style={[styles.card, { backgroundColor: item.color }]}
                onPress={() => {
                  navigation.navigate(ViewMech);
                }}
              >
                <View style={styles.cardHeader}>
                  <Text style={styles.title}>{item.title}</Text>
                </View>
                <Image style={styles.cardImage} source={{ uri: item.image }} />
                <View style={styles.cardFooter}></View>
              </TouchableOpacity>
            );
          } else if (item.id == 6) {
            return (
              <TouchableOpacity
                style={[styles.card, { backgroundColor: item.color }]}
                onPress={() => {
                  navigation.navigate(ViewRentCar);
                }}
              >
                <View style={styles.cardHeader}>
                  <Text style={styles.title}>{item.title}</Text>
                </View>
                <Image style={styles.cardImage} source={{ uri: item.image }} />
                <View style={styles.cardFooter}></View>
              </TouchableOpacity>
            );
          } else if (item.id == 8) {
            return (
              <TouchableOpacity
                style={[styles.card, { backgroundColor: item.color }]}
                onPress={() => {
                  navigation.navigate(ViewUser);
                }}
              >
                <View style={styles.cardHeader}>
                  <Text style={styles.title}>{item.title}</Text>
                </View>
                <Image style={styles.cardImage} source={{ uri: item.image }} />
                <View style={styles.cardFooter}></View>
              </TouchableOpacity>
            );
          } else {
            return (
              <TouchableOpacity
                style={[styles.card, { backgroundColor: item.color }]}
                onPress={() => {
                  showAlert(item.view);
                }}
              >
                <View style={styles.cardHeader}>
                  <Text style={styles.title}>{item.title}</Text>
                </View>
                <Image style={styles.cardImage} source={{ uri: item.image }} />
                <View style={styles.cardFooter}></View>
              </TouchableOpacity>
            );
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  list: {
    //paddingHorizontal: 5,
    backgroundColor: "#E6E6E6",
  },
  listContainer: {
    alignItems: "center",
  },
  /******** card **************/
  card: {
    marginHorizontal: 2,
    marginVertical: 2,
    flexBasis: "48%",
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    height: 70,
    width: 70,
    alignSelf: "center",
  },
  title: {
    fontSize: 16,
    flex: 1,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 12,
    flex: 1,
    color: "#FFFFFF",
  },
  icon: {
    height: 20,
    width: 20,
  },
});
