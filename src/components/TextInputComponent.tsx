import { View, Text, TextInput, Image } from 'react-native'
import React from 'react'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import colors from '../constants/Colors'
import { downArrow } from '../assets/images'

const TextInputComponent = (props) => {
    const { placeholder, containerStyle = { height: HEIGHT * 0.07 }, imageSource } = props
    return (
        <View style={{ borderRadius: WIDTH * 0.02, borderWidth: 1, padding: HEIGHT * 0.02, borderColor: colors.lightgrey, ...containerStyle, justifyContent: "space-between", flexDirection: "row", alignItems: 'center' }}>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor='#303841'
                style={{ marginHorizontal: HEIGHT * 0.01 }}
            />
            {imageSource && <Image source={imageSource} />}
        </View>
    )
}

export default TextInputComponent