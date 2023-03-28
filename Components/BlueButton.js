import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const BlueButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{
            padding: 12, width: 354, height: 52,
            backgroundColor: '#3498DB', alignItems: 'center', borderRadius: 10
        }}>
            <Text style={{ color: '#fff', fontSize: 18, fontFamily: 'Poppins-Regular' }}>{title}</Text>
        </TouchableOpacity>
    )
}

export default BlueButton