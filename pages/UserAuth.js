import React, { useState, useSyncExternalStore } from "react";
import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import BlueButton from "../Components/BlueButton";
import TextField from "../Components/TextField";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  limit,
} from "firebase/firestore";
import { db } from "../firebase";

import { useNavigation } from "@react-navigation/native";

const UserAuth = () => {
  const [registerMode, setRegisterMode] = useState(false);
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [NID, setNID] = useState("");
  const [resData, setResData] = useState([]);
  const [isMechanic, setIsMechanic] = useState(false);

  const navigation = useNavigation();

  const getTitle = () => {
    let title = "";
    if (registerMode && !isMechanic) {
      title = "User Registration";
    } else if (registerMode && isMechanic) {
      title = "Mechanic Registration";
    } else {
      title = "Login";
    }
    return <Text style={styles.Text}>{title}</Text>;
  };

  const userAuthentication = async () => {
    if (email === "" || password === "") {
      alert("Please fill up email and password fields");
    } else if (registerMode && isMechanic) {
      if (NID.length < 17) {
        alert("Minimum number of digits should be 17");
      } else {
        const addData = await addDoc(collection(db, "Mechanic"), {
          firstName,
          lastName,
          email,
          password,
          NID,
        });
        addData && alert("Registration Successful");
      }
    } else if (
      registerMode &&
      email === "admin123@gmail.com" &&
      password === "admin123"
    ) {
      <Text>Welcome Admin!</Text>;
    } else {
      const q = query(
        collection(db, "User"),
        where("email", "==", email),
        limit(1)
      );
      const response = await getDocs(q);
      const responseData = response?.docs[0]?.data();
      if (registerMode) {
        if (!response.empty) {
          const exists = responseData?.email === email;
          if (exists) {
            return alert("User already exists");
          }
        } else {
          const addData = await addDoc(collection(db, "User"), {
            firstName,
            lastName,
            email,
            password,
          });
          addData && alert("Registration Successful");
        }
      } else {
        if (!response.empty) {
          const userExist = responseData?.email === email;
          if (userExist) {
            if (responseData?.password === password) {
              navigation.navigate("Home");
            } else {
              return alert("Wrong Password");
            }
          } else {
            return alert("User doesn't exist");
          }
        }
      }
    }
  };

  return (
    <View style={styles.container}>
      {getTitle()}
      {registerMode && (
        <>
          <TextField placeholder="First Name" setVal={setFirstName} />
          <TextField placeholder="Last Name" setVal={setLastName} />
        </>
      )}
      <TextField placeholder="Email" setVal={setEmail} />
      <TextField placeholder="Password" passwordType setVal={setPassword} />
      {isMechanic && registerMode && (
        <TextField placeholder="NID" setVal={setNID} NIDType />
      )}
      <BlueButton
        title={registerMode ? "Register" : "Login"}
        onPress={userAuthentication}
      />
      {
        <TouchableOpacity
          style={{ alignItems: "center", marginTop: -10 }}
          onPress={() => setRegisterMode(!registerMode)}
        >
          <Text style={styles.RegisterText}>
            {registerMode
              ? "Login if already registered"
              : "Register if not logged in"}
          </Text>
        </TouchableOpacity>
      }

      {registerMode && (
        <TouchableOpacity onPress={() => setIsMechanic(!isMechanic)}>
          <Text style={styles.RegisterText}>
            {isMechanic ? "Register as User" : "Register as a Mechanic"}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  Text: {
    fontFamily: "Poppins-Regular",
    fontSize: 32,
    margin: 5,
    color: "#555",
  },
  RegisterText: {
    fontFamily: "Poppins-Regular",
    fontSize: 18,
    margin: 5,
    color: "#555",
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
});

export default UserAuth;
