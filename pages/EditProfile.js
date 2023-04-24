import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { db } from "../firebase";
import { collection, query, onSnapshot } from "firebase/firestore";

const EditProfile = () => {
  const navigation = useNavigation();
  const [ID, viewID] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "User"), (user) => {
      viewID(user.docs.map((doc) => doc.data()));
    });
  }, []);

  const profile = {
    firstName: "Jane",
    lastName: "Doe",
    email: "jane.doe@example.com",
    contact: "0188822291",
    userID: "2010",
    avatar: "https://example.com/jane-doe-avatar.png",
  };
  const [firstName, setFirstName] = useState(profile.firstName);
  const [lastName, setLastName] = useState(profile.lastName);
  const [email, setEmail] = useState(profile.email);
  const [userID, setUserID] = useState(profile.userID);
  const [contact, setContact] = useState(profile.contact);
  const [avatar, setAvatar] = useState(profile.avatar);

  const handleSubmit = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={{
            uri: "https://www.bootdey.com/img/Content/avatar/avatar3.png",
          }}
        />
        <TouchableOpacity
          style={styles.changeAvatarButton}
          onPress={() => {
            /* open image picker */
          }}
        >
          <Text style={styles.changeAvatarButtonText}>Change Avatar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Email</Text>
        <Text>{email}</Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ChangePassword");
          }}
        >
          <Text>Change Password</Text>
        </TouchableOpacity>
        <Text style={styles.label}>User ID</Text>
        <Text>{userID}</Text>

        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter First Name"
          value={firstName}
          onChangeText={setFirstName}
        />
        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter last Name"
          value={lastName}
          onChangeText={setLastName}
        />

        <Text style={styles.label}>Contact</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Contact"
          value={contact}
          onChangeText={setContact}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    width: "80%",
  },
  label: {
    marginTop: 20,
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#1E90FF",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  avatarContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  changeAvatarButton: {
    marginTop: 10,
  },
  changeAvatarButtonText: {
    color: "#1E90FF",
    fontSize: 18,
  },
});

export default EditProfile;
