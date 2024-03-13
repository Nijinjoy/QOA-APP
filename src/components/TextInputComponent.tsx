import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import colors from '../constants/Colors'

const TextInputComponent = (props) => {
    const { placeholder, containerStyle = { height: HEIGHT * 0.07 } } = props
    return (
        <View style={{ borderRadius: WIDTH * 0.02, borderWidth: 1, padding: HEIGHT * 0.02, borderColor: colors.lightgrey, ...containerStyle }}>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor='#303841'
                style={{ marginHorizontal: HEIGHT * 0.01 }}
            />
        </View>
    )
}

export default TextInputComponent