import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { useFonts } from 'expo-font';
import UserAuth from './UserAuth';

export default function App() {

  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
  });

  // getDocs(collection(db, "Users")).then((result) => {
  //   result.docs.map((res) => {
  //     console.log(res.data())
  //   })
  // })

  // const [user, setUser] = useState("");


  // const getDocId = async () => {
  //   const q = query(collection(db, "Users"), where("username", "==", user));
  //   const res = await getDocs(q)
  //   res.docs.map((data) => {
  //     console.log(data.id, data.data())
  //   })
  // }

  if (fontsLoaded)
    return (
      <View style={styles.container}>
        <UserAuth />
        <StatusBar style="auto" />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnStyle: {
    backgroundColor: "#cccccc",
    padding: 5
  }
});
