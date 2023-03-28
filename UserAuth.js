import React, { useState, useSyncExternalStore } from 'react';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import BlueButton from './Components/BlueButton';
import TextField from './Components/TextField';
import { collection, addDoc, query, where, getDocs, limit } from "firebase/firestore";
import { db } from './firebase';

const UserAuth = () => {
    const [registerMode, setRegisterMode] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [NID, setNID] = useState('')
    const [resData, setResData] = useState([])
    const [exists, setExists] = useState(false)

    const userAuthentication = async () => {
        if (email === '' || password === '') {
            alert("Please fill up all fields")
        } else if (NID.length < 17) {
            alert("Minimum number of digits should be 17")
        }
        else {
            if (registerMode) {
                const q = query(collection(db, "Users"));
                const res = await getDocs(q)
                setResData(res.docs.map(doc => doc.data()))
                if (resData.map(doc => doc.email.includes(email))) {
                    setExists(true)
                } else {
                    setExists(false)
                }

                if (exists) {
                    return alert('User already exists')
                } else {
                    const addData = await addDoc(collection(db, "Users"), {
                        email,
                        password,
                        NID
                    })
                    if (addData) {
                        alert('Registration Succesfull')
                    }
                }
            } else {
                console.log('login')
            }
        }
    }


    return (
        <View style={{ gap: 20 }}>
            <Text style={styles.Text}>{registerMode ? "Register" : "Login"}</Text>
            <TextField placeholder="Email" setVal={setEmail} />
            <TextField placeholder="Password" passwordType setVal={setPassword} />
            {registerMode && <TextField placeholder="NID" setVal={setNID} NIDType />}
            <BlueButton title={registerMode ? "Register" : "Login"} onPress={userAuthentication} />
            {<TouchableOpacity style={{ alignItems: 'center', marginTop: -10 }}
                onPress={() => setRegisterMode(!registerMode)}>
                <Text style={styles.RegisterText}>
                    {registerMode ? "Login if already registered" : "Register if not logged in"}
                </Text>
            </TouchableOpacity>}
        </View>
    )
}

const styles = StyleSheet.create({
    Text: {
        fontFamily: 'Poppins-Regular', fontSize: 32, margin: 5, color: '#555'
    },
    RegisterText: {
        fontFamily: 'Poppins-Regular', fontSize: 18, margin: 5, color: '#555'
    }
})

export default UserAuth