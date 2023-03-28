import React from 'react'
import { TextInput, View } from 'react-native'

const TextField = ({ placeholder, passwordType, setVal, NIDType }) => {
    return (
        <View style={{
            backgroundColor: '#fff', padding: 10, width: 354, height: 52,
            borderColor: '#C0C0C0', borderWidth: 3, borderRadius: 10
        }}>
            <TextInput placeholder={placeholder} secureTextEntry={passwordType}
                keyboardType={NIDType ? "numeric" : "default"}
                onChangeText={(text) => setVal(text)}
                maxLength={NIDType ? 17 : 32}
                style={{ fontSize: 16, fontFamily: 'Poppins-Regular', color: '#555' }} />
        </View>
    )
}

export default TextField
