import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { hands, programs, translation } from '../assets/images'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import colors from '../constants/Colors'
import InnerComponent from './InnerComponent'

const CommonComponent = (props) => {
    const { typeStyle, imageUrl, category, title, date, containerStyle, innerComponent, badgeText, badgeColor } = props
    return (
        <View style={{ borderWidth: 0, borderRadius: WIDTH * 0.02, backgroundColor: colors.white, ...containerStyle }}>
            <Image source={{ uri: imageUrl }} style={{ height: HEIGHT * 0.2, borderTopLeftRadius: WIDTH * 0.02, width: WIDTH * 0.89, borderTopRightRadius: WIDTH * 0.02 }} />
            <View style={{ margin: HEIGHT * 0.02, width: WIDTH * 0.8 }}>
                <Text style={{ fontSize: 13, color: colors.skyblue }}>{date}</Text>
                <Text style={{ fontSize: 15, color: colors.black, fontWeight: "500", width: WIDTH * 0.8, marginTop: HEIGHT * 0.005 }}>{title}</Text>
                {innerComponent && innerComponent}
            </View>
            {badgeText && (
                <View style={{ position: 'absolute', backgroundColor: badgeColor, padding: WIDTH * 0.02, borderRadius: WIDTH * 0.015, left: WIDTH * 0.05, top: HEIGHT * 0.14 }}>
                    <Text style={{ fontSize: 13, color: colors.purewhite }}>{badgeText}</Text>
                </View>
            )}
        </View >
    )
}

export default CommonComponent