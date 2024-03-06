import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { hands, programs, translation } from '../assets/images'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import colors from '../constants/Colors'

const CommonComponent = (props) => {
    const { typeStyle, imageUrl, category, title, date, language, type, customView, containerStyle } = props
    return (
        <View style={{ borderWidth: 0, borderRadius: WIDTH * 0.02, backgroundColor: colors.white, ...containerStyle }}>
            <Image /* source={{ uri: imageUrl }} */ source={programs} style={{ height: HEIGHT * 0.2, borderTopLeftRadius: WIDTH * 0.02, width: WIDTH * 0.9, borderTopRightRadius: WIDTH * 0.02 }} />
            <View style={{ marginTop: HEIGHT * 0.02, margin: HEIGHT * 0.025 }}>
                <Text style={{ fontSize: 13, color: colors.skyblue }}>{date}</Text>
                <Text style={{ fontSize: 16, color: colors.black, marginTop: HEIGHT * 0.01 }}>{title}</Text>
                {customView}
            </View>
            <View style={{ borderWidth: 1, borderColor: colors.darkred, position: "absolute", top: HEIGHT * 0.15, left: WIDTH * 0.06 }}>
                <Text>Online</Text>
            </View>
        </View >
    )
}

export default CommonComponent